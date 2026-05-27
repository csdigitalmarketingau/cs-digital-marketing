import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Google Business Profile Optimisation Perth | Local SEO",
  description:
    "Get your Perth business found on Google. Professional GBP optimisation for local businesses across Perth, Western Australia. Systematic 12-week programme. Free audit available.",
  alternates: {
    canonical: "https://csdigitalmarketing.au/areas/perth",
  },
};

const areas = [
  "Perth CBD",
  "Fremantle",
  "Joondalup",
  "Midland",
  "Armadale",
  "Cannington",
  "Morley",
  "Osborne Park",
  "Subiaco",
  "Victoria Park",
  "Cockburn",
  "Wanneroo",
];

export default function PerthArea() {
  return (
    <>
      {/* Header */}
      <section className="hero-gradient dot-pattern text-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">
            Google Business Profile Optimisation in Perth
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Helping Perth businesses rank in the Google Map Pack. A systematic
            approach to local search visibility.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-navy mb-6">
            Local SEO for Perth Businesses
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Perth is a large, competitive market with thousands of local
              businesses competing for visibility on Google. The Google Map Pack
              — the top 3 local results that appear with a map — captures the
              majority of clicks for local searches. If you&apos;re not in that
              top 3, you&apos;re effectively invisible to most potential
              customers.
            </p>
            <p>
              We provide{" "}
              <Link href="/services" className="text-gold hover:underline font-medium">
                professional GBP optimisation
              </Link>{" "}
              for Perth businesses. Based in the Mandurah-Rockingham corridor,
              we work with service-area businesses and storefronts across the
              entire Perth metropolitan area. Our approach is the same for every
              client: systematic, data-driven, and fully transparent.
            </p>
            <p>
              Our{" "}
              <Link href="/process" className="text-gold hover:underline font-medium">
                12-week programme
              </Link>{" "}
              covers all three ranking pillars — GBP optimisation, on-page SEO,
              and citation building across 42+ directories — with weekly updates
              and monthly heatmap reports tracking your progress across your
              service area.
            </p>
          </div>

          <h3 className="text-xl font-bold text-navy mt-12 mb-4">
            Areas We Service Across Perth
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {areas.map((area) => (
              <div
                key={area}
                className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-navy font-medium text-center"
              >
                {area}
              </div>
            ))}
          </div>

          <h3 className="text-xl font-bold text-navy mt-12 mb-4">
            What We Do for Perth Businesses
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                title: "GBP Audit & Optimisation",
                desc: "Full profile audit with competitor benchmarking against other Perth businesses in your niche. Every element optimised for local relevance.",
              },
              {
                title: "Local Citation Building",
                desc: "Submissions to Australian directories, Perth-specific listings, and industry directories with consistent NAP data across all platforms.",
              },
              {
                title: "On-Page SEO",
                desc: "Geo-targeted title tags, Perth-focused content, schema markup, and Google Maps embed to reinforce your local relevance signals.",
              },
              {
                title: "Competitive Intelligence",
                desc: "We analyse your top Perth competitors — their categories, services, reviews, and listing quality — to find opportunities they're missing.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-md hover:border-gold/30 transition-all"
              >
                <h4 className="font-semibold text-navy mb-1">{item.title}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other areas */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-gray-600 mb-4">
            We also have a strong presence in{" "}
            <Link href="/areas/mandurah" className="text-gold hover:underline font-medium">
              Mandurah
            </Link>{" "}
            and{" "}
            <Link href="/areas/rockingham" className="text-gold hover:underline font-medium">
              Rockingham
            </Link>
            .
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-gradient py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Rank in Perth?
          </h2>
          <p className="text-white/70 mb-8 text-lg">
            Get a free audit of your Google Business Profile and see exactly
            where you stand against your Perth competitors.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-gold hover:bg-gold-light text-navy font-semibold px-8 py-3.5 rounded-lg text-lg transition-colors shadow-lg shadow-gold/20"
          >
            Get Your Free Audit
          </Link>
        </div>
      </section>
    </>
  );
}
