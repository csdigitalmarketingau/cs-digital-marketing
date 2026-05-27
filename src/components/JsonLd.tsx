export function LocalBusinessJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "CS Digital Marketing",
    description:
      "Google Business Profile optimisation for local businesses in Mandurah and Perth, Western Australia.",
    url: "https://csdigitalmarketing.au",
    telephone: "+61466498861",
    email: "coen@csdigitalmarketing.au",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Mandurah",
      addressRegion: "WA",
      addressCountry: "AU",
    },
    areaServed: [
      { "@type": "City", name: "Mandurah" },
      { "@type": "City", name: "Rockingham" },
      { "@type": "City", name: "Perth" },
    ],
    serviceType: "Google Business Profile Optimisation",
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
