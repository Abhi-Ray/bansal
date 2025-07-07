import React from 'react'
import Login from '@/components/login'

const page = () => {
  return (
   <Login/>
  )
}

export default page

export const metadata = {
  title: "Login | B Bansal & Company",
  description: "Login to your B Bansal & Company account to access professional accounting, auditing, taxation, and advisory services.",
  keywords: [
    "Login",
    "B Bansal & Company",
    "Account Access",
    "Client Portal",
    "Chartered Accountant",
    "CA Firm",
    "Secure Login",
    "Professional Services"
  ],
  authors: [{ name: "B Bansal & Company" }],
  creator: "B Bansal & Company",
  openGraph: {
    title: "Login | B Bansal & Company",
    description: "Login to your B Bansal & Company account to access professional accounting, auditing, taxation, and advisory services.",
    url: "https://bbansalcompany.in/login", // Replace with your actual login URL
    siteName: "B Bansal & Company",
    type: "website",
    locale: "en_IN"
  },
  twitter: {
    card: "summary_large_image",
    title: "Login | B Bansal & Company",
    description: "Login to your B Bansal & Company account to access professional accounting, auditing, taxation, and advisory services.",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
};
