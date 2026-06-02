import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FAQJsonLd, ServiceJsonLd } from "@/components/JsonLd";
import { Breadcrumb } from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "GBP Optimisation Services Mandurah, Rockingham & Perth",
  description:
    "Google Business Profile optimisation for local businesses in Mandurah, Rockingham, and Perth. 12-week programme to get your business ranking in the Google Map Pack.",
  alternates: {
    canonical: "https://csdigitalmarketing.au/services",
  },
};

const included = [
  {
    title: "Full Audit & Benchmark",
    desc: "We check how your business currently appears on Google, where you rank across your area, and what your top competitors are doing differently.",
  },
  {
    title: "Google Profile Optimisation",
    desc: "We configure every part of your Google listing (your business category, services, description, photos, and Q&A) so Google shows your business to the right people.",
  },
  {
    title: "Directory Listings (15+ Sites)",
    desc: "We list your business across 15+ Australian directories (Google, Apple Maps, Bing, Yelp, Yellow Pages, and more) so your details are consistent everywhere customers look.",
  },
  {
    title: "Review Strategy",
    desc: "We set up a simple system to help you collect more Google reviews from happy customers. More reviews means more trust and higher rankings.",
  },
  {
    title: "Website Tweaks",
    desc: "We make changes to your website so it backs up your Google listing, adding a map, making your business details visible, and helping Google connect your site to your area.",
  },
  {
    title: "Weekly Progress Updates",
    desc: "Every week you get a clear email showing what we did and what's next.",
  },
  {
    title: "Monthly Ranking Reports",
    desc: "A visual before-and-after showing how your Google rankings have changed across your service area. You can see exactly where you've improved.",
  },
  {
    title: "Competitor Monitoring",
    desc: "We keep an eye on what your competitors are doing on Google and flag anything dodgy like fake listings or misleading business names.",
  },
];

const faqs = [
  {
    question: "How long does it take to see results?",
    answer:
      "Most clients see their Google rankings improve within 4-6 weeks. The full 12-week programme builds long-term results by working on your Google profile, your website, and your directory listings. These are all the things Google looks at when deciding who to show first.",
  },
  {
    question: "What is Google Business Profile optimisation?",
    answer:
      'When someone searches for a service near them (like "plumber Mandurah"), Google shows a map with 3 local businesses. Your Google Business Profile is that listing. Optimisation means setting it up properly (your category, services, photos, reviews, and description) so Google is more likely to show YOUR business in those top 3 spots.',
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
      "Any local business that relies on customers finding them on Google: tradies, landscapers, cleaners, locksmiths, beauty salons, cafes, professional services, and more. If people in your area are searching for what you do, we can help you show up.",
  },
  {
    question: "How is this different from regular website SEO?",
    answer:
      "Regular SEO focuses on getting your website to rank in Google's main search results. We focus on the map results, the local listings that appear when someone searches for a service near them. These are two different things, and the map results are where most local customers click first.",
  },
  {
    question: "What do I need to provide?",
    answer:
      "Just access to your Google Business Profile (we'll walk you through how to share it) and your website login if we need to make any changes. That's it. We handle everything else and keep you updated every week.",
  },
  {
    question: "How much does it cost?",
    answer:
      "Pricing depends on your market and how competitive your area is. Get in touch for a free audit, and we'll look at your current situation and give you a clear, upfront quote with no hidden fees.",
  },
];

export default function Services() {
  return (
    <>
      <FAQJsonLd faqs={faqs} />
      <ServiceJsonLd
        name="Google Business Profile Optimisation — 12-Week Programme"
        description="A structured 12-week programme covering GBP optimisation, on-page SEO, and citation building to rank local businesses in the Google Map Pack across Mandurah, Rockingham, and Perth."
        url="https://csdigitalmarketing.au/services"
      />
      <Breadcrumb items={[
        { label: "Home", href: "/" },
        { label: "Services" },
      ]} />

      {/* Hero */}
      <section className="relative text-white py-20 md:py-28 overflow-hidden">
        <Image src="/mandurah-aerial.jpg" alt="" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-navy-dark/90 via-navy/80 to-navy-dark/85" />
        <div className="absolute inset-0 hero-gradient opacity-40" />
        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 text-gold/90 text-xs font-semibold uppercase tracking-widest mb-6">
              <span className="w-8 h-px bg-gold/60" />
              Our Services
              <span className="w-8 h-px bg-gold/60" />
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-5 tracking-tight animate-fade-up-delay-1">
            GBP Optimisation Services in
            <br />
            <span className="gold-gradient-text">
              Mandurah, Rockingham &amp; Perth
            </span>
          </h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed animate-fade-up-delay-2">
            A structured 12-week programme to get your business ranking in the
            Google Map Pack for your target search terms.
          </p>
        </div>
      </section>

      {/* Service Pages */}
      <section className="py-20 md:py-28 bg-[#f8f9fb]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-gold text-xs font-semibold uppercase tracking-widest">
              What We Do
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mt-3 mb-4 tracking-tight section-divider">
              Our Core Services
            </h2>
            <p className="text-gray-500 mt-8 max-w-2xl mx-auto leading-relaxed">
              Each one tackles a different part of how Google ranks local
              businesses.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                title: "GBP Optimisation",
                desc: "Complete Google Business Profile setup and configuration: categories, services, photos, posts, and attributes.",
                href: "/services/gbp-optimisation",
              },
              {
                title: "Local SEO",
                desc: "Our full three-pillar system to rank your business in the Google Map Pack for your target searches.",
                href: "/services/local-seo",
              },
              {
                title: "Citation Building",
                desc: "Consistent business listings across 15+ authoritative Australian directories that influence local rankings.",
                href: "/services/citation-building",
              },
              {
                title: "On-Page SEO",
                desc: "Title tags, schema markup, heading structure, and geo-targeted content to reinforce your local relevance.",
                href: "/services/on-page-seo",
              },
              {
                title: "Review Management",
                desc: "A compliant system to generate consistent Google reviews and respond strategically to build trust.",
                href: "/services/review-management",
              },
            ].map((service) => (
              <Link key={service.title} href={service.href} className="accent-card p-6 block group">
                <h3 className="font-semibold text-navy mb-2 group-hover:text-gold transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-3">
                  {service.desc}
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

      {/* How it works timeline */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-gold text-xs font-semibold uppercase tracking-widest">
              The Programme
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mt-3 mb-4 tracking-tight section-divider">
              How the 12 Weeks Break Down
            </h2>
            <p className="text-gray-500 mt-8 max-w-2xl mx-auto leading-relaxed">
              Each phase builds on the last.
            </p>
          </div>
          <div className="space-y-8">
            {[
              {
                weeks: "Week 1",
                title: "Audit & Benchmark",
                detail:
                  "We check how your business currently shows up on Google: your profile, your rankings across your area, and what your competitors are doing. This becomes your 'before' snapshot.",
              },
              {
                weeks: "Weeks 2-4",
                title: "Google Profile Optimisation",
                detail:
                  "We set up your Google Business Profile properly: your business category, a full list of services, description, photos, Q&A, and everything else Google looks at when deciding who to show first.",
              },
              {
                weeks: "Weeks 5-6",
                title: "Website Improvements",
                detail:
                  "We make changes to your website so it supports your Google listing, adding a map, making sure your business details are easy to find, and helping Google connect your site to your service area.",
              },
              {
                weeks: "Weeks 7-10",
                title: "Directory Listings",
                detail:
                  "We list your business on 15+ Australian directories (Apple Maps, Bing, Yelp, Yellow Pages, and more). Having your details consistent across the internet is a key ranking factor.",
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
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {phase.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="py-20 md:py-28 bg-[#f8f9fb]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-gold text-xs font-semibold uppercase tracking-widest">
              Included
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mt-3 mb-4 tracking-tight section-divider">
              What&apos;s Included
            </h2>
            <p className="text-gray-500 mt-8 max-w-2xl mx-auto leading-relaxed">
              All of this is part of the 12-week programme. No upsells, no
              hidden costs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {included.map((item) => (
              <div key={item.title} className="accent-card p-6">
                <div className="flex gap-4">
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
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-gold text-xs font-semibold uppercase tracking-widest">
              Got Questions?
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mt-3 mb-4 tracking-tight section-divider">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-500 mt-8 leading-relaxed">
              Common questions about our GBP optimisation services.
            </p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-gold/30 transition-colors"
              >
                <summary className="flex items-center justify-between cursor-pointer px-6 py-4 text-navy font-medium hover:bg-gray-50/50 transition-colors">
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
                <div className="px-6 pb-4 text-sm text-gray-500 leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-gradient py-20 md:py-24 relative">
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <span className="text-gold/70 text-xs font-semibold uppercase tracking-widest">
            Ready?
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-4 tracking-tight">
            Let&apos;s See Where You Stand
          </h2>
          <p className="text-white/50 mb-10 text-lg max-w-lg mx-auto">
            We&apos;ll run a free audit of your Google Business Profile and show
            you exactly what needs fixing, no obligation.
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
