import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ServiceJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title:
    "Google Review Management | Get More Reviews & Rank Higher in Local Search",
  description:
    "Google review management for local businesses in Mandurah, Rockingham, and Perth. Get more reviews, improve your map pack ranking, and turn searchers into customers.",
  alternates: {
    canonical: "https://csdigitalmarketing.au/services/review-management",
  },
};

const reviewImpact = [
  {
    title: "Rankings",
    desc: "Reviews are a direct ranking factor for the Google Map Pack. Businesses with more reviews and higher ratings consistently rank above competitors with fewer reviews. More reviews and better ratings tell Google people actually use and like your business.",
  },
  {
    title: "Click-Through Rate",
    desc: "When two businesses appear side by side in search results, the one with 47 reviews and a 4.8-star rating will get more clicks than the one with 3 reviews and no rating. Reviews are the first thing people look at before deciding which business to contact.",
  },
  {
    title: "Conversion",
    desc: "88% of consumers trust online reviews as much as personal recommendations. Good reviews get you more clicks and more calls.",
  },
];

const strategies = [
  {
    title: "Direct Review Link",
    desc: "We create a short, branded link that takes your customers directly to the Google review form — no searching, no clicking through multiple screens. Two taps and they are writing a review. This one change can double your reviews because it makes leaving one dead simple.",
  },
  {
    title: "Timing the Ask",
    desc: "The best time to ask for a review is immediately after delivering a positive experience — when the customer is most satisfied and the interaction is fresh. We help you identify these moments and build the ask into your normal workflow so it feels natural, not forced.",
  },
  {
    title: "Response Strategy",
    desc: "Responding to every review — positive and negative — signals to Google that your business is active and engaged. We set up a response framework with templates for common scenarios: thank-you responses for positive reviews, professional responses for negative ones, and replies that mention what you do and where, which helps with rankings.",
  },
  {
    title: "Review Velocity",
    desc: "A sudden spike of 20 reviews in one week looks suspicious to Google. A steady flow of 2-3 reviews per week looks natural and sustainable. We help you build a system that generates consistent review velocity over time rather than one-off pushes that can trigger filters.",
  },
];

export default function ReviewManagement() {
  return (
    <>
      <ServiceJsonLd
        name="Google Review Management"
        description="Google review management for local businesses in Mandurah, Rockingham, and Perth. Build reviews, respond strategically, and convert more searchers into customers."
        url="https://csdigitalmarketing.au/services/review-management"
      />

      {/* Hero */}
      <section className="relative text-white py-20 md:py-28 overflow-hidden">
        <Image
          src="/mandurah-aerial.jpg"
          alt="Aerial view of Mandurah waterfront, Western Australia"
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
              Reviews
              <span className="w-8 h-px bg-gold/60" />
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-5 tracking-tight animate-fade-up-delay-1">
            Google Review Management
            <br />
            <span className="gold-gradient-text">
              for Local Businesses
            </span>
          </h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed animate-fade-up-delay-2">
            More reviews means higher rankings, more trust, and more
            customers. We set up a system that generates consistent reviews
            without being pushy.
          </p>
        </div>
      </section>

      {/* Why Reviews Matter */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6">
          <span className="text-gold text-xs font-semibold uppercase tracking-widest">
            The Impact
          </span>
          <h2 className="text-3xl font-bold text-navy mt-3 mb-6 tracking-tight">
            Why Google Reviews Matter for Local Rankings
          </h2>
          <div className="space-y-4 text-gray-500 leading-relaxed">
            <p>
              Google reviews are not just social proof for potential customers
              — they are a direct ranking signal for the Google Map Pack. When
              Google decides which three businesses to show for a local search,
              review quantity, quality, and recency all factor into that
              decision.
            </p>
            <p>
              A business with 50 reviews averaging 4.7 stars will consistently
              outrank a business with 5 reviews averaging 5.0 stars. Volume
              matters more than perfection. And a business that received 10
              reviews in the last month will rank better than one that received
              its last review six months ago. Recency matters because it
              signals that the business is active and still delivering good
              service.
            </p>
            <p>
              Beyond rankings, reviews affect every stage of the customer
              journey. They influence whether someone clicks on your listing,
              whether they call you or your competitor, and whether they trust
              you enough to book. Better rankings bring more customers, more
              customers leave more reviews, and the cycle keeps going.
            </p>
          </div>
        </div>
      </section>

      {/* Three Impacts */}
      <section className="py-20 md:py-28 bg-[#f8f9fb]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-gold text-xs font-semibold uppercase tracking-widest">
              Triple Impact
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mt-3 mb-4 tracking-tight section-divider">
              How Reviews Affect Your Business
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {reviewImpact.map((item) => (
              <div key={item.title} className="accent-card p-6">
                <h3 className="font-semibold text-navy mb-2 text-lg">
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

      {/* Our Strategy */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-gold text-xs font-semibold uppercase tracking-widest">
              What We Set Up
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mt-3 mb-4 tracking-tight section-divider">
              Our Review Generation Strategy
            </h2>
            <p className="text-gray-500 mt-8 max-w-2xl mx-auto leading-relaxed">
              We do not buy reviews, incentivise reviews, or do anything that
              violates Google&apos;s guidelines. We set up a system that makes
              it easy for your satisfied customers to leave honest feedback.
            </p>
          </div>
          <div className="space-y-6">
            {strategies.map((item, i) => (
              <div key={item.title} className="flex gap-4">
                <div className="w-10 h-10 bg-gold text-navy font-bold rounded-full flex items-center justify-center text-sm shrink-0 shadow-md">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-semibold text-navy mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Responding to Reviews */}
      <section className="py-20 md:py-28 bg-[#f8f9fb]">
        <div className="max-w-4xl mx-auto px-6">
          <span className="text-gold text-xs font-semibold uppercase tracking-widest">
            The Other Half
          </span>
          <h2 className="text-3xl font-bold text-navy mt-3 mb-6 tracking-tight">
            Why Responding to Reviews Matters as Much as Getting Them
          </h2>
          <div className="space-y-4 text-gray-500 leading-relaxed">
            <p>
              Google has confirmed that responding to reviews improves your
              local ranking. It signals engagement, shows you care about
              customer feedback, and gives you another opportunity to
              naturally mention your services and location in a public reply.
            </p>
            <p>
              For positive reviews, a genuine thank-you response that mentions
              the specific service reinforces what you do. &ldquo;Thanks for
              the kind words about the hot water installation — glad we could
              get it sorted quickly for you in Halls Head&rdquo; is better
              than &ldquo;Thanks for the review!&rdquo;
            </p>
            <p>
              For negative reviews, a professional and empathetic response
              shows potential customers that you handle problems responsibly.
              Most people reading reviews look at how you respond to
              criticism, not just the criticism itself. A thoughtful response
              to a 1-star review can actually increase trust.
            </p>
            <p>
              We provide response templates and guidelines so you can respond
              quickly and effectively to every review. If you prefer, we can
              handle responses on your behalf as part of our ongoing
              maintenance offering.
            </p>
          </div>
        </div>
      </section>

      {/* How It Fits */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6">
          <span className="text-gold text-xs font-semibold uppercase tracking-widest">
            Part of the System
          </span>
          <h2 className="text-3xl font-bold text-navy mt-3 mb-6 tracking-tight">
            Reviews as Part of Your Local SEO Strategy
          </h2>
          <div className="space-y-4 text-gray-500 leading-relaxed">
            <p>
              Review management is woven throughout our{" "}
              <Link
                href="/services"
                className="text-gold hover:underline font-medium"
              >
                12-week programme
              </Link>
              . During the{" "}
              <Link
                href="/services/gbp-optimisation"
                className="text-gold hover:underline font-medium"
              >
                GBP optimisation phase
              </Link>
              , we set up your review link and response templates. Throughout
              the remaining weeks, we monitor incoming reviews and help you
              maintain a steady review velocity.
            </p>
            <p>
              Reviews work alongside your optimised{" "}
              <Link
                href="/services/gbp-optimisation"
                className="text-gold hover:underline font-medium"
              >
                Google Business Profile
              </Link>
              , your{" "}
              <Link
                href="/services/on-page-seo"
                className="text-gold hover:underline font-medium"
              >
                on-page website SEO
              </Link>
              , and your{" "}
              <Link
                href="/services/citation-building"
                className="text-gold hover:underline font-medium"
              >
                citation network
              </Link>{" "}
              to create a complete{" "}
              <Link
                href="/services/local-seo"
                className="text-gold hover:underline font-medium"
              >
                local SEO presence
              </Link>
              . Reviews are the one part that keeps building on its own after
              we are done.
            </p>
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
            How Many Reviews Does Your Business Have?
          </h2>
          <p className="text-white/50 mb-10 text-lg max-w-lg mx-auto">
            We will check your current review profile and show you how it
            compares to the businesses ranking above you.
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
