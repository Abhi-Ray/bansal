import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "B Bansal & Company",
  description: "B Bansal & Company is a Chartered Accountancy (CA) associate firm offering professional accounting, auditing, taxation, and advisory services.",
  keywords: [
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
    title: "B Bansal & Company",
    description: "Trusted Chartered Accountancy (CA) associate firm for accounting, auditing, taxation, and advisory services.",
    url: "https://bbansalcompany.in/", // Replace with your actual domain
    siteName: "B Bansal & Company",
    type: "website",
    locale: "en_IN"
  },
  twitter: {
    card: "summary_large_image",
    title: "B Bansal & Company",
    description: "Chartered Accountancy (CA) associate firm for accounting, auditing, taxation, and advisory services.",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
