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
      <Head>
        <title>About Us - B Bansal & Company</title>
        <meta name="description" content="Learn about B Bansal & Company, our mission, our values, and the expert team dedicated to your success." />
      </Head>

      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/20 to-purple-600/20"></div>
          <div 
            className="absolute top-10 left-10 w-56 h-56 bg-blue-500/20 rounded-full blur-3xl animate-pulse"
            style={{ transform: `translateY(${scrollY * 0.3}px)` }}
          ></div>
          <div 
            className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"
            style={{ transform: `translateY(${scrollY * -0.2}px)` }}
          ></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center text-center pt-24 pb-12">
          <div>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                About Our Firm
              </span>
            </h1>
            <p className="mt-6 text-xl md:text-2xl text-blue-100 font-light max-w-3xl mx-auto">
              Discover our story, our commitment to excellence, and the values that drive us to empower your business.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story & Mission */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
                📜 Our Journey
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">The Story of B Bansal & Company</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Founded on the principles of integrity and expertise, B Bansal & Company has evolved into a cornerstone of professional accounting and business consultancy. We are dedicated to delivering comprehensive financial solutions that cater to the dynamic needs of businesses across various industries.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our team of seasoned professionals is committed to staying ahead of the complex financial and regulatory landscape. We build enduring relationships with our clients, providing tailored strategies that foster growth, ensure compliance, and drive success.
              </p>
            </div>
            <div className="space-y-8">
              <div className="p-8 bg-gray-50 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  To provide exceptional accounting and consultancy services that empower clients to achieve their financial objectives with the highest standards of professional integrity.
                </p>
              </div>
              <div className="p-8 bg-gray-50 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
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
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide our every action and decision.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <div key={index} className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 hover:border-blue-200">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <span className="text-6xl">{value.icon}</span>
                </div>
                <div className="relative">
                  <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">{value.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-blue-900">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-24 bg-gradient-to-r from-slate-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our History of Growth</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              A timeline of our journey and key milestones.
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-white/20" aria-hidden="true"></div>
            {timeline.map((item, index) => (
              <div key={index} className="relative flex items-center justify-between my-8">
                <div className={`w-5/12 ${index % 2 === 0 ? 'order-1 text-right' : 'order-3 text-left'}`}>
                  <p className="text-lg font-bold text-blue-300">{item.event}</p>
                  <p className="text-gray-300">{item.description}</p>
                </div>
                <div className="order-2 w-12 h-12 rounded-full bg-white/10 border-2 border-blue-300 flex items-center justify-center font-bold text-lg">
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
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Meet Our Leaders</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The driving force behind our success and your trusted advisors.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="group text-center">
                <div className="relative w-40 h-40 mx-auto rounded-full overflow-hidden mb-6 border-4 border-gray-100 group-hover:border-blue-200 transition-all duration-300 transform group-hover:scale-105">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                    <span className="text-5xl">{member.icon}</span>
                  </div>
                  {/* <img src={member.image} alt={member.name} className="w-full h-full object-cover" /> */}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-semibold mb-3">{member.title}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-900 via-purple-900 to-blue-900 text-white">
        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Ready to Grow With Us?
            </span>
          </h2>
          <p className="text-xl text-blue-100 mb-12 leading-relaxed">
            Partner with a team that is as passionate about your business as you are. Let's start the conversation and build your success story together.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contact" className="px-12 py-4 bg-white text-blue-900 font-bold rounded-xl hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 shadow-xl">
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}