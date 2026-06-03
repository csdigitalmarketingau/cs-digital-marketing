export function LocalBusinessJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://csdigitalmarketing.au/#business",
    name: "CS Digital Marketing",
    description:
      "Google Business Profile optimisation for local businesses in Mandurah, Rockingham, and Perth, Western Australia. A 12-week programme to rank in the Google Map Pack.",
    url: "https://csdigitalmarketing.au",
    telephone: "+61466498861",
    email: "coen@csdigitalmarketing.au",
    logo: "https://csdigitalmarketing.au/logo.png",
    image: "https://csdigitalmarketing.au/logo.png",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Mandurah",
      addressRegion: "WA",
      postalCode: "6210",
      addressCountry: "AU",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -32.5269,
      longitude: 115.7217,
    },
    areaServed: [
      { "@type": "City", name: "Mandurah" },
      { "@type": "City", name: "Rockingham" },
      { "@type": "City", name: "Perth" },
      { "@type": "City", name: "Baldivis" },
      { "@type": "City", name: "Pinjarra" },
    ],
    serviceType: [
      "Google Business Profile Optimisation",
      "Local SEO",
      "Citation Building",
      "Google Maps Ranking",
    ],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    },
    founder: {
      "@type": "Person",
      name: "Coen Stewart",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ServiceJsonLd({
  name,
  description,
  url,
}: {
  name: string;
  description: string;
  url: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url,
    provider: {
      "@id": "https://csdigitalmarketing.au/#business",
    },
    areaServed: [
      { "@type": "City", name: "Mandurah" },
      { "@type": "City", name: "Rockingham" },
      { "@type": "City", name: "Perth" },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FAQJsonLd({ faqs }: { faqs: { question: string; answer: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
