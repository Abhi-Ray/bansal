import React from 'react'
import Home from '@/components/home'

const page = () => {
  return (
   <Home/>
  )
}

export default page

export const metadata = {
  title: "Home | B Bansal & Company",
  description: "Welcome to B Bansal & Company. We are a Chartered Accountancy (CA) associate firm offering professional accounting, auditing, taxation, and advisory services.",
  keywords: [
    "Home",
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
    title: "Home | B Bansal & Company",
    description: "Welcome to B Bansal & Company. Trusted Chartered Accountancy (CA) associate firm for accounting, auditing, taxation, and advisory services.",
    url: "https://bbansalcompany.in/", // Replace with your actual domain
    siteName: "B Bansal & Company",
    type: "website",
    locale: "en_IN"
  },
  twitter: {
    card: "summary_large_image",
    title: "Home | B Bansal & Company",
    description: "Welcome to B Bansal & Company. Chartered Accountancy (CA) associate firm for accounting, auditing, taxation, and advisory services.",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
};
