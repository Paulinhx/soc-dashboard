// This is the root layout component that wraps all pages in the Next.js application
// It runs on the server by default (no 'use client' directive)

import type { Metadata } from "next"; // Import for Next.js metadata types
import { Geist, Geist_Mono } from "next/font/google"; // Import custom Google fonts
import "./globals.css"; // Import global styles
import ClientLayout from "@/components/ClientLayout"; // Import client-side layout wrapper

// Initialize Geist Sans font
// variable creates a CSS variable that can be used throughout the app
const geistSans = Geist({
  variable: "--font-geist-sans", // CSS variable name
  subsets: ["latin"], // Load only Latin character subset for performance
});

// Initialize Geist Mono font (for monospace text)
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Define metadata for the application
// This appears in browser tabs and search engine results
export const metadata: Metadata = {
  title: "SOC Dashboard",
  description: "Created by Paulinhx",
};

// Root layout component
// The 'Readonly' type ensures the props can't be modified
export default function RootLayout({
  children, // Children components passed to this layout
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Basic HTML structure
    <html lang="en">
      <body 
        // Apply font variables and anti-aliasing to the body
        // antialiased makes fonts smoother
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* 
          Wrap children in ClientLayout which handles:
          - AWS/Amplify configuration
          - Client-side authentication
          - Any other client-specific setup
        */}
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}