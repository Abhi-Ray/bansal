"use client"
import React, { useState } from 'react';
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

      <Navbar />

      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-32">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/10 to-purple-600/10"></div>
          <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Contact Us
            </span>
          </h1>
          <p className="mt-6 text-xl md:text-2xl text-blue-100 font-light max-w-3xl mx-auto">
            We're here to help. Reach out to us for any inquiries or to schedule a consultation with our expert team.
          </p>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Get In Touch</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Use the form below or contact us directly. We look forward to hearing from you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
                <div className="space-y-6">
                  {[
                    { icon: "📍", title: "Office Address", lines: ["E/2, Ratlam Kothi", "Near Geeta Bhawan Square", "Geeta Bhawan-452001"] },
                    { icon: "📞", title: "Phone", lines: ["+91 XXXXX XXXXX"] },
                    { icon: "✉️", title: "Email", lines: ["info@bbansalcompany.com"] },
                    { icon: "🕒", title: "Business Hours", lines: ["Monday - Saturday: 9:00 AM - 6:00 PM", "Sunday: Closed"] }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl flex items-center justify-center text-xl">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900">{item.title}</h4>
                        <p className="text-gray-600">
                          {item.lines.map((line, i) => <React.Fragment key={i}>{line}<br /></React.Fragment>)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900" />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">Service Interested In</label>
                  <select id="service" name="service" value={formData.service} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900">
                    <option value="">Select a service</option>
                    <option value="business-assurance">Business Assurance Services</option>
                    <option value="financial-management">Finance Management Services</option>
                    <option value="risk-management">Risk Management Services</option>
                    <option value="it-consultancy">IT Consultancy</option>
                    <option value="auditing">Auditing Services</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"></textarea>
                </div>
                <button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg hover:opacity-90 transition font-semibold text-lg">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Location</h2>
            </div>
            <div className="h-[600px] rounded-2xl shadow-2xl overflow-hidden">
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
        </div>
      </section>
      
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Frequently Asked Questions</h2>
            <p className="mt-4 text-xl text-gray-600">
              Have questions? We have answers.
            </p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex justify-between items-center p-6 text-left"
                >
                  <h3 className="text-lg font-semibold text-gray-800">{faq.question}</h3>
                  <span className={`transform transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`}>
                    <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </span>
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6 text-gray-600">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}