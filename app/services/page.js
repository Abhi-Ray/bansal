import React from 'react'
import Service from '@/components/service'

const page = () => {
  return (
   <Service/>
  )
}

export default page

export const metadata = {
  title: "Services | B Bansal & Company",
  description: "Explore the comprehensive range of professional services offered by B Bansal & Company, including audit, taxation, accounting, corporate finance, payroll, company law, and business consulting.",
  keywords: [
    "Services",
    "B Bansal & Company",
    "Chartered Accountant",
    "CA Firm",
    "Audit",
    "Taxation",
    "Accounting",
    "Corporate Finance",
    "Payroll",
    "Company Law",
    "Virtual CFO",
    "Business Consulting",
    "India CA",
    "Professional Services"
  ],
  authors: [{ name: "B Bansal & Company" }],
  creator: "B Bansal & Company",
  openGraph: {
    title: "Services | B Bansal & Company",
    description: "Discover our full suite of professional services: audit, tax, accounting, finance, payroll, company law, and more.",
    url: "https://bbansalcompany.in/services", // Replace with your actual domain and path
    siteName: "B Bansal & Company",
    type: "website",
    locale: "en_IN"
  },
  twitter: {
    card: "summary_large_image",
    title: "Services | B Bansal & Company",
    description: "Explore the range of professional services offered by B Bansal & Company: audit, tax, accounting, and more.",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
};
