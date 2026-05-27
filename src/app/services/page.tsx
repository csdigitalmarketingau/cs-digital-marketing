import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Google Business Profile optimisation for local businesses. A 12-week programme covering profile setup, citations, reviews, and ranking tracking.",
};

const included = [
  {
    title: "Full GBP Audit",
    desc: "Complete analysis of your current profile, rankings, competitor landscape, and online presence.",
  },
  {
    title: "Profile Optimisation",
    desc: "Categories, description, services list, attributes, photos, Q&A — every element configured for maximum relevance.",
  },
  {
    title: "Citation Building",
    desc: "Your business listed and verified across 15+ key directories with consistent name, address, and phone number.",
  },
  {
    title: "Review Strategy",
    desc: "A compliant review request workflow to build social proof and improve your ranking signals.",
  },
  {
    title: "On-Page SEO Basics",
    desc: "Schema markup, Google Map embed, title tags, and key website elements that support your local ranking.",
  },
  {
    title: "Weekly Progress Updates",
    desc: "You know exactly what was done each week. No mystery, no vague promises.",
  },
  {
    title: "Monthly Ranking Reports",
    desc: "Before-and-after comparison showing your ranking positions, review growth, and visibility changes.",
  },
  {
    title: "Competitor Monitoring",
    desc: "We track what your competitors are doing in the map pack so you stay ahead.",
  },
];

export default function Services() {
  return (
    <>
      {/* Header */}
      <section className="bg-navy text-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">
            Google Business Profile Optimisation
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            A structured 12-week programme to get your business ranking in the
            Google Map Pack for your target search terms.
          </p>
        </div>
      </section>

      {/* How it works timeline */}
      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-navy text-center mb-12">
            How the 12 Weeks Break Down
          </h2>
          <div className="space-y-8">
            {[
              {
                weeks: "Week 1",
                title: "Audit & Benchmark",
                detail:
                  "Full baseline audit of your profile, competitor analysis, heatmap ranking check, and strategy planning.",
              },
              {
                weeks: "Weeks 2–4",
                title: "Profile Optimisation",
                detail:
                  "Optimise every element of your GBP: categories, description, services, attributes, photos, Q&A. Set up review request workflow.",
              },
              {
                weeks: "Weeks 5–6",
                title: "On-Page SEO",
                detail:
                  "Website improvements that support your local ranking — schema markup, map embed, title tags, service pages.",
              },
              {
                weeks: "Weeks 7–10",
                title: "Citation Building",
                detail:
                  "Build and verify your presence across key directories. Ensure NAP consistency everywhere your business appears online.",
              },
              {
                weeks: "Weeks 11–12",
                title: "Review & Report",
                detail:
                  "Follow-up audit comparing all metrics against your baseline. Detailed report showing what improved and recommended next steps.",
              },
            ].map((phase, i) => (
              <div key={i} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-gold/10 text-gold font-bold rounded-full flex items-center justify-center text-sm shrink-0">
                    {i + 1}
                  </div>
                  {i < 4 && <div className="w-px flex-1 bg-gray-200 mt-2" />}
                </div>
                <div className="pb-2">
                  <div className="text-xs font-semibold text-gold uppercase tracking-wider mb-1">
                    {phase.weeks}
                  </div>
                  <h3 className="text-lg font-semibold text-navy mb-1">
                    {phase.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {phase.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-navy text-center mb-10">
            What&apos;s Included
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {included.map((item) => (
              <div
                key={item.title}
                className="flex gap-3 bg-white border border-gray-200 rounded-lg p-5"
              >
                <div className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-navy text-sm mb-0.5">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Let&apos;s See Where You Stand
          </h2>
          <p className="text-white/70 mb-8 text-lg">
            We&apos;ll run a free audit of your Google Business Profile and show
            you exactly what needs fixing — no obligation.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-gold hover:bg-gold-light text-navy font-semibold px-8 py-3.5 rounded-lg text-lg transition-colors"
          >
            Get Your Free Audit
          </Link>
        </div>
      </section>
    </>
  );
}
