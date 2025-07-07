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
    { name: 'Knowledge Bank', href: '/knowledge' },
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
        ? 'bg-black/95 backdrop-blur-sm border-b border-white/10 shadow-xl' 
        : 'bg-black/80 backdrop-blur-sm border-b border-white/5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo Section */}
          <Link href="/" className="flex items-center group">
            <div className="flex flex-col">
              <img
                src="/img/logo.png"
                alt="B Bansal & Company Logo"
                className="h-20 w-auto object-contain py-2"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <Link href={item.href} className="px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 block relative text-gray-300 hover:text-white hover:bg-white/10">
                  {item.name}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 transition-all duration-300 group-hover:w-full bg-white"></span>
                </Link>
              </div>
            ))}
            
            {/* CTA Button */}
            <div className="ml-4">
              <Link href="/contact">
                <button className="px-6 py-3 bg-white text-black text-sm font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                  Get Consultation
                </button>
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="p-2 rounded-lg transition-all duration-300 focus:outline-none text-gray-300 hover:text-white hover:bg-white/10"
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
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link key={item.name} href={item.href} className="block w-full text-left px-4 py-3 rounded-xl font-medium transition-all duration-300 text-base text-gray-300 hover:text-white hover:bg-white/10">
                  {item.name}
              </Link>
            ))}
            
            {/* Mobile CTA */}
            <div className="pt-4 px-4">
              <Link href="/contact" className="w-full">
                <button className="w-full px-4 py-3 bg-white text-black font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg transform hover:scale-105">
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