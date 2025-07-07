import React from 'react'
import Knowledge from '@/components/knowledge'

const page = () => {
  return (
  <Knowledge/>
  )
}

export default page

export const metadata = {
  title: "Knowledge Bank | B Bansal & Company",
  description: "Explore our Knowledge Bank for expert articles, insights, and resources on accounting, auditing, taxation, and financial advisory from B Bansal & Company.",
  keywords: [
    "Knowledge Bank",
    "Articles",
    "Insights",
    "Resources",
    "Accounting",
    "Auditing",
    "Taxation",
    "Financial Advisory",
    "CA Firm",
    "B Bansal & Company",
    "Professional Services"
  ],
  authors: [{ name: "B Bansal & Company" }],
  creator: "B Bansal & Company",
  openGraph: {
    title: "Knowledge Bank | B Bansal & Company",
    description: "Expert articles and resources on accounting, auditing, taxation, and financial advisory from B Bansal & Company.",
    url: "https://bbansalcompany.in/knowledge", // Replace with your actual domain and path
    siteName: "B Bansal & Company",
    type: "article",
    locale: "en_IN"
  },
  twitter: {
    card: "summary_large_image",
    title: "Knowledge Bank | B Bansal & Company",
    description: "Explore expert articles and resources on accounting, auditing, taxation, and financial advisory from B Bansal & Company.",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
};
