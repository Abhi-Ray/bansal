"use client"
import React from 'react'
import { useState, useEffect } from 'react'
import Navbar from '@/components/header';
import Footer from '@/components/footer';
import Link from 'next/link';
export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [scrollY, setScrollY] = useState(0)

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
    { number: "20+", label: "Years Experience", icon: "📅" },
    { number: "20+", label: "Team Members", icon: "👨‍💼" },
    { number: "99%", label: "Client Satisfaction", icon: "⭐" }
  ]

  const industriesData = [
    {
      category: "Manufacturing & Heavy Industries",
      icon: "🏭",
      industries: [
        "Manufacturing", "Steel", "Cement", "Automobiles", "Aluminium Foils", "Power-Transformers", 
        "Cotton Yarn", "Spinning Mill", "Agriculture-Equipment & Pumps", "Paper", "Processed Marble", 
        "Wood", "Textile"
      ]
    },
    {
      category: "Technology & Financial Services",
      icon: "💻",
      industries: [
        "Technology", "Software", "IT-SEZ Unit", "Cable & Communications", "Tele-Marketing",
        "Merchant Banking", "Stock Broking", "Financial Services", "Insurance", "Leasing & Hiring Purchase",
        "Commodity Exchange"
      ]
    },
    {
      category: "Construction & Real Estate",
      icon: "🏗️",
      industries: [
        "Real Estate", "Construction", "Infrastructure", "Healthcare", "Education", "School"
      ]
    },
    {
      category: "Trade & Logistics",
      icon: "🚛",
      industries: [
        "Retail", "FMCG", "Trading", "C&F Distributorship", "Transportation", "Warehousing", 
        "Railway"
      ]
    },
    {
      category: "Food & Hospitality",
      icon: "🍽️",
      industries: [
        "Food & Beverages", "Oil-Edible", "Hotels", "Amusement Theme Parks", "Clubs"
      ]
    },
    {
      category: "Agriculture & Energy",
      icon: "🌾",
      industries: [
        "Agro chemicals", "Fertilizer", "Coalfields", "Gas-LPG", "Company Law and Legal Advisory",
        "Printing-Media"
      ]
    }
  ];

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    
    // Autoplay for testimonials
    const interval = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonials.length)
    }, 5000) // Change every 5 seconds

    return () => {
      window.removeEventListener('scroll', handleScroll)
      clearInterval(interval)
    }
  }, [testimonials.length])

  return (
    <div className="overflow-hidden">
      <Navbar />
      {/* Hero Section */}
      <section className="relative min-h-screen bg-black text-white overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-900/50 to-black/50"></div>
          <div 
            className="absolute top-20 left-20 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse"
            style={{ transform: `translateY(${scrollY * 0.3}px)` }}
          ></div>
          <div 
            className="absolute bottom-20 right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse"
            style={{ transform: `translateY(${scrollY * -0.2}px)` }}
          ></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            {/* Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                  <span className="text-gray-200 text-sm font-medium">🏆 Award Winning CA Firm</span>
                </div>
                
                <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                  <span className="text-white">
                    B Bansal &
                  </span>
                  <br />
                  <span className="text-gray-300">
                    Company
                  </span>
                </h1>
                
                <p className="text-xl md:text-2xl text-gray-300 font-light">
                  Professional Chartered Accountants & Strategic Business Consultants
                </p>
                
                <p className="text-lg text-gray-400 leading-relaxed max-w-2xl">
                  Empowering businesses with comprehensive financial solutions, cutting-edge technology integration, and strategic insights. Your trusted partner for sustainable growth and regulatory excellence.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/services" className="group relative px-8 py-4 bg-white text-black font-semibold rounded-xl overflow-hidden transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl ">
                  <span className="relative z-10 flex items-center">
                    Explore Services
                    <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </span>
                
                </Link>
                
                <Link href="/contact" className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl  backdrop-blur-sm transform hover:scale-105 transition-all duration-300">
                  Schedule Consultation
                </Link>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
                {achievements.map((stat, index) => (
                  <div key={index} className="text-center group">
                    <div className="text-2xl mb-1 grayscale">{stat.icon}</div>
                    <div className="text-2xl font-bold text-white group-hover:text-gray-300 transition-colors duration-300">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
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
                    <span className="text-white font-semibold">+127%</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                    <span className="text-gray-300">Tax Optimization</span>
                    <span className="text-white font-semibold">+89%</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                    <span className="text-gray-300">Compliance Rate</span>
                    <span className="text-white font-semibold">100%</span>
                  </div>
                </div>
                
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-white rounded-full animate-ping"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gray-400 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-black text-white rounded-full text-sm font-medium mb-4">
              💼 Our Expertise
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Comprehensive Professional Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From financial auditing to strategic business consulting, we provide end-to-end solutions tailored to your unique requirements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {[
    {
      title: "Audit & Assurance Services",
      description: "Comprehensive audit and assurance services to ensure regulatory compliance and operational excellence.",
      icon: "🛡️",
      features: ["Statutory Audit", "Internal Audit", "Concurrent Audit", "Operational Audit"]
    },
    {
      title: "Direct Tax Services",
      description: "Complete direct taxation solutions including planning, compliance, and representation for optimal tax efficiency.",
      icon: "📊",
      features: ["Income Tax Planning", "Tax Return Filing", "Transfer Pricing", "Tax Audit Services"]
    },
    {
      title: "Indirect Tax Services",
      description: "Expert GST and indirect tax consultancy services for seamless compliance and strategic tax planning.",
      icon: "💼",
      features: ["GST Compliance", "GST Audit", "Return Filing", "Appeals & Tribunals"]
    },
    {
      title: "Accounting & Book Keeping",
      description: "Complete accounting solutions from documentation to finalization of accounts for varied business requirements.",
      icon: "📚",
      features: ["Monthly Accounting", "Financial Statements", "Books Maintenance", "MIS Reporting"]
    },
    {
      title: "Corporate Finance Services",
      description: "Strategic corporate finance advisory including funding, restructuring, and financial planning solutions.",
      icon: "💰",
      features: ["Financial Planning", "Corporate Restructuring", "Due Diligence", "Valuation Services"]
    },
    {
      title: "Payroll Services",
      description: "Comprehensive payroll management services ensuring accurate processing and statutory compliance.",
      icon: "👥",
      features: ["Salary Processing", "Statutory Compliance", "Employee Benefits", "Payroll Audit"]
    },
    {
      title: "Company Law Services",
      description: "Complete company law compliance services covering incorporation, governance, and regulatory requirements.",
      icon: "🏢",
      features: ["Company Incorporation", "Corporate Governance", "Board Meetings", "ROC Compliance"]
    },
    {
      title: "Virtual CFO Services",
      description: "Professional CFO services for SMEs including financial health check-ups and strategic business guidance.",
      icon: "💻",
      features: ["MIS Reporting", "Financial Analysis", "Strategic Planning", "Cash Flow Management"]
    },
    {
      title: "Specialized Audit Services",
      description: "Specialized audit services including forensic investigations and sector-specific compliance audits.",
      icon: "🔍",
      features: ["Fraud Investigation", "Stock Audit", "Revenue Audit", "Information System Audit"]
    }
            ].map((service, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-black/5 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 hover:border-black">
                  <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300 grayscale">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-4 text-black group-hover:text-gray-700 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-500">
                        <div className="w-1.5 h-1.5 bg-black rounded-full mr-3"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <Link href="/services" className="mt-6 text-black font-semibold group-hover:text-gray-600 transition-colors duration-300 inline-block">
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-16 bg-black text-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-4xl md:text-5xl font-bold mb-4">Industries We Serve</h2>
      <p className="text-xl text-gray-300 max-w-3xl mx-auto">
        Specialized expertise across diverse sectors, delivering tailored solutions for unique industry challenges
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {industriesData.map((categoryData, index) => (
        <div key={index} className="group relative h-80">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/30 transition-all duration-300 transform hover:scale-105 h-full flex flex-col">
            <div className="text-center mb-6">
              <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {categoryData.icon}
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-gray-300 transition-colors duration-300">
                {categoryData.category}
              </h3>
            </div>
            <div className="flex-1 overflow-y-auto">
              <div className="grid grid-cols-1 gap-2">
                {categoryData.industries.map((industry, idx) => (
                  <div key={idx} className="text-sm text-gray-300 hover:text-white transition-colors duration-200 py-1 px-2 rounded hover:bg-white/10">
                    {industry}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-black text-white rounded-full text-sm font-medium mb-6">
                🌟 Why Choose Us
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-8">
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
                      <div className="w-12 h-12 bg-black text-white rounded-xl flex items-center justify-center text-xl group-hover:scale-110 transition-transform duration-300">
                        <span className="grayscale">{feature.icon}</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-black mb-3 group-hover:text-gray-700 transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-black p-12 rounded-3xl text-white shadow-2xl">
                <h3 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h3>
                <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                  Schedule a comprehensive consultation with our expert team. Let's discuss your challenges, explore opportunities, and create a roadmap for sustainable success.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <span className="text-white mr-3">✓</span>
                    <span>Free initial consultation</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-white mr-3">✓</span>
                    <span>Customized strategy development</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-white mr-3">✓</span>
                    <span>Expert team assignment</span>
                  </div>
                </div>
                
                <Link href="/contact" className="w-full block bg-white text-black px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg text-center">
                  Schedule Your Consultation
                </Link>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-white rounded-full animate-bounce"></div>
              <div className="absolute -bottom-6 -left-6 w-8 h-8 bg-gray-400 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">Real feedback from businesses we've helped transform</p>
          </div>

          <div className="relative">
            <div className="bg-gray-50 rounded-3xl p-12 shadow-xl border border-gray-200">
              <div className="text-center">
                <div className="flex justify-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-black text-2xl">★</span>
                  ))}
                </div>
                
                <blockquote className="text-2xl text-gray-700 font-light italic mb-8 leading-relaxed">
                  "{testimonials[currentTestimonial].quote}"
                </blockquote>
                
                <div className="flex items-center justify-center space-x-4">
                  <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {testimonials[currentTestimonial].name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-black">{testimonials[currentTestimonial].name}</div>
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
                      ? 'bg-black' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-900/50 to-black/50"></div>
          <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-white/5 rounded-full blur-xl animate-pulse"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            <span className="text-white">
              Let's Build Your Success Story
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            Join hundreds of satisfied clients who trust us with their financial future. 
            Your journey to business excellence starts with a single conversation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contact" className="px-12 py-4 bg-white text-black font-bold rounded-xl hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-xl">
              Start Your Journey
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}