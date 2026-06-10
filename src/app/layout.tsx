import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LocalBusinessJsonLd } from "@/components/JsonLd";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://csdigitalmarketing.au"),
  title: {
    default:
      "Google Business Profile Optimisation Mandurah, Rockingham & Perth | CS Digital Marketing",
    template: "%s | CS Digital Marketing",
  },
  description:
    "We help local businesses in Mandurah, Rockingham, and Perth get found on Google. Professional Google Business Profile optimisation to increase your visibility, reviews, and leads.",
  keywords: [
    "Google Business Profile optimisation",
    "GBP optimisation Mandurah",
    "local SEO Mandurah",
    "local SEO Perth",
    "Google Maps ranking",
    "local business marketing Mandurah",
    "GBP specialist Perth",
    "citation building",
    "Google Map Pack",
  ],
  authors: [{ name: "CS Digital Marketing" }],
  openGraph: {
    title:
      "Google Business Profile Optimisation Mandurah, Rockingham & Perth | CS Digital Marketing",
    description:
      "We help local businesses get found on Google. Professional GBP optimisation for more visibility, reviews, and leads.",
    url: "https://csdigitalmarketing.au",
    siteName: "CS Digital Marketing",
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "CS Digital Marketing | GBP Optimisation Mandurah, Rockingham & Perth",
    description:
      "Professional Google Business Profile optimisation for local businesses in Mandurah, Rockingham, and Perth.",
  },
  alternates: {
    canonical: "https://csdigitalmarketing.au",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
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
        <Analytics />
      </body>
    </html>
  );
}
