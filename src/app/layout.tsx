import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Halyse Technologies | AI & Data Solutions for Modern Businesses",
    template: "%s | Halyse Technologies",
  },
  description:
    "Halyse Technologies delivers enterprise-grade AI, Data, Automation, and Business Application solutions using Microsoft, Quickbase, and modern technologies.",
  keywords: [
    "AI solutions",
    "data analytics",
    "business automation",
    "Power BI",
    "Power Apps",
    "Quickbase",
    "Dynamics 365",
    "enterprise consulting",
    "Halyse Technologies",
  ],
  authors: [{ name: "Halyse Technologies Private Limited" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://halyse.com",
    siteName: "Halyse Technologies",
    title: "Halyse Technologies | AI & Data Solutions for Modern Businesses",
    description:
      "Enterprise-grade AI, Data, Automation, and Business Application solutions that drive measurable business outcomes.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Halyse Technologies | AI & Data Solutions for Modern Businesses",
    description:
      "Enterprise-grade AI, Data, Automation, and Business Application solutions.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;0,9..144,700;0,9..144,800;0,9..144,900;1,9..144,300;1,9..144,400;1,9..144,500;1,9..144,600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-white">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
