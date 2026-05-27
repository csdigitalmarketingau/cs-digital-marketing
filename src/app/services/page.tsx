import type { Metadata } from "next";
import Link from "next/link";
import { FAQJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "GBP Optimisation Services Mandurah, Rockingham & Perth",
  description:
    "Professional Google Business Profile optimisation for local businesses in Mandurah, Rockingham, and Perth. 12-week programme to get your business ranking in the Google Map Pack.",
  alternates: {
    canonical: "https://csdigitalmarketing.au/services",
  },
};

const included = [
  {
    title: "Full Audit & Benchmark",
    desc: "We check how your business currently appears on Google, where you rank across your area, and what your top competitors are doing differently. This is your starting point.",
    icon: "audit",
  },
  {
    title: "Google Profile Optimisation",
    desc: "We configure every part of your Google listing — your business category, services, description, photos, and Q&A — so Google shows your business to the right people.",
    icon: "profile",
  },
  {
    title: "Directory Listings (42+ Sites)",
    desc: "We list your business across 42+ online directories (Google, Apple Maps, Bing, Yelp, Yellow Pages, and more) so your details are consistent everywhere customers look.",
    icon: "citation",
  },
  {
    title: "Review Strategy",
    desc: "We set up a simple system to help you collect more Google reviews from happy customers. More reviews means more trust and higher rankings.",
    icon: "review",
  },
  {
    title: "Website Tweaks",
    desc: "We make targeted changes to your website so it reinforces your Google listing — things like adding a map, making sure your business details are visible, and helping Google connect your site to your area.",
    icon: "seo",
  },
  {
    title: "Weekly Progress Updates",
    desc: "Every week you get a clear email showing what we did and what's next. No mystery, no vague promises — you always know what's happening.",
    icon: "update",
  },
  {
    title: "Monthly Ranking Reports",
    desc: "A visual before-and-after showing how your Google rankings have changed across your service area. You can see exactly where you've improved.",
    icon: "report",
  },
  {
    title: "Competitor Monitoring",
    desc: "We keep an eye on what your competitors are doing on Google — and flag anything dodgy like fake listings or misleading business names.",
    icon: "competitor",
  },
];

const faqs = [
  {
    question: "How long does it take to see results?",
    answer:
      "Most clients see their Google rankings improve within 4-6 weeks. The full 12-week programme builds long-term results by working on your Google profile, your website, and your directory listings — all the things Google looks at when deciding who to show first.",
  },
  {
    question: "What is Google Business Profile optimisation?",
    answer:
      "When someone searches for a service near them (like \"plumber Mandurah\"), Google shows a map with 3 local businesses. Your Google Business Profile is that listing. Optimisation means setting it up properly — your category, services, photos, reviews, description — so Google is more likely to show YOUR business in those top 3 spots.",
  },
  {
    question: "Do you lock clients into long-term contracts?",
    answer:
      "No. The 12-week programme is a one-time engagement with a clear start and finish. After that, we offer optional monthly maintenance (keeping your profile active, tracking rankings, managing reviews) but there's no lock-in. You can stop anytime.",
  },
  {
    question: "What areas do you service?",
    answer:
      "We work with local businesses across Mandurah, Rockingham, Baldivis, Pinjarra, and greater Perth, Western Australia. Since the work is done online, we can also help businesses outside these areas.",
  },
  {
    question: "What types of businesses do you work with?",
    answer:
      "Any local business that relies on customers finding them on Google — tradies, landscapers, cleaners, locksmiths, beauty salons, cafes, professional services, and more. If people in your area are searching for what you do, we can help you show up.",
  },
  {
    question: "How is this different from regular website SEO?",
    answer:
      "Regular SEO focuses on getting your website to rank in Google's main search results. We focus on the map results — the local listings that appear when someone searches for a service near them. These are two different things, and the map results are where most local customers click first.",
  },
  {
    question: "What do I need to provide?",
    answer:
      "Just access to your Google Business Profile (we'll walk you through how to share it) and your website login if we need to make any changes. That's it — we handle everything else and keep you updated every week.",
  },
  {
    question: "How much does it cost?",
    answer:
      "Pricing depends on your market and how competitive your area is. Get in touch for a free audit — we'll look at your current situation and give you a clear, upfront quote with no hidden fees.",
  },
];

export default function Services() {
  return (
    <>
      <FAQJsonLd faqs={faqs} />

      {/* Header */}
      <section className="hero-gradient dot-pattern text-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">
            GBP Optimisation Services in Mandurah, Rockingham &amp; Perth
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
          <h2 className="text-2xl font-bold text-navy text-center mb-4">
            How the 12 Weeks Break Down
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Each phase builds on the last. By week 12, all three ranking pillars
            are working together.
          </p>
          <div className="space-y-8">
            {[
              {
                weeks: "Week 1",
                title: "Audit & Benchmark",
                detail:
                  "We check how your business currently shows up on Google — your profile, your rankings across your area, and what your competitors are doing. This becomes your 'before' snapshot.",
              },
              {
                weeks: "Weeks 2-4",
                title: "Google Profile Optimisation",
                detail:
                  "We set up your Google Business Profile properly — your business category, a full list of services, description, photos, Q&A, and everything else Google looks at when deciding who to show first.",
              },
              {
                weeks: "Weeks 5-6",
                title: "Website Improvements",
                detail:
                  "We make changes to your website so it supports your Google listing — adding a map, making sure your business details are easy to find, and helping Google connect your site to your service area.",
              },
              {
                weeks: "Weeks 7-10",
                title: "Directory Listings",
                detail:
                  "We list your business on 42+ online directories (Apple Maps, Bing, Yelp, Yellow Pages, and more). Having your details consistent across the internet is a key ranking factor.",
              },
              {
                weeks: "Weeks 11-12",
                title: "Review & Report",
                detail:
                  "We take a fresh snapshot of your rankings and compare it to where you started. You get a detailed report showing what improved, where you rank now, and what to do next.",
              },
            ].map((phase, i) => (
              <div key={i} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-gold text-navy font-bold rounded-full flex items-center justify-center text-sm shrink-0 shadow-md">
                    {i + 1}
                  </div>
                  {i < 4 && <div className="w-px flex-1 bg-gold/20 mt-2" />}
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
          <h2 className="text-2xl font-bold text-navy text-center mb-4">
            What&apos;s Included
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-10">
            Everything you need to rank in the Google Map Pack — no extras, no
            upsells, no hidden costs during the programme.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {included.map((item) => (
              <div
                key={item.title}
                className="flex gap-4 bg-white border border-gray-200 rounded-xl p-5 hover:shadow-md hover:border-gold/30 transition-all"
              >
                <div className="w-8 h-8 bg-gold/10 text-gold rounded-lg flex items-center justify-center shrink-0 mt-0.5">
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
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-navy text-sm mb-1">
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

      {/* FAQ */}
      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-navy text-center mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-center mb-10">
            Common questions about our GBP optimisation services.
          </p>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group bg-white border border-gray-200 rounded-xl overflow-hidden"
              >
                <summary className="flex items-center justify-between cursor-pointer px-6 py-4 text-navy font-medium hover:bg-gray-50 transition-colors">
                  {faq.question}
                  <svg
                    className="w-5 h-5 text-gray-400 shrink-0 ml-4 group-open:rotate-180 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <div className="px-6 pb-4 text-sm text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-gradient py-16">
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
            className="inline-block bg-gold hover:bg-gold-light text-navy font-semibold px-8 py-3.5 rounded-lg text-lg transition-colors shadow-lg shadow-gold/20"
          >
            Get Your Free Audit
          </Link>
        </div>
      </section>
    </>
  );
}
