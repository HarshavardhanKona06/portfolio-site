import React from "react";

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Harshavardhan Kona",
  description: "Harshavardhan Kona's Personal Portfolio built with Next.js and deployed on Vercel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`antialiased`}>
      <body>
        {children}
      </body>
    </html>
  );
}
