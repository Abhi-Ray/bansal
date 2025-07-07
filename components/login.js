"use client"
import React, { useState } from 'react';
import Navbar from '@/components/header';
import Footer from '@/components/footer';
import { useRouter } from 'next/navigation';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');
    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      const data = await res.json();
      if (res.ok) {
        setSuccess(data.message || 'Login successful.');
        localStorage.setItem('isLogin', 'true');
        setTimeout(() => {
          router.push('/upload');
        }, 1200);
      } else {
        setError(data.message || 'Login failed.');
      }
    } catch (err) {
      setError('Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="overflow-hidden min-h-screen bg-black text-white flex flex-col">
      <Navbar />
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-900/50 to-black/50"></div>
        <div className="absolute top-20 left-4 sm:left-20 w-40 h-40 sm:w-64 sm:h-64 bg-white/5 rounded-full blur-2xl sm:blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-4 sm:bottom-20 sm:right-20 w-48 h-48 sm:w-80 sm:h-80 bg-white/10 rounded-full blur-2xl sm:blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 sm:w-96 sm:h-96 bg-white/5 rounded-full blur-2xl sm:blur-3xl"></div>
      </div>
      <main className="relative flex-1 flex items-center justify-center z-10 px-2 sm:px-0">
        <div className="w-full max-w-xs sm:max-w-md bg-white/10 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-10 border border-white/20 shadow-2xl mt-30 sm:mt-32 mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center text-white">Login to Your Account</h2>
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            <div>
              <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-gray-200 mb-1 sm:mb-2">Email</label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg sm:rounded-xl bg-black/60 text-white border border-white/20 focus:border-white/40 focus:outline-none placeholder-gray-400 text-sm sm:text-base"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-xs sm:text-sm font-medium text-gray-200 mb-1 sm:mb-2">Password</label>
              <input
                id="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg sm:rounded-xl bg-black/60 text-white border border-white/20 focus:border-white/40 focus:outline-none placeholder-gray-400 text-sm sm:text-base"
                placeholder="Enter your password"
              />
            </div>
            {error && <div className="text-red-400 text-xs sm:text-sm text-center">{error}</div>}
            {success && <div className="text-green-400 text-xs sm:text-sm text-center">{success}</div>}
            <button
              type="submit"
              className="w-full py-2 sm:py-3 bg-white text-black font-bold rounded-lg sm:rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg disabled:opacity-60 disabled:cursor-not-allowed text-sm sm:text-base"
              disabled={loading}
            >
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </form>
         
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Login;
