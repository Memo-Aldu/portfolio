import type { Metadata } from "next";
import { Rubik, Playfair_Display, Fira_Code } from 'next/font/google';

import "./globals.css";

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
  description: "Memo's Personal Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${rubik.variable} ${playfair.variable} ${firaCode.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
