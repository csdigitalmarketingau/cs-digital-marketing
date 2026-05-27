import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact CS Digital Marketing | Free GBP Audit Mandurah, Rockingham & Perth",
  description:
    "Request a free Google Business Profile audit. Contact CS Digital Marketing in Mandurah for professional local SEO services across Perth and Western Australia.",
  alternates: {
    canonical: "https://csdigitalmarketing.au/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
