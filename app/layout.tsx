// app/layout.tsx
import type { Metadata } from "next";
import { Teko, Geist_Mono } from "next/font/google";
import "./globals.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Topbar from "./components/Topbar";

const teko = Teko({
  variable: "--font-teko",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Vector Printers Ltd - Professional Printing & Branding Solutions",
  description: "Professional printing services including business cards, t-shirts, books, prints, and invitation cards. High-quality branding solutions for your business.",
  keywords: "printing, business cards, t-shirts, books, prints, invitation cards, branding, vector printers",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${teko.variable} ${geistMono.variable} antialiased`}>
        {/* Topbar will disappear on scroll */}
        <Topbar />
        
        {/* Header becomes sticky at the top when topbar disappears */}
        <div className="sticky top-0 z-30">
          <Header />
        </div>
        
        <div className="min-h-screen flex flex-col">
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <ToastContainer position="bottom-right" />
      </body>
    </html>
  );
}