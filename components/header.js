"use client"
import React from 'react'
import { useState, useEffect } from 'react'
import Link from 'next/link'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/60 backdrop-blur-lg shadow-lg border-b border-white/20' 
        : 'bg-black/20 backdrop-blur-lg'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo Section */}
          <Link href="/" className="flex items-center group">
            <div className="flex flex-col">
              <span className={`text-2xl font-bold tracking-tight transition-colors duration-300 ${
                scrolled 
                  ? 'text-slate-800' 
                  : 'text-white'
              }`}>
                B Bansal & Co.
              </span>
              <span className={`text-[10px] font-medium tracking-widest uppercase transition-colors duration-300 ${
                scrolled ? 'text-blue-600' : 'text-blue-300'
              }`}>
                Chartered Accountants
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <Link href={item.href} className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 block relative ${
                  scrolled 
                    ? 'text-slate-600 hover:text-blue-600' 
                    : 'text-gray-300 hover:text-white'
                }`}>
                  {item.name}
                  <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                    scrolled ? 'bg-blue-500' : 'bg-blue-400'
                  }`}></span>
                </Link>
              </div>
            ))}
            
            {/* CTA Button */}
            <div className="ml-4">
              <Link href="/contact">
                <button className="px-5 py-2.5 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                  Get Consultation
                </button>
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className={`p-2 rounded-lg transition-all duration-300 focus:outline-none ${
                scrolled 
                  ? 'text-slate-700 hover:bg-slate-100' 
                  : 'text-white hover:bg-white/10'
              }`}
              aria-label="Toggle Menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all ease-in-out duration-300 overflow-hidden ${
          isOpen ? 'max-h-96' : 'max-h-0'
        }`}>
          <div className={`px-2 pt-2 pb-4 space-y-1 sm:px-3`}>
            {navItems.map((item) => (
              <Link key={item.name} href={item.href} className={`block w-full text-left px-4 py-3 rounded-md font-medium transition-all duration-300 text-base ${
                  scrolled 
                    ? 'text-slate-700 hover:text-blue-700 hover:bg-blue-50' 
                    : 'text-gray-200 hover:text-white hover:bg-white/5'
                }`}>
                  {item.name}
              </Link>
            ))}
            
            {/* Mobile CTA */}
            <div className="pt-4 px-4">
              <Link href="/contact" className="w-full">
                <button className="w-full px-4 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-lg">
                  Get Consultation
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar