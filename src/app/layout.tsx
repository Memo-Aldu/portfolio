import "./globals.css";
import type { Metadata } from "next";
import { Rubik, Playfair_Display, Fira_Code } from 'next/font/google';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
  title: "Memo's Portfolio",
  description: "Memo Al-dujaili Personal Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${rubik.variable} ${playfair.variable} ${firaCode.variable} bg-[#181818] text-[#EFF0F0] antialiased`}>
        <div className="max-w-5xl mx-auto sm:px-4 px-2 md:px-8 pb-8"> {/* Center content with padding */}
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
