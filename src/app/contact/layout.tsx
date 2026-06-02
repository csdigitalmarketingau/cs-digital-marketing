import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact CS Digital Marketing | Free GBP Audit Mandurah, Rockingham & Perth",
  description:
    "Request a free Google Business Profile audit. Contact CS Digital Marketing in Mandurah for local SEO services across Mandurah, Rockingham, and Perth.",
  alternates: {
    canonical: "https://csdigitalmarketing.au/contact",
  },
};

function ContactSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://csdigitalmarketing.au/#business",
    name: "CS Digital Marketing",
    url: "https://csdigitalmarketing.au",
    telephone: "+61466498861",
    email: "coen@csdigitalmarketing.au",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Mandurah",
      addressRegion: "WA",
      postalCode: "6210",
      addressCountry: "AU",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+61466498861",
      email: "coen@csdigitalmarketing.au",
      contactType: "customer service",
      areaServed: ["Mandurah", "Rockingham", "Perth"],
      availableLanguage: "English",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ContactSchema />
      {children}
    </>
  );
}
