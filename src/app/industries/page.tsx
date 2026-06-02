import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "GBP Optimisation by Industry | Local SEO for Trades & Services",
  description:
    "Google Business Profile optimisation tailored to your industry. We work with plumbers, electricians, cleaners, landscapers, builders, and other local service businesses across Mandurah, Rockingham, and Perth.",
  alternates: {
    canonical: "https://csdigitalmarketing.au/industries",
  },
};

const industries = [
  {
    title: "Plumbers",
    desc: "Emergency searches, blocked drains, hot water systems. Plumbing is one of the most searched local services on Google. The businesses in the map pack get the calls.",
    href: "/industries/plumbers",
  },
  {
    title: "Electricians",
    desc: "Electrical work is trust-dependent. Customers pick the electrician with the best reviews and the most complete Google profile. We make sure that is you.",
    href: "/industries/electricians",
  },
  {
    title: "Builders",
    desc: "Construction and building searches carry serious commercial intent. People searching for builders are ready to spend. Ranking in the map pack puts you in front of them at the right moment.",
    href: "/industries/builders",
  },
  {
    title: "Cleaners",
    desc: "Cleaning is a crowded market online. Dozens of businesses compete for the same suburb-level searches. Standing out in the map pack is the difference between a full schedule and an empty one.",
    href: "/industries/cleaners",
  },
  {
    title: "Landscapers",
    desc: "Landscaping customers search with intent. They want to see photos of your work, read your reviews, and know you service their area. Your Google profile is where all of that lives.",
    href: "/industries/landscapers",
  },
  {
    title: "Locksmiths",
    desc: "Locksmith searches are the most urgent local searches on Google. Someone locked out at midnight calls the first result they see. We make sure that is you.",
    href: "/industries/locksmiths",
  },
  {
    title: "Celebrants",
    desc: "Couples research celebrants on Google before reaching out. Your ceremony photos, reviews, and profile description are what they compare. We make yours stand out.",
    href: "/industries/celebrants",
  },
  {
    title: "Health & Beauty",
    desc: "Salons, spas, clinics, and wellness providers. One of the most searched local categories on Google. Reviews and photos carry extra weight in this industry.",
    href: "/industries/health-beauty",
  },
  {
    title: "Restaurants & Cafes",
    desc: "\"Restaurants near me\" is one of the most common Google searches in Australia. Your menu, photos, reviews, and hours decide whether people walk through your door.",
    href: "/industries/restaurants-cafes",
  },
  {
    title: "Professional Services",
    desc: "Accountants, lawyers, financial advisers. High-value, long-term clients who search Google when they need you. One new client can be worth thousands in recurring fees.",
    href: "/industries/professional-services",
  },
];

export default function Industries() {
  return (
    <>
      {/* Hero */}
      <section className="relative text-white py-20 md:py-28 overflow-hidden">
        <Image
          src="/mandurah-aerial.jpg"
          alt="Aerial view of Mandurah, Western Australia"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy-dark/90 via-navy/80 to-navy-dark/85" />
        <div className="absolute inset-0 hero-gradient opacity-40" />
        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 text-gold/90 text-xs font-semibold uppercase tracking-widest mb-6">
              <span className="w-8 h-px bg-gold/60" />
              Industries
              <span className="w-8 h-px bg-gold/60" />
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-5 tracking-tight animate-fade-up-delay-1">
            GBP Optimisation for
            <br />
            <span className="gold-gradient-text">Your Industry</span>
          </h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed animate-fade-up-delay-2">
            The ranking process is the same for every industry. The details
            change. We tailor categories, services, and content to match how
            your customers actually search.
          </p>
        </div>
      </section>

      {/* Industry Grid */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-5">
            {industries.map((industry) => (
              <Link
                key={industry.title}
                href={industry.href}
                className="accent-card p-6 block group"
              >
                <h2 className="text-lg font-semibold text-navy mb-2 group-hover:text-gold transition-colors">
                  {industry.title}
                </h2>
                <p className="text-sm text-gray-500 leading-relaxed mb-3">
                  {industry.desc}
                </p>
                <span className="text-gold text-sm font-medium inline-flex items-center gap-1">
                  Learn more
                  <svg
                    className="w-3 h-3 group-hover:translate-x-1 transition-transform"
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
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-gradient py-20 md:py-24 relative">
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <span className="text-gold/70 text-xs font-semibold uppercase tracking-widest">
            Any Industry
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-4 tracking-tight">
            Don&apos;t See Your Industry?
          </h2>
          <p className="text-white/50 mb-10 text-lg max-w-lg mx-auto">
            We work with any local business that needs customers from Google.
            Get in touch and we will tell you exactly what we can do for your
            business.
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
