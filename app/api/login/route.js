import connection from '../db';
import bcrypt from 'bcryptjs';

export async function POST(req) {
  try {
    const { email, password } = await req.json();
    if (!email || !password) {
      return new Response(JSON.stringify({ message: 'Email and password are required.' }), { status: 400 });
    }

    // Query user by email
    const user = await new Promise((resolve, reject) => {
      connection.query('SELECT * FROM users WHERE email = ?', [email], (err, results) => {
        if (err) return reject(err);
        resolve(results[0]);
      });
    });

    if (!user) {
      return new Response(JSON.stringify({ message: 'Invalid email or password.' }), { status: 401 });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return new Response(JSON.stringify({ message: 'Invalid email or password.' }), { status: 401 });
    }

    // Success (you can add JWT or session logic here)
    return new Response(JSON.stringify({ message: 'Login successful.' }), { status: 200 });
  } catch (error) {
    console.error('Login error:', error);
    return new Response(JSON.stringify({ message: 'Internal server error.' }), { status: 500 });
  }
}
