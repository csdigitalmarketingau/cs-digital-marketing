import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Google Business Profile Optimisation Perth | Local SEO",
  description:
    "Get your Perth business found on Google. GBP optimisation for local businesses across Perth, Western Australia. 12-week programme. Free audit available.",
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
      {/* Hero */}
      <section className="relative text-white py-20 md:py-28 overflow-hidden">
        <Image src="/mandurah-aerial.jpg" alt="" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-navy-dark/90 via-navy/80 to-navy-dark/85" />
        <div className="absolute inset-0 hero-gradient opacity-40" />
        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 text-gold/90 text-xs font-semibold uppercase tracking-widest mb-6">
              <span className="w-8 h-px bg-gold/60" />
              Service Area
              <span className="w-8 h-px bg-gold/60" />
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-5 tracking-tight animate-fade-up-delay-1">
            GBP Optimisation in{" "}
            <span className="gold-gradient-text">Perth</span>
          </h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed animate-fade-up-delay-2">
            Helping Perth businesses get into the Google Map Pack.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6">
          <span className="text-gold text-xs font-semibold uppercase tracking-widest">
            Local Expertise
          </span>
          <h2 className="text-3xl font-bold text-navy mt-3 mb-6 tracking-tight">
            Local SEO for Perth Businesses
          </h2>
          <div className="space-y-4 text-gray-500 leading-relaxed">
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
              <Link
                href="/services"
                className="text-gold hover:underline font-medium"
              >
                professional GBP optimisation
              </Link>{" "}
              for Perth businesses. Based in the Mandurah-Rockingham corridor,
              we work with service-area businesses and storefronts across the
              entire Perth metropolitan area. Same process for every client.
              You&apos;ll see everything we do and why.
            </p>
            <p>
              Our{" "}
              <Link
                href="/process"
                className="text-gold hover:underline font-medium"
              >
                12-week programme
              </Link>{" "}
              covers all three ranking pillars — GBP optimisation, on-page SEO,
              and citation building across 15+ Australian directories — with weekly updates
              and monthly heatmap reports tracking your progress across your
              service area.
            </p>
          </div>

          <div className="mt-16">
            <span className="text-gold text-xs font-semibold uppercase tracking-widest">
              Coverage
            </span>
            <h3 className="text-2xl font-bold text-navy mt-3 mb-6 tracking-tight">
              Areas We Service Across Perth
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {areas.map((area) => (
                <div
                  key={area}
                  className="bg-[#f8f9fb] border border-gray-100 rounded-xl px-4 py-3 text-sm text-navy font-medium text-center hover:border-gold/30 hover:shadow-sm transition-all"
                >
                  {area}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16">
            <span className="text-gold text-xs font-semibold uppercase tracking-widest">
              What We Do
            </span>
            <h3 className="text-2xl font-bold text-navy mt-3 mb-6 tracking-tight">
              What We Do for Perth Businesses
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
                <div key={item.title} className="accent-card p-6">
                  <h4 className="font-semibold text-navy mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Other areas */}
      <section className="py-12 bg-[#f8f9fb] border-y border-gray-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-gray-500">
            We also have a strong presence in{" "}
            <Link
              href="/areas/mandurah"
              className="text-gold hover:underline font-medium"
            >
              Mandurah
            </Link>{" "}
            and{" "}
            <Link
              href="/areas/rockingham"
              className="text-gold hover:underline font-medium"
            >
              Rockingham
            </Link>
            .
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-gradient py-20 md:py-24 relative">
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <span className="text-gold/70 text-xs font-semibold uppercase tracking-widest">
            Ready?
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-4 tracking-tight">
            Ready to Rank in Perth?
          </h2>
          <p className="text-white/50 mb-10 text-lg max-w-lg mx-auto">
            Get a free audit of your Google Business Profile and see exactly
            where you stand against your Perth competitors.
          </p>
          <Link
            href="/contact"
            className="btn-glow inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-navy font-semibold px-8 py-4 rounded-xl text-base transition-colors"
          >
            Get Your Free Audit
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
