"use client"
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Navbar from '@/components/header';
import Footer from '@/components/footer';

export default function AboutPage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const coreValues = [
    {
      title: "Integrity",
      description: "We uphold the highest ethical standards in every engagement, ensuring transparency and trust.",
      icon: "🤝"
    },
    {
      title: "Excellence",
      description: "Our commitment to perfection drives us to deliver outstanding results and exceed client expectations.",
      icon: "⭐"
    },
    {
      title: "Innovation",
      description: "We leverage cutting-edge technology and forward-thinking strategies to provide modern solutions.",
      icon: "💡"
    }
  ];

  const teamMembers = [
    {
      name: "B. Bansal",
      title: "Founder & CEO",
      image: "/Images/team/founder.jpg",
      bio: "A visionary leader with over 20 years of experience in financial consultancy and business strategy.",
      icon: "👑"
    },
    {
      name: "Anjali Sharma",
      title: "Head of Auditing",
      image: "/Images/team/audit-head.jpg",
      bio: "Anjali ensures the highest standards of accuracy and compliance in all our auditing processes.",
      icon: "🛡️"
    },
    {
      name: "Vikram Singh",
      title: "Lead Tax Consultant",
      image: "/Images/team/tax-lead.jpg",
      bio: "Vikram specializes in complex tax structures and helps clients optimize their financial strategies.",
      icon: "📊"
    },
    {
      name: "Priya Patel",
      title: "IT & Systems Advisor",
      image: "/Images/team/it-advisor.jpg",
      bio: "Priya leads our technology division, integrating modern solutions for business efficiency.",
      icon: "💻"
    }
  ];

  const timeline = [
    { year: "2008", event: "Firm Foundation", description: "B Bansal & Company was established to provide expert financial services." },
    { year: "2012", event: "Expanded Services", description: "Added specialized tax and corporate law consultancy to our portfolio." },
    { year: "2018", event: "100+ Clients Milestone", description: "Celebrated serving over 100 businesses across diverse industries." },
    { year: "2023", event: "Launched IT Advisory", description: "Integrated technology consulting to meet modern business demands." }
  ];

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
                  <span className="text-gray-200 text-sm font-medium">🏢 About Our Company</span>
                </div>
                
                <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                  <span className="text-white">
                    About B Bansal & Company
                  </span>
                </h1>
                
                <p className="text-xl md:text-2xl text-gray-300 font-light">
                  Your Trusted Partner in Financial Excellence and Business Growth
                </p>
                
                <p className="text-lg text-gray-400 leading-relaxed max-w-2xl">
                  With over 20 years of expertise in accounting, auditing, and business consultancy, we are committed to delivering exceptional solutions that drive your success. Our team of seasoned professionals combines traditional values with modern innovation.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="group relative px-8 py-4 bg-white text-black font-semibold rounded-xl overflow-hidden transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl">
                  <span className="relative z-10 flex items-center">
                    Get In Touch
                    <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </span>

                </Link>
                
                <Link href="/services" className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl  backdrop-blur-sm transform hover:scale-105 transition-all duration-300">
                  View Services
                </Link>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
                {[
                  { number: "20+", label: "Years Experience", icon: "📅" },
                  { number: "500+", label: "Happy Clients", icon: "😊" },
                  { number: "13+", label: "Service Areas", icon: "🛠️" },
                  { number: "100%", label: "Satisfaction", icon: "⭐" }
                ].map((stat, index) => (
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
              <div className="w-full h-96 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-8xl mb-4 grayscale">🏢</div>
                  <p className="text-white/70 text-lg">B Bansal & Company</p>
                  <p className="text-white/50 text-sm">Est. 2008</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story & Mission */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-black text-white rounded-full text-sm font-medium mb-6">
                📜 Our Journey
              </div>
              <h2 className="text-4xl font-bold text-black mb-6">The Story of B Bansal & Company</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Founded on the principles of integrity and expertise, B Bansal & Company has evolved into a cornerstone of professional accounting and business consultancy. We are dedicated to delivering comprehensive financial solutions that cater to the dynamic needs of businesses across various industries.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our team of seasoned professionals is committed to staying ahead of the complex financial and regulatory landscape. We build enduring relationships with our clients, providing tailored strategies that foster growth, ensure compliance, and drive success.
              </p>
            </div>
            <div className="space-y-8">
              <div className="p-8 bg-gray-50 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-2xl font-bold text-black mb-4">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  To provide exceptional accounting and consultancy services that empower clients to achieve their financial objectives with the highest standards of professional integrity.
                </p>
              </div>
              <div className="p-8 bg-gray-50 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-2xl font-bold text-black mb-4">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  To be the most trusted and sought-after accounting firm, recognized for our innovation, expertise, and unwavering commitment to client success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide our every action and decision.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <div key={index} className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 hover:border-black">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <span className="text-6xl grayscale">{value.icon}</span>
                </div>
                <div className="relative">
                  <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300 grayscale">{value.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-black group-hover:text-gray-700">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our History of Growth</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A timeline of our journey and key milestones.
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-white/20" aria-hidden="true"></div>
            {timeline.map((item, index) => (
              <div key={index} className="relative flex items-center justify-between my-8">
                <div className={`w-5/12 ${index % 2 === 0 ? 'order-1 text-right' : 'order-3 text-left'}`}>
                  <p className="text-lg font-bold text-white">{item.event}</p>
                  <p className="text-gray-300">{item.description}</p>
                </div>
                <div className="order-2 w-12 h-12 rounded-full bg-white/10 border-2 border-white flex items-center justify-center font-bold text-sm">
                  {item.year}
                </div>
                <div className="w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet The Team */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Meet Our Leaders</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The driving force behind our success and your trusted advisors.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="group text-center">
                <div className="relative w-40 h-40 mx-auto rounded-full overflow-hidden mb-6 border-4 border-gray-100 group-hover:border-black transition-all duration-300 transform group-hover:scale-105">
                  <div className="absolute inset-0 bg-black flex items-center justify-center">
                    <span className="text-5xl grayscale">{member.icon}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-black mb-1">{member.name}</h3>
                <p className="text-black font-semibold mb-3">{member.title}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
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
              Ready to Partner With Us?
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            Join the hundreds of businesses that trust B Bansal & Company with their financial success. Let's discuss how we can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contact" className="px-12 py-4 bg-white text-black font-bold rounded-xl hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-xl">
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}