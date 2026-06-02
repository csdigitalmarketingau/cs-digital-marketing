import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ServiceJsonLd } from "@/components/JsonLd";
import { Breadcrumb } from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "Google Business Profile Optimisation | Setup, Manage & Rank Higher in Google Maps",
  description:
    "Professional Google Business Profile optimisation for local businesses. We set up, configure, and optimise every element of your GBP to rank in the Google Map Pack across Mandurah, Rockingham, and Perth.",
  alternates: {
    canonical: "https://csdigitalmarketing.au/services/gbp-optimisation",
  },
};

const profileElements = [
  {
    title: "Business Categories",
    desc: "Your primary category is the single strongest ranking signal in your Google Business Profile. Most businesses ranking in the top 3 use just one or two categories, not five or six. We research your market to pick the exact category Google associates with your services, then add only the secondary categories that genuinely apply. Getting this wrong pushes you out of the map pack for the searches that matter most.",
  },
  {
    title: "Services & Descriptions",
    desc: "Google lets you list up to 99 individual services with 300-character descriptions for each. Most businesses leave this section empty or add a handful of generic entries. We build a full service list using the words your customers type into Google, which gives Google far more data to match your profile against relevant queries. The businesses ranking at the top of local results average close to 30 services listed.",
  },
  {
    title: "Business Description",
    desc: "Your description is 750 characters to explain what you do, where you do it, and why someone should choose you. We write descriptions that naturally include your target service terms and location without keyword stuffing. We write it so Google and the people searching can tell exactly what you do.",
  },
  {
    title: "Photos & Visual Content",
    desc: "Businesses with more than 100 photos get 520% more calls than the average listing. We help you build a photo strategy that covers your team, your work, your premises, and your service area. Every photo gets tagged with your location so Google knows where you work.",
  },
  {
    title: "Attributes & Features",
    desc: "Google offers dozens of attributes depending on your business type, from payment methods and accessibility features to service options and health protocols. Most businesses skip these entirely. We tick every box that applies to your business. Google gives more visibility to profiles that fill in more fields.",
  },
  {
    title: "Google Posts",
    desc: "Regular posting signals to Google that your business is active and engaged. We set up a posting schedule covering offers, updates, and service highlights, at least weekly and ideally twice a week. Each post includes a geotagged image and a clear call to action. This keeps your profile fresh and gives Google more content to associate with your business.",
  },
  {
    title: "Q&A Section",
    desc: "The Questions & Answers section on your profile is publicly visible and often ignored. We seed it with the questions your potential customers actually ask (service areas, pricing, availability, specialties) and provide clear, helpful answers. This creates additional keyword-rich content directly on your listing.",
  },
  {
    title: "Review Management Setup",
    desc: "We set up a review generation system with a direct link your customers can use to leave a Google review in two taps. We also configure your profile for review responses, because businesses that reply to every review, both positive and negative, rank higher and convert more searchers into customers.",
  },
];

const rankingFactors = [
  {
    title: "Relevance",
    desc: "How well your profile matches what someone is searching for. This is where your categories, services, and description do the heavy lifting.",
  },
  {
    title: "Distance",
    desc: "How close your business is to the person searching. You can't change your address, but you can make sure Google knows exactly which areas you serve.",
  },
  {
    title: "Prominence",
    desc: "How well-known and trusted your business is online. Reviews, citations, website authority, and engagement all feed into this.",
  },
];

export default function GBPOptimisation() {
  return (
    <>
      <Breadcrumb items={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "GBP Optimisation" },
      ]} />
      <ServiceJsonLd
        name="Google Business Profile Optimisation"
        description="Complete Google Business Profile setup and optimisation for local businesses in Mandurah, Rockingham, and Perth. We configure every element of your GBP to rank in the Google Map Pack."
        url="https://csdigitalmarketing.au/services/gbp-optimisation"
      />

      {/* Hero */}
      <section className="relative text-white py-20 md:py-28 overflow-hidden">
        <Image
          src="/mandurah-aerial.jpg"
          alt="Aerial view of Mandurah waterways, Western Australia"
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
              Core Service
              <span className="w-8 h-px bg-gold/60" />
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-5 tracking-tight animate-fade-up-delay-1">
            Google Business Profile Optimisation
            <br />
            <span className="gold-gradient-text">
              for Local Businesses
            </span>
          </h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed animate-fade-up-delay-2">
            Your Google Business Profile is the single most important asset for
            appearing in local search results. We configure every element so
            Google shows your business to the right customers.
          </p>
        </div>
      </section>

      {/* What is GBP */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6">
          <span className="text-gold text-xs font-semibold uppercase tracking-widest">
            The Foundation
          </span>
          <h2 className="text-3xl font-bold text-navy mt-3 mb-6 tracking-tight">
            What Is Google Business Profile and Why Does It Matter?
          </h2>
          <div className="space-y-4 text-gray-500 leading-relaxed">
            <p>
              When someone searches for a service near them, like &ldquo;plumber
              Mandurah&rdquo; or &ldquo;electrician Rockingham&rdquo;, Google
              shows a map with three local businesses at the top of the results.
              This is called the Google Map Pack, and it gets more clicks than
              the regular website results below it.
            </p>
            <p>
              Your Google Business Profile (formerly Google My Business) is the
              listing that appears in that map pack. It shows your business
              name, reviews, phone number, hours, photos, and a link to your
              website. It is the first thing most local customers see when they
              search for what you do.
            </p>
            <p>
              The problem is that most businesses set up their profile once and
              never touch it again. They pick the wrong category, leave
              services blank, have three photos from 2019, and wonder why
              they never appear in the map results. Meanwhile, their
              competitors, the ones who show up every time, have profiles
              that are fully built out, regularly updated, and configured to
              match what Google looks for.
            </p>
            <p>
              We fix that. We take your Google Business Profile
              from incomplete to fully optimised, covering every element Google
              uses to decide which three businesses to show in the map pack.
            </p>
          </div>
        </div>
      </section>

      {/* How Google Ranks */}
      <section className="py-20 md:py-28 bg-[#f8f9fb]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-gold text-xs font-semibold uppercase tracking-widest">
              How It Works
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mt-3 mb-4 tracking-tight section-divider">
              How Google Decides Who Ranks in the Map Pack
            </h2>
            <p className="text-gray-500 mt-8 max-w-2xl mx-auto leading-relaxed">
              Google uses three core factors to rank local businesses. Our
              optimisation targets all three.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {rankingFactors.map((factor) => (
              <div key={factor.title} className="accent-card p-6">
                <h3 className="font-semibold text-navy mb-2 text-lg">
                  {factor.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {factor.desc}
                </p>
              </div>
            ))}
          </div>
          <p className="text-gray-500 text-sm leading-relaxed mt-8 text-center">
            The local ranking algorithm has not meaningfully changed in over a
            decade.
          </p>
        </div>
      </section>

      {/* What We Optimise */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-gold text-xs font-semibold uppercase tracking-widest">
              Every Detail
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mt-3 mb-4 tracking-tight section-divider">
              What We Optimise on Your Google Business Profile
            </h2>
            <p className="text-gray-500 mt-8 max-w-2xl mx-auto leading-relaxed">
              A complete GBP optimisation covers every configurable element on
              your profile. Here is exactly what we do.
            </p>
          </div>
          <div className="space-y-6">
            {profileElements.map((item) => (
              <div key={item.title} className="accent-card p-6">
                <h3 className="font-semibold text-navy mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Completeness Factor */}
      <section className="py-20 md:py-28 bg-[#f8f9fb]">
        <div className="max-w-4xl mx-auto px-6">
          <span className="text-gold text-xs font-semibold uppercase tracking-widest">
            Why It Works
          </span>
          <h2 className="text-3xl font-bold text-navy mt-3 mb-6 tracking-tight">
            Google Rewards Completeness
          </h2>
          <div className="space-y-4 text-gray-500 leading-relaxed">
            <p>
              Google&apos;s own documentation states that businesses with
              complete profiles are 2.7 times more likely to be considered
              reputable. The algorithm rewards profiles that give it more
              information to work with: more services, more photos, more
              reviews, more posts, more attributes.
            </p>
            <p>
              You just need to be more thorough than the business next door. When the business next to you has
              3 services listed and you have 30, when they have 5 photos and
              you have 50, when they post once a month and you post every week,
              Google has a clear signal about which business is more active,
              more complete, and more relevant.
            </p>
            <p>
              Our job is to make your profile the most complete, most accurate,
              and most active listing in your area. That is the foundation
              everything else builds on. Your{" "}
              <Link
                href="/services/on-page-seo"
                className="text-gold hover:underline font-medium"
              >
                website optimisation
              </Link>
              , your{" "}
              <Link
                href="/services/citation-building"
                className="text-gold hover:underline font-medium"
              >
                citation building
              </Link>
              , and your{" "}
              <Link
                href="/services/review-management"
                className="text-gold hover:underline font-medium"
              >
                review strategy
              </Link>{" "}
              all amplify a properly optimised profile.
            </p>
          </div>
        </div>
      </section>

      {/* How It Fits */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6">
          <span className="text-gold text-xs font-semibold uppercase tracking-widest">
            Part of the Programme
          </span>
          <h2 className="text-3xl font-bold text-navy mt-3 mb-6 tracking-tight">
            How GBP Optimisation Fits Our 12-Week Programme
          </h2>
          <div className="space-y-4 text-gray-500 leading-relaxed">
            <p>
              Google Business Profile optimisation is the first pillar of our{" "}
              <Link
                href="/process"
                className="text-gold hover:underline font-medium"
              >
                three-pillar ranking system
              </Link>
              . During weeks 2 through 4 of our{" "}
              <Link
                href="/services"
                className="text-gold hover:underline font-medium"
              >
                12-week programme
              </Link>
              , we work through every element listed above: categories,
              services, description, photos, attributes, posts, Q&A, and review
              setup.
            </p>
            <p>
              But GBP optimisation is not a one-time task. Throughout the
              remaining weeks, we continue posting, adding photos, responding
              to reviews, and monitoring your profile against competitors. The
              setup gets you ranking. The ongoing work stops you from slipping.
            </p>
            <p>
              We work with local businesses across{" "}
              <Link
                href="/areas/mandurah"
                className="text-gold hover:underline font-medium"
              >
                Mandurah
              </Link>
              ,{" "}
              <Link
                href="/areas/rockingham"
                className="text-gold hover:underline font-medium"
              >
                Rockingham
              </Link>
              , and{" "}
              <Link
                href="/areas/perth"
                className="text-gold hover:underline font-medium"
              >
                greater Perth
              </Link>
              , including tradies, health practitioners, professional services, hospitality,
              and more. If your customers search for you on Google, this is where
              we start.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-gradient py-20 md:py-24 relative">
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <span className="text-gold/70 text-xs font-semibold uppercase tracking-widest">
            Free Audit
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-4 tracking-tight">
            How Does Your Google Profile Stack Up?
          </h2>
          <p className="text-white/50 mb-10 text-lg max-w-lg mx-auto">
            We will audit your Google Business Profile for free and show you
            exactly what is missing, what your competitors are doing, and
            what needs fixing.
          </p>
          <Link
            href="/contact"
            className="btn-glow inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-navy font-semibold px-8 py-4 rounded-xl text-base transition-colors"
          >
            Get Your Free GBP Audit
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
