import type { Metadata } from "next";

import "./globals.css";
import Navbar from "@/sections/Navbar";
import FooterSection from "@/sections/FooterSection";

export const metadata: Metadata = {
  title: "Co-working-space",
  description: "Co-working-space",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <Navbar />
        {children}
        <FooterSection />
      </body>
    </html>
  );
}
