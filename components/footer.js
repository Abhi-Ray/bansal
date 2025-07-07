"use client"
import React from 'react'
import { useState } from 'react'

const Footer = () => {
  const [hoveredService, setHoveredService] = useState(null)

  const services = [
    { name: "Business Assurance", icon: "🛡️" },
    { name: "Financial Management", icon: "💰" },
    { name: "Risk Management", icon: "📊" },
    { name: "IT Consultancy", icon: "💻" }
  ]

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: 'Knowledge Bank', href: '/knowledge' },

    { name: "Contact", href: "/contact" }
  ]

  const socialLinks = [
    { name: "LinkedIn", icon: "💼", href: "#" },
    { name: "Twitter", icon: "🐦", href: "#" },
    { name: "Facebook", icon: "📘", href: "#" },
    { name: "Instagram", icon: "📷", href: "#" }
  ]

  return (
    <footer className="relative bg-black text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-white bg-opacity-5"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-white bg-opacity-10 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-white bg-opacity-10 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white bg-opacity-10 rounded-full blur-2xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Company Info */}
          <div className="lg:col-span-2 group">
            <div className="relative">
              <div className="relative bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-gray-500 transition-all duration-300">
                <div className="flex flex-col sm:flex-row items-center justify-evenly mb-4 gap-4">
                  <img
                    src="/img/logo.png"
                    alt="B Bansal & Company Logo"
                    className="h-20 w-auto object-contain py-2"
                  />
                  <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300 flex-1 text-justify">
                    Professional Chartered Accountants providing comprehensive financial and business solutions with excellence and integrity.
                  </p>
                </div>
                
                <div className="space-y-2 text-gray-300">
                  <div className="flex items-center group/address hover:text-white transition-colors duration-300">
                    <span className="w-2 h-2 bg-gray-500 rounded-full mr-3 group-hover/address:scale-125 group-hover/address:bg-white transition-all duration-300"></span>
                    <p>E/2, Ratlam Kothi</p>
                  </div>
                  <div className="flex items-center group/address hover:text-white transition-colors duration-300">
                    <span className="w-2 h-2 bg-gray-500 rounded-full mr-3 group-hover/address:scale-125 group-hover/address:bg-white transition-all duration-300"></span>
                    <p>Near Geeta Bhawan Square</p>
                  </div>
                  <div className="flex items-center group/address hover:text-white transition-colors duration-300">
                    <span className="w-2 h-2 bg-gray-500 rounded-full mr-3 group-hover/address:scale-125 group-hover/address:bg-white transition-all duration-300"></span>
                    <p>Geeta Bhawan-452001</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="group">
            <div className="relative">
              <div className="relative bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-gray-500 transition-all duration-300 h-full">
                <h3 className="text-xl font-bold mb-6 text-white group-hover:text-gray-200 transition-colors duration-300">
                  Quick Links
                </h3>
                <div className="space-y-3">
                  {quickLinks.map((link, index) => (
                    <a
                      key={link.name}
                      href={link.href}
                      className="group/link flex items-center text-gray-300 hover:text-white transition-all duration-300 transform hover:translate-x-2"
                    >
                      <div className="w-0 h-0.5 bg-gray-500 group-hover/link:w-4 group-hover/link:bg-white transition-all duration-300 mr-3"></div>
                      <span className="relative">
                        {link.name}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="group">
            <div className="relative">
              <div className="relative bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-gray-500 transition-all duration-300 h-full">
                <h3 className="text-xl font-bold mb-6 text-white group-hover:text-gray-200 transition-colors duration-300">
                  Our Services
                </h3>
                <div className="space-y-3">
                  {services.map((service, index) => (
                    <div
                      key={service.name}
                      className="group/service flex items-center text-gray-300 hover:text-white transition-all duration-300 cursor-pointer"
                      onMouseEnter={() => setHoveredService(index)}
                      onMouseLeave={() => setHoveredService(null)}
                    >
                      <span className={`text-lg mr-3 transition-transform duration-300 grayscale ${
                        hoveredService === index ? 'scale-125' : ''
                      }`}>
                        {service.icon}
                      </span>
                      <span className="relative">
                        {service.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

       
        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <div className="text-gray-300 text-center group hover:text-white transition-colors duration-300">
              <p>&copy; 2025 B Bansal & Company. All rights reserved.</p>
              <p className="text-sm mt-1 text-gray-500 group-hover:text-gray-400 transition-colors duration-300">Trusted financial partners since inception</p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-4 right-4">
        <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 hover:bg-gray-100 group">
          <span className="text-xl text-black group-hover:text-gray-800 transition-colors duration-300">↑</span>
        </button>
      </div>
    </footer>
  )
}

export default Footer