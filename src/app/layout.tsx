import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LocalBusinessJsonLd } from "@/components/JsonLd";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "CS Digital Marketing | Google Business Profile Optimisation",
    template: "%s | CS Digital Marketing",
  },
  description:
    "We help local businesses in Mandurah and Perth get found on Google. Professional Google Business Profile optimisation to increase your visibility, reviews, and leads.",
  keywords: [
    "Google Business Profile optimisation",
    "GBP optimisation",
    "local SEO",
    "Mandurah",
    "Perth",
    "Google Maps ranking",
    "local business marketing",
  ],
  authors: [{ name: "CS Digital Marketing" }],
  openGraph: {
    title: "CS Digital Marketing | Google Business Profile Optimisation",
    description:
      "We help local businesses get found on Google. Professional GBP optimisation for more visibility, reviews, and leads.",
    url: "https://csdigitalmarketing.au",
    siteName: "CS Digital Marketing",
    locale: "en_AU",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <LocalBusinessJsonLd />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
