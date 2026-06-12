import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Online Company Limited — Genuine Electronics & ICT Supply in Kenya",
    template: "%s — Online Company Limited",
  },
  description:
    "Laptops, phones, CCTV, printers, networking & accessories. Retail, wholesale, repairs and bulk supply across Kenya.",
  authors: [{ name: "Online Company Limited" }],
  twitter: {
    card: "summary",
    site: "@onlinecompany",
  },
  openGraph: {
    title: "Online Company Limited",
    description: "Genuine Electronics, ICT Equipment, Repairs & Bulk Supply across Kenya.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>{children}</body>
    </html>
  );
}
