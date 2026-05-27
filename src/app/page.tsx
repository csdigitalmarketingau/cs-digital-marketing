import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Best Google Business Profile Optimisation Mandurah, Rockingham & Perth | CS Digital Marketing",
  description:
    "Get your local business found on Google. CS Digital Marketing provides professional GBP optimisation in Mandurah, Rockingham, and Perth. Free audit available.",
  openGraph: {
    title:
      "Best Google Business Profile Optimisation Mandurah, Rockingham & Perth | CS Digital Marketing",
    description:
      "Get your local business found on Google. Professional GBP optimisation in Mandurah, Rockingham, and Perth.",
  },
  alternates: {
    canonical: "https://csdigitalmarketing.au",
  },
};

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient dot-pattern text-white py-20 md:py-28 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          <div className="animate-fade-up">
            <span className="inline-block text-gold text-sm font-semibold uppercase tracking-wider mb-4 border border-gold/30 rounded-full px-4 py-1.5">
              Google Business Profile Specialists
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-up-delay-1">
            Google Business Profile
            <br />
            Optimisation in{" "}
            <span className="text-gold">Mandurah, Rockingham &amp; Perth</span>
          </h1>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up-delay-2">
            We help local businesses rank in the Google Map Pack. More
            visibility. More calls. More jobs. Systematic, data-driven, and
            measurable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up-delay-3">
            <Link
              href="/contact"
              className="bg-gold hover:bg-gold-light text-navy font-semibold px-8 py-3.5 rounded-lg text-lg transition-colors shadow-lg shadow-gold/20"
            >
              Get a Free Audit
            </Link>
            <Link
              href="/process"
              className="border border-white/30 hover:border-white/60 text-white font-medium px-8 py-3.5 rounded-lg text-lg transition-colors"
            >
              See Our Process
            </Link>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "12", label: "Week Programme" },
              { value: "3", label: "Ranking Pillars" },
              { value: "42+", label: "Citation Sources" },
              { value: "100%", label: "Transparency" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl md:text-4xl font-bold text-gold">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem / Solution */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-4">
              Your Customers Are Searching. Are They Finding You?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              97% of consumers search online for local businesses. If your
              Google Business Profile isn&apos;t optimised, you&apos;re invisible
              to the people who need your services right now.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<MapPinIcon />}
              title="Get Found Locally"
              description="Appear in the Google Map Pack when customers search for your services in your area."
            />
            <FeatureCard
              icon={<StarIcon />}
              title="Build Trust with Reviews"
              description="A structured review strategy that builds social proof and improves your ranking signals."
            />
            <FeatureCard
              icon={<TrendingUpIcon />}
              title="Track Real Results"
              description="Monthly heatmap reports showing your ranking improvements, visibility growth, and new leads."
            />
          </div>
        </div>
      </section>

      {/* Three pillars */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-4">
              The Three Pillars of Local Ranking
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Every part of our 12-week programme targets one of the three
              factors Google uses to rank local businesses.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PillarCard
              number="1"
              title="GBP Optimisation"
              description="Your Google Business Profile is the foundation. We optimise every element — categories, services, description, photos, Q&A, attributes — so Google understands exactly what you offer and where."
              items={[
                "Category & service configuration",
                "Description & attribute optimisation",
                "Photo & post strategy",
                "Review generation workflow",
              ]}
            />
            <PillarCard
              number="2"
              title="On-Page SEO"
              description="Your website reinforces your local relevance. We ensure your site tells Google you're the right result for local searches."
              items={[
                "Geo-targeted title tags & H1s",
                "Schema markup & JSON-LD",
                "Google Maps embed",
                "Service & area page structure",
              ]}
            />
            <PillarCard
              number="3"
              title="Citation Building"
              description="Consistent business listings across directories build trust signals. We submit and verify your presence across 42+ citation sources."
              items={[
                "Core directories (Google, Apple, Bing)",
                "Australian business directories",
                "Industry-specific listings",
                "NAP consistency audit",
              ]}
            />
          </div>
        </div>
      </section>

      {/* Who we help */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-4">
              Who We Work With
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We specialise in service-area businesses and local storefronts that
              depend on being found by nearby customers.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Tradies & Builders",
              "Landscapers",
              "Cleaners",
              "Locksmiths",
              "Celebrants",
              "Health & Beauty",
              "Restaurants & Cafes",
              "Professional Services",
            ].map((niche) => (
              <div
                key={niche}
                className="bg-white border border-gray-200 rounded-lg px-4 py-3 text-center text-sm font-medium text-navy hover:border-gold/50 hover:shadow-sm transition-all"
              >
                {niche}
              </div>
            ))}
          </div>
          <p className="text-center text-gray-500 text-sm mt-6">
            Serving businesses across{" "}
            <Link href="/areas/mandurah" className="text-gold hover:underline">
              Mandurah
            </Link>
            ,{" "}
            <Link
              href="/areas/rockingham"
              className="text-gold hover:underline"
            >
              Rockingham
            </Link>
            , and{" "}
            <Link href="/areas/perth" className="text-gold hover:underline">
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
            Ready to Rank in the Map Pack?
          </h2>
          <p className="text-white/70 mb-8 text-lg">
            We&apos;ll audit your Google Business Profile for free and show you
            exactly what&apos;s holding you back.
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

/* ---- SVG Icon Components ---- */

function MapPinIcon() {
  return (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
    </svg>
  );
}

function TrendingUpIcon() {
  return (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
    </svg>
  );
}

/* ---- Card Components ---- */

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-lg hover:border-gold/30 transition-all group">
      <div className="w-14 h-14 bg-gold/10 text-gold rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/20 transition-colors">
        {icon}
      </div>
      <h3 className="font-semibold text-navy text-lg mb-2">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  );
}

function PillarCard({
  number,
  title,
  description,
  items,
}: {
  number: string;
  title: string;
  description: string;
  items: string[];
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-gold/30 transition-all">
      <div className="w-10 h-10 bg-gold text-navy font-bold rounded-lg flex items-center justify-center mb-4 text-lg">
        {number}
      </div>
      <h3 className="font-semibold text-navy text-xl mb-3">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed mb-4">
        {description}
      </p>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
            <svg
              className="w-4 h-4 text-gold shrink-0 mt-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
