import { promises as fs } from 'fs';
import path from 'path';
import formidable from 'formidable';
import connection from '../db';
import { Readable } from 'stream';

export const config = {
  api: {
    bodyParser: false,
  },
};

const PDF_DIR = path.join(process.cwd(), 'public', 'pdf');

async function parseForm(req) {
  return new Promise((resolve, reject) => {
    const form = formidable({
      multiples: false,
      maxFileSize: 5 * 1024 * 1024, // 5MB
      // Temporarily remove filter to debug
      // filter: ({ mimetype }) => mimetype === 'application/pdf',
      uploadDir: PDF_DIR,
      keepExtensions: true,
    });
    form.parse(req, (err, fields, files) => {
      if (err) return reject(err);
      resolve({ fields, files });
    });
  });
}

function webRequestToNodeStream(request) {
  const reader = request.body.getReader();
  const nodeReq = new Readable({
    async read() {
      try {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          this.push(value);
        }
        this.push(null);
      } catch (error) {
        this.destroy(error);
      }
    }
  });
  return nodeReq;
}

export async function GET() {
  try {
    const records = await new Promise((resolve, reject) => {
      connection.query('SELECT * FROM knowledge ORDER BY created_at DESC', (err, results) => {
        if (err) return reject(err);
        resolve(results);
      });
    });
    return new Response(JSON.stringify(records), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ message: 'Error fetching records.' }), { status: 500 });
  }
}

export async function POST(req) {
  try {
    // Ensure PDF directory exists
    await fs.mkdir(PDF_DIR, { recursive: true });
    
    // Convert web request to node stream
    const nodeReq = webRequestToNodeStream(req);
    nodeReq.headers = Object.fromEntries(req.headers.entries());
    nodeReq.method = 'POST';
    nodeReq.url = '/api/upload';
    
    // Parse form data
    const { fields, files } = await parseForm(nodeReq);
    
    // Debug log
    console.log('Parsed fields:', fields);
    console.log('Parsed files:', files);
    
    let file = files.file;
    if (Array.isArray(file)) file = file[0];
    let title = fields.title;
    if (Array.isArray(title)) title = title[0];
    
    // Validate file
    if (!file) {
      return new Response(JSON.stringify({ message: 'No file uploaded.' }), { status: 400 });
    }
    
    // Validate title
    if (!title || typeof title !== 'string' || !title.trim()) {
      if (file && file.filepath) {
        await fs.unlink(file.filepath).catch(() => {});
      }
      return new Response(JSON.stringify({ message: 'Title is required.' }), { status: 400 });
    }
    
    // Check file extension as backup validation
    const fileExtension = path.extname(file.originalFilename || '').toLowerCase();
    const validExtensions = ['.pdf'];
    
    // Validate file type - check both mimetype and extension
    if (file.mimetype !== 'application/pdf' && !validExtensions.includes(fileExtension)) {
      if (file.filepath) {
        await fs.unlink(file.filepath).catch(() => {});
      }
      return new Response(JSON.stringify({ 
        message: 'Only PDF files are allowed.',
        debug: {
          mimetype: file.mimetype,
          extension: fileExtension,
          originalFilename: file.originalFilename
        }
      }), { status: 400 });
    }
    
    // Validate file size
    if (file.size > 5 * 1024 * 1024) {
      if (file.filepath) {
        await fs.unlink(file.filepath).catch(() => {});
      }
      return new Response(JSON.stringify({ message: 'File size exceeds 5MB.' }), { status: 400 });
    }
    
    // Generate unique filename to avoid conflicts
    const timestamp = Date.now();
    const originalName = file.originalFilename || 'upload.pdf';
    const extension = path.extname(originalName);
    const baseName = path.basename(originalName, extension);
    const uniqueFileName = `${baseName}_${timestamp}${extension}`;
    const finalPath = path.join(PDF_DIR, uniqueFileName);
    
    // Move file from temp location to final location
    await fs.rename(file.filepath, finalPath);
    
    // Database path (relative to public directory)
    const dbPath = `/pdf/${uniqueFileName}`;
    
    // Insert record into database
    const result = await new Promise((resolve, reject) => {
      connection.query(
        'INSERT INTO knowledge (path, title) VALUES (?, ?)', 
        [dbPath, title.trim()], 
        (err, results) => {
          if (err) {
            console.error('Database error:', err);
            return reject(err);
          }
          resolve(results);
        }
      );
    });
    
    console.log('Database insert result:', result);
    
    return new Response(JSON.stringify({ 
      message: 'File uploaded successfully.', 
      path: dbPath, 
      title: title.trim() 
    }), { status: 201 });
    
  } catch (error) {
    console.error('Upload error:', error);
    return new Response(JSON.stringify({ 
      message: 'Upload failed.', 
      error: error.message 
    }), { status: 500 });
  }
}

export async function DELETE(req) {
  try {
    const { id } = await req.json();
    
    if (!id) {
      return new Response(JSON.stringify({ message: 'ID is required.' }), { status: 400 });
    }
    
    // Get file path from DB
    const record = await new Promise((resolve, reject) => {
      connection.query('SELECT path FROM knowledge WHERE id = ?', [id], (err, results) => {
        if (err) return reject(err);
        resolve(results[0]);
      });
    });
    
    if (!record) {
      return new Response(JSON.stringify({ message: 'Record not found.' }), { status: 404 });
    }
    
    // Delete file from filesystem
    const filePath = path.join(process.cwd(), 'public', record.path);
    await fs.unlink(filePath).catch((err) => {
      console.warn('File deletion warning:', err.message);
    });
    
    // Delete record from database
    await new Promise((resolve, reject) => {
      connection.query('DELETE FROM knowledge WHERE id = ?', [id], (err) => {
        if (err) return reject(err);
        resolve();
      });
    });
    
    return new Response(JSON.stringify({ message: 'Record deleted successfully.' }), { status: 200 });
    
  } catch (error) {
    console.error('Delete error:', error);
    return new Response(JSON.stringify({ 
      message: 'Delete failed.', 
      error: error.message 
    }), { status: 500 });
  }
}