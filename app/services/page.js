"use client"
import React from 'react'
import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Navbar from '@/components/header';
import Footer from '@/components/footer';
export default function ServicesPage() {
    const services = [
      {
        title: "Business Assurance Services",
        icon: "🛡️",
        description: "Comprehensive auditing and assurance services to ensure your business operates with transparency and compliance.",
        features: ["Internal Auditing", "Statutory Auditing", "Tax Auditing", "Compliance Review", "Risk Assessment"]
      },
      {
        title: "Business Planning & Management",
        icon: "📈",
        description: "Strategic planning and management consulting to help your business achieve sustainable growth and operational excellence.",
        features: ["Business Strategy", "Performance Management", "Operational Excellence", "Growth Planning", "Market Analysis"]
      },
      {
        title: "Company Merger Consultants",
        icon: "🤝",
        description: "Expert guidance through complex merger and acquisition processes, from due diligence to post-merger integration.",
        features: ["Due Diligence", "Valuation Services", "Transaction Support", "Post-Merger Integration", "Negotiation Support"]
      },
      {
        title: "Corporate Restructuring",
        icon: "🏢",
        description: "Strategic restructuring solutions to optimize your corporate structure, financial health, and operational efficiency.",
        features: ["Organizational Restructuring", "Financial Restructuring", "Debt Restructuring", "Capital Optimization", "Turnaround Strategy"]
      },
      {
        title: "Finance Management Services",
        icon: "💰",
        description: "Comprehensive financial management solutions for optimal business performance and strategic decision-making.",
        features: ["Financial Planning", "Cash Flow Management", "Investment Advisory", "Financial Reporting", "Budgeting & Forecasting"]
      },
      {
        title: "Financial Valuation Services",
        icon: "💹",
        description: "Professional and independent valuation services for various business, investment, and compliance purposes.",
        features: ["Business Valuation", "Asset Valuation", "Share Valuation", "Intangible Asset Valuation", "Purchase Price Allocation"]
      },
      {
        title: "Information System Consultants",
        icon: "💻",
        description: "Technology consulting to optimize your information systems, streamline processes, and leverage data for growth.",
        features: ["System Analysis & Design", "Process Automation", "Data Management & Analytics", "Technology Integration", "ERP Consultation"]
      },
      {
        title: "Risk Management Services",
        icon: "⚠️",
        description: "Comprehensive risk assessment and management strategies to identify, evaluate, and mitigate business risks.",
        features: ["Risk Assessment", "Risk Mitigation Strategies", "Compliance Risk Management", "Operational Risk Management", "Internal Controls Review"]
      },
      {
        title: "Excise & Customs Consultants",
        icon: "🧾",
        description: "Expert guidance on excise and customs matters, ensuring compliance and optimizing your indirect tax position.",
        features: ["Excise & Customs Registration", "Compliance Management", "Tax Planning & Optimization", "Dispute Resolution", "Import/Export Advisory"]
      },
      {
        title: "Investigation Services",
        icon: "🔍",
        description: "Professional investigation and forensic accounting services to address fraud, disputes, and financial irregularities.",
        features: ["Forensic Auditing", "Fraud Investigation", "Financial Investigation", "Litigation Support", "Asset Tracing"]
      },
      {
        title: "Management Consultants",
        icon: "👨‍💼",
        description: "Strategic management consulting to improve organizational effectiveness, drive change, and enhance performance.",
        features: ["Strategy Consulting", "Change Management", "Performance Improvement", "Leadership Development", "Organizational Design"]
      },
      {
        title: "Auditing Services",
        icon: "📋",
        description: "Independent and professional auditing services to ensure financial accuracy, regulatory compliance, and internal control effectiveness.",
        features: ["Statutory Audit", "Internal Audit", "Tax Audit", "Concurrent Audit", "Special Purpose Audits"]
      },
      {
        title: "IT & Digital Transformation",
        icon: "🖥️",
        description: "Technology consulting services to leverage IT for business growth, innovation, and competitive advantage.",
        features: ["IT Strategy & Roadmap", "System Implementation", "Digital Transformation", "Technology Advisory", "Cybersecurity Consulting"]
      }
    ];
  
    return (
      <div className="bg-gray-50">
        <Head>
          <title>Our Services - B Bansal & Company</title>
          <meta name="description" content="Explore the comprehensive range of professional services offered by B Bansal & Company, from financial auditing to strategic business consulting." />
        </Head>
  
        <Navbar />
  
        <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white overflow-hidden py-24 sm:py-32">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/20 to-purple-600/20"></div>
            <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                  Our Services
                </span>
              </h1>
              <p className="mt-6 text-xl md:text-2xl text-blue-100 font-light max-w-4xl mx-auto">
                Explore our comprehensive range of professional services, meticulously designed to cater to all your business and financial requirements. We are committed to empowering your success with expertise and integrity.
              </p>
            </div>
          </div>
        </section>
  
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 hover:border-blue-200 h-full flex flex-col">
                    <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                    <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-blue-900 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed flex-grow">{service.description}</p>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-800 mb-2">Key Features:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-500">
                            <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
  
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
                    { title: "Professional Excellence", description: "Qualified chartered accountants with extensive industry experience and continuous professional development", icon: "🎯" },
                    { title: "Comprehensive Solutions", description: "Full spectrum of financial and business consultancy services integrated under one trusted roof", icon: "🔧" },
                    { title: "Client-Centric Approach", description: "Personalized strategies designed to meet your specific business objectives and growth aspirations", icon: "❤️" },
                    { title: "Technology Integration", description: "Cutting-edge tools, automation, and digital solutions for efficient and accurate service delivery", icon: "⚡" },
                    { title: "Proactive Communication", description: "Regular updates, transparent reporting, and strategic recommendations to keep you ahead", icon: "📢" },
                    { title: "Regulatory Expertise", description: "Deep understanding of current regulations and proactive compliance management", icon: "📋" }
                  ].map((feature, index) => (
                    <div key={index} className="flex space-x-4 group">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl flex items-center justify-center text-xl group-hover:scale-110 transition-transform duration-300">
                          {feature.icon}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-900 transition-colors duration-300">{feature.title}</h3>
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
                    <div className="flex items-center"><span className="text-green-400 mr-3">✓</span><span>Free initial consultation</span></div>
                    <div className="flex items-center"><span className="text-green-400 mr-3">✓</span><span>Customized strategy development</span></div>
                    <div className="flex items-center"><span className="text-green-400 mr-3">✓</span><span>Expert team assignment</span></div>
                  </div>
                  <Link href="/contact" className="w-full block bg-white text-blue-900 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 shadow-lg text-center">
                    Schedule Your Consultation
                  </Link>
                </div>
                <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-bounce"></div>
                <div className="absolute -bottom-6 -left-6 w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </section>
  
        <Footer />
      </div>
    );
  }
  