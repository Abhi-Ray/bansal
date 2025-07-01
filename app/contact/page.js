"use client"
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Navbar from '@/components/header';
import Footer from '@/components/footer';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    message: ''
  });
  const [openFaq, setOpenFaq] = useState(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your inquiry. We will get back to you soon!');
    setFormData({ name: '', phone: '', service: '', message: '' });
  };

  const faqs = [
    {
      question: "What services do you offer?",
      answer: "We offer a comprehensive range of services including Business Assurance, Financial Management, Tax Consultancy, Corporate Restructuring, IT Consultancy, and Investigation Services. Visit our services page for more details."
    },
    {
      question: "How can I schedule a consultation?",
      answer: "You can schedule a consultation by filling out the contact form on this page, calling us at +91 XXXXX XXXXX, or emailing us at info@bbansalcompany.com. We offer a free initial consultation to discuss your needs."
    },
    {
        question: "What are your business hours?",
        answer: "Our office is open from Monday to Saturday, 9:00 AM to 6:00 PM. We are closed on Sundays and public holidays."
    },
    {
        question: "Do you serve clients outside of your local area?",
        answer: "Yes, we serve clients across various regions. With modern technology and communication tools, we can provide our services to businesses regardless of their location."
    }
  ];

  return (
    <>
      <Head>
        <title>Contact Us - B Bansal & Company</title>
        <meta name="description" content="Contact B Bansal & Company for professional accounting and business consultancy services." />
      </Head>

      <div className="overflow-hidden">
        <Navbar />

        {/* Hero Section - Matching Home Page Style */}
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
            <div className="text-center min-h-[80vh] flex flex-col justify-center">
              <div className="space-y-8">
                <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                  <span className="text-gray-200 text-sm font-medium">📞 Get In Touch</span>
                </div>
                
                <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                  <span className="text-white">
                    Contact Us
                  </span>
                </h1>
                
                <p className="text-xl md:text-2xl text-gray-300 font-light max-w-4xl mx-auto">
                  Ready to transform your business? Let's start the conversation.
                </p>
                
                <p className="text-lg text-gray-400 leading-relaxed max-w-3xl mx-auto">
                  We're here to help you navigate your financial challenges and unlock new opportunities. Reach out to our expert team for personalized solutions and strategic guidance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form and Info Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <div className="inline-block px-4 py-2 bg-black text-white rounded-full text-sm font-medium mb-4">
                💼 Let's Connect
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                Start Your Success Journey
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Use the form below or contact us directly. We look forward to hearing from you.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 hover:border-black">
                  <h3 className="text-2xl font-bold text-black mb-8">Contact Information</h3>
                  <div className="space-y-8">
                    {[
                      { icon: "📍", title: "Office Address", lines: ["E/2, Ratlam Kothi", "Near Geeta Bhawan Square", "Geeta Bhawan-452001"] },
                      { icon: "📞", title: "Phone", lines: ["+91 XXXXX XXXXX"] },
                      { icon: "✉️", title: "Email", lines: ["info@bbansalcompany.com"] },
                      { icon: "🕒", title: "Business Hours", lines: ["Monday - Saturday: 9:00 AM - 6:00 PM", "Sunday: Closed"] }
                    ].map((item, index) => (
                      <div key={index} className="flex items-start space-x-4 group">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-black text-white rounded-xl flex items-center justify-center text-xl group-hover:scale-110 transition-transform duration-300">
                            <span className="grayscale">{item.icon}</span>
                          </div>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-black mb-2 group-hover:text-gray-700 transition-colors duration-300">{item.title}</h4>
                          <div className="text-gray-600 leading-relaxed">
                            {item.lines.map((line, i) => <div key={i}>{line}</div>)}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Additional Info Card */}
                  <div className="mt-8 p-6 bg-gray-50 rounded-xl border border-gray-200">
                    <h4 className="text-lg font-bold text-black mb-3">Free Consultation</h4>
                    <p className="text-gray-600 mb-4">Schedule a complimentary consultation to discuss your business needs and explore how we can help.</p>
                    <div className="flex items-center text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 bg-black rounded-full mr-3"></div>
                      No obligation assessment
                    </div>
                    <div className="flex items-center text-sm text-gray-500 mt-1">
                      <div className="w-1.5 h-1.5 bg-black rounded-full mr-3"></div>
                      Expert team assignment
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 hover:border-black">
                  <h3 className="text-2xl font-bold text-black mb-8">Send Us a Message</h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        value={formData.name} 
                        onChange={handleChange} 
                        required 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition-colors duration-300" 
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        name="phone" 
                        value={formData.phone} 
                        onChange={handleChange} 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition-colors duration-300" 
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">Service Interested In</label>
                      <select 
                        id="service" 
                        name="service" 
                        value={formData.service} 
                        onChange={handleChange} 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition-colors duration-300"
                      >
                        <option value="">Select a service</option>
                        <option value="business-assurance">Business Assurance Services</option>
                        <option value="financial-management">Finance Management Services</option>
                        <option value="tax-consultancy">Tax Consultancy</option>
                        <option value="corporate-restructuring">Corporate Restructuring</option>
                        <option value="it-consultancy">IT Consultancy</option>
                        <option value="investigation-services">Investigation Services</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                      <textarea 
                        id="message" 
                        name="message" 
                        value={formData.message} 
                        onChange={handleChange} 
                        required 
                        rows={4} 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition-colors duration-300"
                      ></textarea>
                    </div>
                    <button 
                      type="submit" 
                      className="w-full bg-black text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition-all duration-300 font-semibold text-lg transform hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-2 bg-black text-white rounded-full text-sm font-medium mb-4">
                📍 Find Us
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Our Location</h2>
              <p className="text-xl text-gray-600">Visit our office for personalized consultation</p>
            </div>
            <div className="relative">
              <div className="h-[600px] rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.3078717199737!2d75.87951297494175!3d22.716795479389354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd3a51555555%3A0x5131a1058767473a!2sB%20Bansal%20%26%20Company!5e0!3m2!1sen!2sin!4v1751291831559!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-black rounded-full animate-ping"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gray-400 rounded-full animate-pulse"></div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-2 bg-black text-white rounded-full text-sm font-medium mb-4">
                ❓ Support
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-600">
                Have questions? We have answers.
              </p>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="group">
                  <div className="bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:border-black">
                    <button
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="w-full flex justify-between items-center p-6 text-left"
                    >
                      <h3 className="text-lg font-semibold text-black group-hover:text-gray-700 transition-colors duration-300">{faq.question}</h3>
                      <span className={`transform transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`}>
                        <div className="w-8 h-8 bg-black text-white rounded-lg flex items-center justify-center group-hover:bg-gray-800 transition-colors duration-300">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                          </svg>
                        </div>
                      </span>
                    </button>
                    {openFaq === index && (
                      <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                        <p>{faq.answer}</p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section - Matching Home Page Style */}
        <section className="py-24 bg-black text-white relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-900/50 to-black/50"></div>
            <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-40 h-40 bg-white/5 rounded-full blur-xl animate-pulse"></div>
          </div>
          
          <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              <span className="text-white">
                Ready to Get Started?
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Don't wait to transform your business. Our expert team is standing by to help you achieve your financial goals and unlock new opportunities for growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button 
                onClick={() => document.querySelector('#message').scrollIntoView({ behavior: 'smooth' })}
                className="px-12 py-4 bg-white text-black font-bold rounded-xl hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-xl"
              >
                Send Message Now
              </button>
              <a 
                href="tel:+91XXXXXXXXXXX" 
                className="px-12 py-4 border-2 border-white/30 text-white font-bold rounded-xl hover:bg-white hover:text-black backdrop-blur-sm transform hover:scale-105 transition-all duration-300"
              >
                Call Us Today
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}