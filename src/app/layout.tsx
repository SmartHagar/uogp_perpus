/** @format */

import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Laboratorium FST",
  description: "Website Laboratorium Fakultas Sains & Teknologi",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="acid">
      <body className="font-Cambria">{children}</body>
    </html>
  );
}
