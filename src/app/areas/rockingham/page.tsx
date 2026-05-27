import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Google Business Profile Optimisation Rockingham | Local SEO",
  description:
    "Get your Rockingham business found on Google. Professional GBP optimisation for local businesses in Rockingham, Baldivis, Warnbro, Safety Bay, and Shoalwater. Free audit available.",
  alternates: {
    canonical: "https://csdigitalmarketing.au/areas/rockingham",
  },
};

const suburbs = [
  "Baldivis",
  "Warnbro",
  "Safety Bay",
  "Shoalwater",
  "Port Kennedy",
  "Secret Harbour",
  "Singleton",
  "Golden Bay",
  "Cooloongup",
  "Hillman",
  "East Rockingham",
  "Wellard",
];

export default function RockinghamArea() {
  return (
    <>
      {/* Header */}
      <section className="hero-gradient dot-pattern text-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">
            Google Business Profile Optimisation in Rockingham
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Helping Rockingham and Baldivis businesses rank in the Google Map
            Pack. Local expertise, data-driven results.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-navy mb-6">
            Local SEO for Rockingham Businesses
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Rockingham and the surrounding suburbs — including fast-growing
              areas like Baldivis, Secret Harbour, and Port Kennedy — have an
              increasingly competitive local business landscape. If someone
              searches for your service in Rockingham and you&apos;re not in
              the top 3 of the Google Map Pack, you&apos;re missing out on
              calls and enquiries every day.
            </p>
            <p>
              We provide{" "}
              <Link href="/services" className="text-gold hover:underline font-medium">
                professional GBP optimisation
              </Link>{" "}
              for Rockingham businesses — the same systematic approach we use
              across all our clients: audit, optimise, build citations, track
              results. Every decision is based on data, and every result is
              measurable.
            </p>
            <p>
              Our{" "}
              <Link href="/process" className="text-gold hover:underline font-medium">
                12-week programme
              </Link>{" "}
              covers all three ranking pillars: GBP optimisation, on-page SEO,
              and citation building — with weekly updates and monthly heatmap
              reports so you see your progress.
            </p>
          </div>

          <h3 className="text-xl font-bold text-navy mt-12 mb-4">
            Suburbs We Service in the Rockingham Area
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {suburbs.map((suburb) => (
              <div
                key={suburb}
                className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-navy font-medium text-center"
              >
                {suburb}
              </div>
            ))}
          </div>

          <h3 className="text-xl font-bold text-navy mt-12 mb-4">
            What We Do for Rockingham Businesses
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                title: "GBP Audit & Optimisation",
                desc: "Full profile audit with competitor benchmarking against other Rockingham businesses. Every element optimised for local relevance.",
              },
              {
                title: "Local Citation Building",
                desc: "Submissions to Australian directories, Rockingham-area listings, and industry directories with consistent NAP data.",
              },
              {
                title: "On-Page SEO",
                desc: "Geo-targeted title tags, Rockingham-focused content, schema markup, and Google Maps embed to reinforce your local relevance.",
              },
              {
                title: "Review Strategy",
                desc: "A compliant review generation system that builds social proof and strengthens your ranking signals in the Rockingham area.",
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
            We also service businesses in{" "}
            <Link href="/areas/mandurah" className="text-gold hover:underline font-medium">
              Mandurah
            </Link>{" "}
            and{" "}
            <Link href="/areas/perth" className="text-gold hover:underline font-medium">
              greater Perth
            </Link>
            .
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-gradient py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Rank in Rockingham?
          </h2>
          <p className="text-white/70 mb-8 text-lg">
            Get a free audit of your Google Business Profile and see exactly
            where you stand against your Rockingham competitors.
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
