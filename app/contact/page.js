import React from 'react'
import Contact from '@/components/contact'
const page = () => {
  return (
   <Contact/>
  )
}

export default page

export const metadata = {
  title: "Contact | B Bansal & Company",
  description: "Contact B Bansal & Company for professional accounting, auditing, taxation, and advisory services. Get in touch with our Chartered Accountancy (CA) firm today.",
  keywords: [
    "Contact",
    "B Bansal & Company",
    "Chartered Accountant",
    "CA Firm",
    "Accounting",
    "Auditing",
    "Taxation",
    "Advisory",
    "Financial Services",
    "Business Consulting",
    "India CA",
    "Professional Services"
  ],
  authors: [{ name: "B Bansal & Company" }],
  creator: "B Bansal & Company",
  openGraph: {
    title: "Contact | B Bansal & Company",
    description: "Contact B Bansal & Company for professional accounting, auditing, taxation, and advisory services. Get in touch with our Chartered Accountancy (CA) firm today.",
    url: "https://bbansalcompany.in/contact", // Replace with your actual contact page URL
    siteName: "B Bansal & Company",
    type: "website",
    locale: "en_IN"
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | B Bansal & Company",
    description: "Contact B Bansal & Company for professional accounting, auditing, taxation, and advisory services. Get in touch with our Chartered Accountancy (CA) firm today.",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
};
