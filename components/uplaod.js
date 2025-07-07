"use client"
import React, { useEffect, useState } from "react";
import Navbar from '@/components/header';
import Footer from '@/components/footer';
import { FiTrash2, FiPlus, FiDownload, FiX, FiUpload } from 'react-icons/fi';
import { useRouter } from 'next/navigation';

const formatDate = (dateStr) => {
  if (!dateStr) return '';
  const d = new Date(dateStr);
  return d.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
};

export default function UploadKnowledge() {
  const router = useRouter();
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const isLogin = localStorage.getItem("isLogin");
      if (isLogin !== "true") {
        router.replace("/");
      }
    }
  }, [router]);

  // Fetch knowledge list
  const fetchDocuments = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/upload");
      const data = await res.json();
      setDocuments(data);
    } catch (e) {
      setError("Failed to fetch documents.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDocuments();
  }, []);

  // Delete document
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this document?")) return;
    try {
      setLoading(true);
      const res = await fetch("/api/upload", {
        method: "DELETE",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id })
      });
      if (res.ok) {
        setDocuments((docs) => docs.filter((doc) => doc.id !== id));
      } else {
        const data = await res.json();
        setError(data.message || "Delete failed.");
      }
    } catch (e) {
      setError("Delete failed.");
    } finally {
      setLoading(false);
    }
  };

  // Upload document
  const handleUpload = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    if (!title.trim()) {
      setError("Title is required.");
      return;
    }
    if (!file) {
      setError("PDF file is required.");
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      setError("File size exceeds 5MB.");
      return;
    }
    if (file.type !== "application/pdf") {
      setError("Only PDF files are allowed.");
      return;
    }
    setUploading(true);
    const formData = new FormData();
    formData.append("file", file);
    formData.append("title", title);
    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData
      });
      const data = await res.json();
      if (res.ok) {
        setSuccess("File uploaded successfully.");
        setModalOpen(false);
        setTitle("");
        setFile(null);
        fetchDocuments();
      } else {
        setError(data.message || "Upload failed.");
      }
    } catch (e) {
      setError("Upload failed.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="overflow-hidden min-h-screen flex flex-col bg-black">
      <Navbar />
      <section className="flex-1 pt-30 pb-8 sm:py-20 md:py-16 lg:py-20 xl:py-24 bg-transparent relative">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          {/* Header Section */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 sm:mb-8 md:mb-10 lg:mb-12 gap-3 sm:gap-4">
            <div className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2.5 bg-white/10 backdrop-blur-md text-white rounded-full text-xs sm:text-sm md:text-base font-medium border border-white/20 shadow-lg">
              📚 Knowledge Uploads
            </div>
            <button
              className="flex items-center justify-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 bg-white text-black font-semibold rounded-xl shadow-lg hover:bg-gray-100 transition-all duration-300 w-full sm:w-auto text-sm sm:text-base min-h-[40px] sm:min-h-[44px] md:min-h-[48px]"
              onClick={() => { setModalOpen(true); setError(""); setSuccess(""); }}
            >
              <FiPlus className="text-lg sm:text-xl" /> 
              <span className="hidden xs:inline">Create New</span>
              <span className="xs:hidden">New</span>
            </button>
          </div>

          {/* Desktop Table View */}
          <div className="hidden md:block overflow-x-auto rounded-2xl shadow-2xl border border-white/20 bg-white/10 backdrop-blur-lg" style={{ boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)' }}>
            <table className="min-w-full divide-y divide-white/20">
              <thead className="bg-white/10 backdrop-blur-md">
                <tr>
                  <th className="px-4 lg:px-6 py-3 lg:py-4 text-left font-semibold text-white/80 text-sm lg:text-base">Title</th>
                  <th className="px-4 lg:px-6 py-3 lg:py-4 text-left font-semibold text-white/80 text-sm lg:text-base">Date</th>
                  <th className="px-4 lg:px-6 py-3 lg:py-4 text-center font-semibold text-white/80 text-sm lg:text-base">Download</th>
                  <th className="px-4 lg:px-6 py-3 lg:py-4 text-center font-semibold text-white/80 text-sm lg:text-base">Delete</th>
                </tr>
              </thead>
              <tbody className="bg-white/5 divide-y divide-white/10">
                {documents.length === 0 && !loading && (
                  <tr>
                    <td colSpan={4} className="p-6 lg:p-8 text-center text-white/60 text-base lg:text-lg">No documents available.</td>
                  </tr>
                )}
                {documents.map((doc) => (
                  <tr key={doc.id} className="hover:bg-white/10 transition-colors">
                    <td className="px-4 lg:px-6 py-3 lg:py-4 text-base lg:text-lg text-white font-medium drop-shadow-sm break-words max-w-xs lg:max-w-md">{doc.title}</td>
                    <td className="px-4 lg:px-6 py-3 lg:py-4 text-gray-200 text-sm lg:text-base">{formatDate(doc.created_at)}</td>
                    <td className="px-4 lg:px-6 py-3 lg:py-4 text-center">
                      <a
                        href={doc.path}
                        download
                        className="inline-flex items-center justify-center w-9 h-9 lg:w-10 lg:h-10 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors shadow-lg backdrop-blur-md"
                        title={`Download ${doc.title}`}
                      >
                        <FiDownload className="text-lg lg:text-xl" />
                      </a>
                    </td>
                    <td className="px-4 lg:px-6 py-3 lg:py-4 text-center">
                      <button
                        className="inline-flex items-center justify-center w-9 h-9 lg:w-10 lg:h-10 rounded-full bg-red-500/80 text-white hover:bg-red-600 transition-colors shadow-lg"
                        title="Delete"
                        onClick={() => handleDelete(doc.id)}
                        disabled={loading}
                      >
                        <FiTrash2 className="text-lg lg:text-xl" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {loading && (
              <div className="p-6 lg:p-8 text-center text-white/60 text-base lg:text-lg">Loading...</div>
            )}
          </div>

          {/* Mobile Card View */}
          <div className="md:hidden space-y-3 sm:space-y-4">
            {documents.length === 0 && !loading && (
              <div className="rounded-xl bg-white/10 backdrop-blur-lg border border-white/20 p-6 sm:p-8 text-center text-white/60 text-base sm:text-lg">
                No documents available.
              </div>
            )}
            {documents.map((doc) => (
              <div key={doc.id} className="rounded-xl bg-white/10 backdrop-blur-lg border border-white/20 p-4 sm:p-5 shadow-lg">
                <div className="flex flex-col xs:flex-row xs:items-start xs:justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-white font-semibold text-base sm:text-lg break-words leading-tight">
                      {doc.title}
                    </h3>
                    <p className="text-gray-200 text-xs sm:text-sm mt-1">
                      {formatDate(doc.created_at)}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 xs:gap-3 xs:flex-col xs:items-end">
                    <a
                      href={doc.path}
                      download
                      className="inline-flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors shadow-lg backdrop-blur-md"
                      title={`Download ${doc.title}`}
                    >
                      <FiDownload className="text-lg sm:text-xl" />
                    </a>
                    <button
                      className="inline-flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-red-500/80 text-white hover:bg-red-600 transition-colors shadow-lg"
                      title="Delete"
                      onClick={() => handleDelete(doc.id)}
                      disabled={loading}
                    >
                      <FiTrash2 className="text-lg sm:text-xl" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
            {loading && (
              <div className="rounded-xl bg-white/10 backdrop-blur-lg border border-white/20 p-6 sm:p-8 text-center text-white/60 text-base sm:text-lg">
                Loading...
              </div>
            )}
          </div>
        </div>

        {/* Enhanced Responsive Modal */}
        {modalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-3 sm:p-4">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm sm:max-w-md md:max-w-lg relative max-h-[90vh] overflow-y-auto">
              <div className="p-4 sm:p-6 md:p-8">
                <button
                  className="absolute top-3 right-3 sm:top-4 sm:right-4 md:top-6 md:right-6 text-gray-500 hover:text-black transition-colors"
                  onClick={() => setModalOpen(false)}
                  title="Close"
                >
                  <FiX className="text-xl sm:text-2xl" />
                </button>
                
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-black flex items-center gap-2 pr-8">
                  <FiUpload className="text-lg sm:text-xl md:text-2xl" /> 
                  <span className="leading-tight">Upload New PDF</span>
                </h2>
                
                <form onSubmit={handleUpload} className="space-y-4 sm:space-y-5 md:space-y-6">
                  <div>
                    <label className="block text-sm sm:text-base font-medium text-gray-700 mb-2">
                      Title *
                    </label>
                    <input
                      type="text"
                      value={title}
                      onChange={e => setTitle(e.target.value)}
                      className="w-full px-3 py-2.5 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition-colors duration-300 text-sm sm:text-base"
                      placeholder="Enter document title"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm sm:text-base font-medium text-gray-700 mb-2">
                      PDF File (max 5MB) *
                    </label>
                    <input
                      type="file"
                      accept="application/pdf"
                      onChange={e => setFile(e.target.files[0])}
                      className="w-full px-3 py-2.5 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition-colors duration-300 text-sm sm:text-base file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-black file:text-white hover:file:bg-gray-800"
                      required
                    />
                  </div>
                  
                  {error && (
                    <div className="text-red-500 text-sm sm:text-base text-center bg-red-50 p-3 rounded-lg border border-red-200">
                      {error}
                    </div>
                  )}
                  
                  {success && (
                    <div className="text-green-600 text-sm sm:text-base text-center bg-green-50 p-3 rounded-lg border border-green-200">
                      {success}
                    </div>
                  )}
                  
                  <button
                    type="submit"
                    className="w-full py-3 sm:py-3.5 md:py-4 bg-black text-white font-bold rounded-xl hover:bg-gray-900 transition-all duration-300 shadow-lg disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm sm:text-base md:text-lg min-h-[48px] sm:min-h-[52px]"
                    disabled={uploading}
                  >
                    {uploading ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        Uploading...
                      </>
                    ) : (
                      <>
                        <FiUpload className="text-lg sm:text-xl" /> 
                        Upload Document
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}
      </section>
      <Footer />
    </div>
  );
}