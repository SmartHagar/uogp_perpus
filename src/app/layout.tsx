/** @format */

import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Perpustakaan UOGP",
  description: "Website Perpustakaan Universitas Ottow Geissler Papua",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="aqua">
      <body className="font-Cambria">{children}</body>
    </html>
  );
}
