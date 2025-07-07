"use client"
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/header';
import Footer from '@/components/footer';
import { FiDownload } from 'react-icons/fi';

export default function Knowledge() {
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchDocuments = async () => {
      setLoading(true);
      setError("");
      try {
        const res = await fetch("/api/upload");
        const data = await res.json();
        setDocuments(data.reverse());
      } catch (e) {
        setError("Failed to fetch documents.");
      } finally {
        setLoading(false);
      }
    };
    fetchDocuments();
  }, []);

  const formatDate = (dateStr) => {
    if (!dateStr) return '';
    const d = new Date(dateStr);
    return d.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
  };

  return (
    <div className="overflow-hidden min-h-screen flex flex-col bg-black">
      <Navbar />
      <section className="flex-1 py-24 bg-transparent relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md text-white rounded-full text-sm font-medium mb-4 border border-white/20 shadow-lg">
              📚 Knowledge Bank
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
              Downloadable Resources
            </h2>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Access our curated collection of expert articles, guides, and checklists for your business needs.
            </p>
          </div>
          <div className="overflow-x-auto rounded-2xl shadow-2xl border border-white/20 bg-white/10 backdrop-blur-lg" style={{ boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)' }}>
            <table className="min-w-full divide-y divide-white/20">
              <thead className="bg-white/10 backdrop-blur-md">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-white/80">Title</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-white/80">Date</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-white/80">Download</th>
                </tr>
              </thead>
              <tbody className="bg-white/5 divide-y divide-white/10">
                {loading && (
                  <tr>
                    <td colSpan={3} className="p-8 text-center text-white/60 text-lg">Loading...</td>
                  </tr>
                )}
                {error && (
                  <tr>
                    <td colSpan={3} className="p-8 text-center text-red-400 text-lg">{error}</td>
                  </tr>
                )}
                {documents.length === 0 && !loading && !error && (
                  <tr>
                    <td colSpan={3} className="p-8 text-center text-white/60 text-lg">No documents available at the moment.</td>
                  </tr>
                )}
                {documents.map((doc) => (
                  <tr key={doc.id} className="hover:bg-white/10 transition-colors">
                    <td className="px-6 py-4 text-lg text-white font-medium drop-shadow-sm">{doc.title}</td>
                    <td className="px-6 py-4 text-gray-200">{formatDate(doc.created_at)}</td>
                    <td className="px-6 py-4 text-center">
                      <a
                        href={doc.path}
                        download
                        className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors shadow-lg backdrop-blur-md"
                        title={`Download ${doc.title}`}
                      >
                        <FiDownload className="text-2xl" />
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
