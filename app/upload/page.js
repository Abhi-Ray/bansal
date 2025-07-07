import Upload from '@/components/uplaod'

export const metadata = {
  title: "Upload Documents | B Bansal & Company",
  description: "Securely upload your important documents to B Bansal & Company. Our platform ensures confidentiality and ease of access for all your accounting, auditing, and taxation needs.",
  keywords: [
    "Upload Documents",
    "B Bansal & Company",
    "Document Upload",
    "Secure Upload",
    "Client Portal",
    "Chartered Accountant",
    "CA Firm",
    "Professional Services"
  ],
  authors: [{ name: "B Bansal & Company" }],
  creator: "B Bansal & Company",
  openGraph: {
    title: "Upload Documents | B Bansal & Company",
    description: "Securely upload your important documents to B Bansal & Company. Confidential and easy access for all your accounting, auditing, and taxation needs.",
    url: "https://bbansalcompany.in/upload", // Replace with your actual upload URL
    siteName: "B Bansal & Company",
    type: "website",
    locale: "en_IN"
  },
  twitter: {
    card: "summary_large_image",
    title: "Upload Documents | B Bansal & Company",
    description: "Securely upload your important documents to B Bansal & Company. Confidential and easy access for all your accounting, auditing, and taxation needs.",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
};

const Page = () => {
  

  return <Upload />;
}

export default Page
