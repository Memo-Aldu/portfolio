import "./globals.css";
import type { Metadata } from "next";
import { Rubik, Playfair_Display, Fira_Code } from 'next/font/google';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollIndicator from "@/components/ScrollIndicator";
import ErrorBoundary from "@/components/ErrorBoundary";
import { Analytics } from '@vercel/analytics/react';

const rubik = Rubik({
  subsets: ['latin'],
  variable: '--font-rubik',
  weight: ['400', '500', '700'],
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '700'],
});

const firaCode = Fira_Code({
  subsets: ['latin'],
  variable: '--font-fira-code',
  weight: ['400', '500', '700'],
});

export const metadata: Metadata = {
  title: {
    default: "Memo Al-Dujaili - Software Engineer & Cloud Architect",
    template: "%s | Memo Al-Dujaili"
  },
  description: "Full-stack software engineer specializing in cloud computing, microservices, and software architecture. Experience with AWS, Spring Boot, React, and modern development practices.",
  keywords: [
    "software engineer",
    "cloud computing",
    "AWS",
    "microservices",
    "Spring Boot",
    "React",
    "Next.js",
    "TypeScript",
    "software architecture",
    "full-stack developer",
    "backend development",
    "Terraform",
    "DevOps"
  ],
  authors: [{ name: "Memo Al-Dujaili", url: "https://memoaldu.com" }],
  creator: "Memo Al-Dujaili",
  publisher: "Memo Al-Dujaili",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://memoaldu.com",
    title: "Memo Al-Dujaili - Software Engineer & Cloud Architect",
    description: "Full-stack software engineer specializing in cloud computing, microservices, and software architecture.",
    siteName: "Memo Al-Dujaili Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Memo Al-Dujaili - Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Memo Al-Dujaili - Software Engineer & Cloud Architect",
    description: "Full-stack software engineer specializing in cloud computing, microservices, and software architecture.",
    images: ["/og-image.jpg"],
    creator: "@memo_aldu",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "https://memoaldu.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${rubik.variable} ${playfair.variable} ${firaCode.variable} bg-[#181818] text-[#EFF0F0] antialiased`}>
        <ErrorBoundary>
          <div className="max-w-5xl mx-auto sm:px-4 px-2 md:px-8 pb-8 min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">
              <ErrorBoundary>
                {children}
              </ErrorBoundary>
            </main>
            <ScrollIndicator />
            <Footer />
          </div>
        </ErrorBoundary>
        <Analytics />
      </body>
    </html>
  );
}
