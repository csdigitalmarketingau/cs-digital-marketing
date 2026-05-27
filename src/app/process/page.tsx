import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Process | How We Rank Local Businesses on Google",
  description:
    "A data-driven, three-pillar approach to Google Business Profile optimisation. Learn how we help local businesses in Mandurah and Perth rank in the Google Map Pack.",
  alternates: {
    canonical: "https://csdigitalmarketing.au/process",
  },
};

export default function Process() {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient text-white py-20 md:py-28 relative">
        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          <span className="inline-flex items-center gap-2 text-gold/90 text-xs font-semibold uppercase tracking-widest mb-6">
            <span className="w-8 h-px bg-gold/60" />
            Our Process
            <span className="w-8 h-px bg-gold/60" />
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-5 tracking-tight">
            How We Rank Local Businesses
            <br />
            <span className="gold-gradient-text">on Google</span>
          </h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
            A systematic, data-driven methodology. No guesswork, no vague
            promises — just the three things Google actually cares about for
            local rankings.
          </p>
        </div>
      </section>

      {/* Data-driven intro */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-gold text-xs font-semibold uppercase tracking-widest">
              Step One
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mt-3 mb-4 tracking-tight section-divider">
              Everything Starts with Data
            </h2>
            <p className="text-gray-500 mt-8 max-w-2xl mx-auto leading-relaxed">
              Before we change anything, we measure everything. Every client
              engagement starts with a full audit — your current rankings, your
              competitors&apos; profiles, and where the gaps are. This becomes
              your baseline, and every change we make is tracked against it.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                label: "Heatmap Ranking Snapshot",
                desc: "We map your current ranking positions across your entire service area — not just one location, but a grid showing exactly where you rank and where you don't.",
              },
              {
                label: "Competitor Analysis",
                desc: "We analyse your top 20 competitors: their categories, services count, review volume, photo count, and listing completeness. We find what they're doing that you're not.",
              },
              {
                label: "Profile & Citation Audit",
                desc: "A full assessment of your Google Business Profile completeness, your website's local SEO signals, and your presence (or absence) across key citation directories.",
              },
            ].map((item) => (
              <div key={item.label} className="accent-card p-7">
                <div className="w-10 h-10 bg-navy/5 text-navy rounded-xl flex items-center justify-center mb-4">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-navy mb-2">{item.label}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Three pillars detailed */}
      <section className="py-20 md:py-28 bg-[#f8f9fb]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-gold text-xs font-semibold uppercase tracking-widest">
              The Framework
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mt-3 mb-4 tracking-tight section-divider">
              The Three Ranking Pillars
            </h2>
            <p className="text-gray-500 mt-8 max-w-2xl mx-auto leading-relaxed">
              Google ranks local businesses based on three core signals. Our
              programme systematically optimises all three.
            </p>
          </div>

          <div className="space-y-12">
            {/* Pillar 1 */}
            <div className="bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 bg-gold text-navy font-bold rounded-xl flex items-center justify-center text-lg shadow-md">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold text-navy">
                    Google Business Profile Optimisation
                  </h3>
                  <p className="text-sm text-gold font-medium">Weeks 2-4</p>
                </div>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed mb-4 ml-16">
                Your GBP is the foundation of your local ranking. We configure
                every element to maximise relevance and completeness:
              </p>
              <div className="ml-16 grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  "Primary category selection (1-3 maximum for focus)",
                  "Up to 99 services with detailed descriptions",
                  "Keyword-rich business description",
                  "All relevant attributes enabled",
                  "Geotagged photo strategy",
                  "Q&A section populated with common questions",
                  "Bookings link and website URL configured",
                  "Review generation workflow set up",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2.5 text-sm text-gray-600">
                    <svg
                      className="w-4 h-4 text-gold shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="bg-navy text-white rounded-2xl p-8 shadow-xl shadow-navy/20 ring-1 ring-gold/20">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 bg-gold text-navy font-bold rounded-xl flex items-center justify-center text-lg shadow-md">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">On-Page SEO</h3>
                  <p className="text-sm text-gold font-medium">Weeks 5-6</p>
                </div>
              </div>
              <p className="text-white/60 text-sm leading-relaxed mb-4 ml-16">
                Your website reinforces your local relevance. Google
                cross-references your GBP with your website — they need to
                align:
              </p>
              <div className="ml-16 grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  "Geo-targeted title tags (category + city format)",
                  "H1 tags matching your primary service and location",
                  "LocalBusiness schema markup (JSON-LD)",
                  "Google Maps embed on contact page",
                  "NAP (name, address, phone) in footer",
                  "Service-specific pages for each offering",
                  "Area pages for each service location",
                  "Internal linking between service and area pages",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2.5 text-sm text-white/70">
                    <svg
                      className="w-4 h-4 text-gold shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 bg-gold text-navy font-bold rounded-xl flex items-center justify-center text-lg shadow-md">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold text-navy">
                    Citation Building
                  </h3>
                  <p className="text-sm text-gold font-medium">Weeks 7-10</p>
                </div>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed mb-4 ml-16">
                Citations are mentions of your business (name, address, phone)
                across directories and websites. Consistent citations build
                trust signals that Google uses for local ranking:
              </p>
              <div className="ml-16 grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  "Core platforms: Google, Apple Maps, Bing Places",
                  "Major directories: Yelp, Foursquare, Facebook",
                  "Australian directories: Yellow Pages, True Local, Hotfrog",
                  "Industry-specific directories",
                  "NAP consistency audit across all listings",
                  "Duplicate and conflicting listing cleanup",
                  "42+ citation sources verified",
                  "Monthly monitoring for accuracy",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2.5 text-sm text-gray-600">
                    <svg
                      className="w-4 h-4 text-gold shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What you get */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-gold text-xs font-semibold uppercase tracking-widest">
              Transparency
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mt-3 mb-4 tracking-tight section-divider">
              What You Get Throughout
            </h2>
            <p className="text-gray-500 mt-8 max-w-2xl mx-auto leading-relaxed">
              Full transparency from day one to day eighty-four.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Weekly Email Updates",
                desc: "Every week you get a clear summary of what was done, what's next, and any metrics that moved. No radio silence.",
              },
              {
                title: "Monthly Ranking Reports",
                desc: "Heatmap comparison showing your before-and-after ranking positions across your entire service area.",
              },
              {
                title: "Competitor Intelligence",
                desc: "We flag when competitors make changes, detect keyword-stuffed names and fake listings, and keep you informed.",
              },
              {
                title: "Direct Communication",
                desc: "You talk directly to the person doing the work. No account managers, no support tickets, no runaround.",
              },
            ].map((item) => (
              <div key={item.title} className="accent-card p-7">
                <h3 className="font-semibold text-navy text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-gradient py-20 md:py-24 relative">
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <span className="text-gold/70 text-xs font-semibold uppercase tracking-widest">
            Get Started
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-4 tracking-tight">
            See How It Works for Your Business
          </h2>
          <p className="text-white/50 mb-10 text-lg max-w-lg mx-auto">
            Every business is different. Get a free audit and we&apos;ll show
            you exactly where you stand and what we&apos;d do.
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
