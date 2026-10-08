import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });

export const metadata: Metadata = {
  title: "Free Digital Marketing Consultation | Digital Saugat",
  description: "Book a free digital marketing consultation and get a customized 30-day marketing plan for your business. Discover opportunities to attract more customers online.",
  openGraph: {
    title: "Free Digital Marketing Consultation | Digital Saugat",
    description: "Book a free digital marketing consultation and get a customized 30-day marketing plan for your business.",
    type: "website",
    siteName: "Digital Saugat",
  },
  icons: {
    icon: "/logo.webp",
    shortcut: "/logo.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geist.variable} font-sans antialiased`}>{children}</body>
    </html>
  );
}
