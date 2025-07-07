import React from 'react'
import About from '@/components/about'
const page = () => {
  return (
   <About/>
  )
}

export default page

export const metadata = {
  title: "About Us | B Bansal & Company",
  description: "Learn more about B Bansal & Company, our mission, values, and the team behind our Chartered Accountancy (CA) associate firm. Discover our commitment to professional accounting, auditing, taxation, and advisory services.",
  keywords: [
    "About",
    "B Bansal & Company",
    "Chartered Accountant",
    "CA Firm",
    "Our Team",
    "Mission",
    "Values",
    "Accounting",
    "Auditing",
    "Taxation",
    "Advisory",
    "Professional Services"
  ],
  authors: [{ name: "B Bansal & Company" }],
  creator: "B Bansal & Company",
  openGraph: {
    title: "About Us | B Bansal & Company",
    description: "Learn more about B Bansal & Company, our mission, values, and the team behind our Chartered Accountancy (CA) associate firm.",
    url: "https://bbansalcompany.in/about", // Replace with your actual domain if different
    siteName: "B Bansal & Company",
    type: "website",
    locale: "en_IN"
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | B Bansal & Company",
    description: "Learn more about B Bansal & Company, our mission, values, and the team behind our Chartered Accountancy (CA) associate firm.",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
};
