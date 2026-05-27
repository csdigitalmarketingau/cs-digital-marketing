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
      {/* Header */}
      <section className="hero-gradient dot-pattern text-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">
            How We Rank Local Businesses on Google
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            A systematic, data-driven methodology. No guesswork, no vague
            promises — just the three things Google actually cares about for
            local rankings.
          </p>
        </div>
      </section>

      {/* Data-driven intro */}
      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-navy mb-4">
              Everything Starts with Data
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
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
              <div
                key={item.label}
                className="bg-gray-50 border border-gray-200 rounded-xl p-6"
              >
                <h3 className="font-semibold text-navy mb-2">{item.label}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Three pillars detailed */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-navy text-center mb-4">
            The Three Ranking Pillars
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Google ranks local businesses based on three core signals. Our
            programme systematically optimises all three.
          </p>

          {/* Pillar 1 */}
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-gold text-navy font-bold rounded-xl flex items-center justify-center text-lg shadow-md">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold text-navy">
                  Google Business Profile Optimisation
                </h3>
                <p className="text-sm text-gray-500">Weeks 2-4</p>
              </div>
            </div>
            <div className="ml-16 space-y-3 text-gray-600 text-sm leading-relaxed">
              <p>
                Your GBP is the foundation of your local ranking. We configure
                every element to maximise relevance and completeness:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
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
                  <div key={item} className="flex items-start gap-2">
                    <svg
                      className="w-4 h-4 text-gold shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-gold text-navy font-bold rounded-xl flex items-center justify-center text-lg shadow-md">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold text-navy">On-Page SEO</h3>
                <p className="text-sm text-gray-500">Weeks 5-6</p>
              </div>
            </div>
            <div className="ml-16 space-y-3 text-gray-600 text-sm leading-relaxed">
              <p>
                Your website reinforces your local relevance. Google cross-references
                your GBP with your website — they need to align:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
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
                  <div key={item} className="flex items-start gap-2">
                    <svg
                      className="w-4 h-4 text-gold shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Pillar 3 */}
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-gold text-navy font-bold rounded-xl flex items-center justify-center text-lg shadow-md">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold text-navy">
                  Citation Building
                </h3>
                <p className="text-sm text-gray-500">Weeks 7-10</p>
              </div>
            </div>
            <div className="ml-16 space-y-3 text-gray-600 text-sm leading-relaxed">
              <p>
                Citations are mentions of your business (name, address, phone) across
                directories and websites. Consistent citations build trust signals
                that Google uses for local ranking:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
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
                  <div key={item} className="flex items-start gap-2">
                    <svg
                      className="w-4 h-4 text-gold shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
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
      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-navy text-center mb-4">
            What You Get Throughout
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-10">
            Full transparency from day one to day eighty-four.
          </p>
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
              <div
                key={item.title}
                className="border border-gray-200 rounded-xl p-6 hover:shadow-md hover:border-gold/30 transition-all"
              >
                <h3 className="font-semibold text-navy text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-gradient py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            See How It Works for Your Business
          </h2>
          <p className="text-white/70 mb-8 text-lg">
            Every business is different. Get a free audit and we&apos;ll show you
            exactly where you stand and what we&apos;d do.
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
