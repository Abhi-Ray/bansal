"use client"
import React from 'react'
import { useState, useEffect } from 'react'
import Navbar from '@/components/header';
import Footer from '@/components/footer';
import Link from 'next/link';
export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const testimonials = [
    {
      name: "Rajesh Kumar",
      company: "TechVision Industries",
      quote: "B Bansal & Company transformed our financial management. Their expertise and dedication are unmatched.",
      rating: 5
    },
    {
      name: "Priya Sharma",
      company: "Global Trade Solutions",
      quote: "Professional excellence and personalized service. They truly understand business needs.",
      rating: 5
    },
    {
      name: "Amit Patel",
      company: "Innovation Labs",
      quote: "Their strategic insights helped us navigate complex regulatory requirements with ease.",
      rating: 5
    }
  ]

  const achievements = [
    { number: "500+", label: "Clients Served", icon: "👥" },
    { number: "15+", label: "Years Experience", icon: "📅" },
    { number: "50+", label: "Team Members", icon: "👨‍💼" },
    { number: "99%", label: "Client Satisfaction", icon: "⭐" }
  ]

  const industries = [
    { name: "Manufacturing", icon: "🏭", description: "Industrial accounting solutions" },
    { name: "Technology", icon: "💻", description: "IT sector financial services" },
    { name: "Healthcare", icon: "🏥", description: "Medical practice management" },
    { name: "Real Estate", icon: "🏢", description: "Property investment advisory" },
    { name: "Retail", icon: "🛍️", description: "Commerce & trade solutions" },
    { name: "Education", icon: "🎓", description: "Educational institution services" }
  ]

  return (
    <div className="overflow-hidden">
      <Navbar />
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/20 to-purple-600/20"></div>
          <div 
            className="absolute top-20 left-20 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse"
            style={{ transform: `translateY(${scrollY * 0.3}px)` }}
          ></div>
          <div 
            className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse"
            style={{ transform: `translateY(${scrollY * -0.2}px)` }}
          ></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            {/* Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                  <span className="text-blue-200 text-sm font-medium">🏆 Award Winning CA Firm</span>
                </div>
                
                <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                    B Bansal &
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
                    Company
                  </span>
                </h1>
                
                <p className="text-xl md:text-2xl text-blue-100 font-light">
                  Professional Chartered Accountants & Strategic Business Consultants
                </p>
                
                <p className="text-lg text-gray-300 leading-relaxed max-w-2xl">
                  Empowering businesses with comprehensive financial solutions, cutting-edge technology integration, and strategic insights. Your trusted partner for sustainable growth and regulatory excellence.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/services" className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl overflow-hidden transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl">
                  <span className="relative z-10 flex items-center">
                    Explore Services
                    <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </Link>
                
                <Link href="/contact" className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 backdrop-blur-sm transform hover:scale-105 transition-all duration-300">
                  Schedule Consultation
                </Link>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
                {achievements.map((stat, index) => (
                  <div key={index} className="text-center group">
                    <div className="text-2xl mb-1">{stat.icon}</div>
                    <div className="text-2xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-300">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual Element */}
            <div className="relative">
              <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                    <span className="text-gray-300">Business Growth</span>
                    <span className="text-green-400 font-semibold">+127%</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                    <span className="text-gray-300">Tax Optimization</span>
                    <span className="text-green-400 font-semibold">+89%</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                    <span className="text-gray-300">Compliance Rate</span>
                    <span className="text-green-400 font-semibold">100%</span>
                  </div>
                </div>
                
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-ping"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
              💼 Our Expertise
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Comprehensive Professional Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From financial auditing to strategic business consulting, we provide end-to-end solutions tailored to your unique requirements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Business Assurance Services",
                description: "Comprehensive auditing, statutory compliance, and quality assurance services to ensure regulatory adherence and operational excellence.",
                icon: "🛡️",
                features: ["Statutory Audits", "Internal Audits", "Compliance Reviews", "Risk Assessment"]
              },
              {
                title: "Financial Management",
                description: "Strategic financial planning, budgeting, cash flow management, and investment advisory services for sustainable growth.",
                icon: "💰",
                features: ["Financial Planning", "Budget Analysis", "Investment Advisory", "Cash Flow Management"]
              },
              {
                title: "Tax Consultancy",
                description: "Expert tax planning, preparation, and optimization strategies to minimize liabilities and maximize savings.",
                icon: "📊",
                features: ["Income Tax", "GST Compliance", "Tax Planning", "Return Filing"]
              },
              {
                title: "Corporate Restructuring",
                description: "Strategic guidance for mergers, acquisitions, joint ventures, and comprehensive corporate reorganization initiatives.",
                icon: "🏢",
                features: ["M&A Advisory", "Due Diligence", "Valuation Services", "Restructuring Plans"]
              },
              {
                title: "IT Consultancy",
                description: "Modern technology solutions, system implementation, and digital transformation consulting for competitive advantage.",
                icon: "💻",
                features: ["ERP Implementation", "Process Automation", "Digital Strategy", "System Integration"]
              },
              {
                title: "Investigation Services",
                description: "Professional forensic accounting, fraud investigation, and financial crime detection services.",
                icon: "🔍",
                features: ["Forensic Audits", "Fraud Detection", "Asset Tracing", "Litigation Support"]
              }
            ].map((service, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 hover:border-blue-200">
                  <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-blue-900 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-500">
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <Link href="/services" className="mt-6 text-blue-600 font-semibold group-hover:text-purple-600 transition-colors duration-300 inline-block">
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-24 bg-gradient-to-r from-slate-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Industries We Serve</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Specialized expertise across diverse sectors, delivering tailored solutions for unique industry challenges
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="group relative">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/30 transition-all duration-300 transform hover:scale-105">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {industry.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white group-hover:text-blue-300 transition-colors duration-300">
                    {industry.name}
                  </h3>
                  <p className="text-gray-300 text-sm">{industry.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
                🌟 Why Choose Us
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                Your Success is Our Mission
              </h2>
              
              <div className="space-y-8">
                {[
                  {
                    title: "Professional Excellence",
                    description: "Qualified chartered accountants with extensive industry experience and continuous professional development",
                    icon: "🎯"
                  },
                  {
                    title: "Comprehensive Solutions",
                    description: "Full spectrum of financial and business consultancy services integrated under one trusted roof",
                    icon: "🔧"
                  },
                  {
                    title: "Client-Centric Approach",
                    description: "Personalized strategies designed to meet your specific business objectives and growth aspirations",
                    icon: "❤️"
                  },
                  {
                    title: "Technology Integration",
                    description: "Cutting-edge tools, automation, and digital solutions for efficient and accurate service delivery",
                    icon: "⚡"
                  },
                  {
                    title: "Proactive Communication",
                    description: "Regular updates, transparent reporting, and strategic recommendations to keep you ahead",
                    icon: "📢"
                  },
                  {
                    title: "Regulatory Expertise",
                    description: "Deep understanding of current regulations and proactive compliance management",
                    icon: "📋"
                  }
                ].map((feature, index) => (
                  <div key={index} className="flex space-x-4 group">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl flex items-center justify-center text-xl group-hover:scale-110 transition-transform duration-300">
                        {feature.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-900 transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-900 to-purple-900 p-12 rounded-3xl text-white shadow-2xl">
                <h3 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h3>
                <p className="text-blue-100 mb-8 text-lg leading-relaxed">
                  Schedule a comprehensive consultation with our expert team. Let's discuss your challenges, explore opportunities, and create a roadmap for sustainable success.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <span className="text-green-400 mr-3">✓</span>
                    <span>Free initial consultation</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-400 mr-3">✓</span>
                    <span>Customized strategy development</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-400 mr-3">✓</span>
                    <span>Expert team assignment</span>
                  </div>
                </div>
                
                <Link href="/contact" className="w-full block bg-white text-blue-900 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 shadow-lg text-center">
                  Schedule Your Consultation
                </Link>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-6 -left-6 w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">Real feedback from businesses we've helped transform</p>
          </div>

          <div className="relative">
            <div className="bg-white rounded-3xl p-12 shadow-xl border border-gray-100">
              <div className="text-center">
                <div className="flex justify-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-2xl">⭐</span>
                  ))}
                </div>
                
                <blockquote className="text-2xl text-gray-700 font-light italic mb-8 leading-relaxed">
                  "{testimonials[currentTestimonial].quote}"
                </blockquote>
                
                <div className="flex items-center justify-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {testimonials[currentTestimonial].name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-gray-900">{testimonials[currentTestimonial].name}</div>
                    <div className="text-gray-600">{testimonials[currentTestimonial].company}</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial 
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-900 via-purple-900 to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/20 to-purple-600/20"></div>
          <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500/20 rounded-full blur-xl animate-pulse"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Let's Build Your Success Story
            </span>
          </h2>
          <p className="text-xl text-blue-100 mb-12 leading-relaxed">
            Join hundreds of satisfied clients who trust us with their financial future. 
            Your journey to business excellence starts with a single conversation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contact" className="px-12 py-4 bg-white text-blue-900 font-bold rounded-xl hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 shadow-xl">
              Start Your Journey
            </Link>
          
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}