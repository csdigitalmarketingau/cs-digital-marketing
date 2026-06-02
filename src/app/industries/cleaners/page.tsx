import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumb } from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "GBP Optimisation for Cleaners | Mandurah, Rockingham & Perth",
  description:
    "Google Business Profile optimisation for cleaning businesses in Mandurah, Rockingham, and Perth. Stand out in a crowded market and rank in the Google Map Pack for cleaning searches.",
  alternates: {
    canonical: "https://csdigitalmarketing.au/industries/cleaners",
  },
};

const commonSearches = [
  "Cleaner near me",
  "House cleaning Mandurah",
  "End of lease cleaning",
  "Office cleaning Rockingham",
  "Carpet cleaning Baldivis",
  "Window cleaning Halls Head",
  "Bond cleaning Perth",
  "Deep cleaning Mandurah",
];

const gbpMistakes = [
  {
    title: "Too Broad a Category",
    desc: "Google has specific categories for house cleaning, office cleaning, carpet cleaning, and window cleaning. Picking \"Cleaning Service\" when your main work is house cleaning means you are competing against every type of cleaner instead of ranking for the specific searches your customers use.",
  },
  {
    title: "No Service Area Defined",
    desc: "Cleaning businesses are service-area businesses. You go to the customer. If you have not defined your service area in your Google profile, Google does not know which suburb searches to show you for. We see cleaners missing out on nearby searches because they never set their coverage area.",
  },
  {
    title: "Identical Profiles in a Crowded Market",
    desc: "Cleaning is one of the most competitive local service categories online. Dozens of businesses in every suburb, most with bare-bones Google profiles. A profile with 30 services, 50 photos, and 40 reviews looks completely different to Google than one with 3 services and 5 photos. The gap between average and optimised is where you win.",
  },
  {
    title: "No Before and After Photos",
    desc: "Cleaning is visual. Customers want to see results. Before and after photos of carpet cleans, oven cleans, end of lease transformations. These photos also get geotagged to your service area, which tells Google exactly where you work.",
  },
];

export default function CleanersPage() {
  return (
    <>
      <Breadcrumb items={[
        { label: "Home", href: "/" },
        { label: "Industries", href: "/industries" },
        { label: "Cleaners" },
      ]} />
      {/* Hero */}
      <section className="relative text-white py-20 md:py-28 overflow-hidden">
        <Image src="/mandurah-aerial.jpg" alt="Aerial view of Mandurah, Western Australia" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-br from-navy-dark/90 via-navy/80 to-navy-dark/85" />
        <div className="absolute inset-0 hero-gradient opacity-40" />
        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 text-gold/90 text-xs font-semibold uppercase tracking-widest mb-6">
              <span className="w-8 h-px bg-gold/60" />
              Cleaners
              <span className="w-8 h-px bg-gold/60" />
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-5 tracking-tight animate-fade-up-delay-1">
            Google Business Profile Optimisation
            <br />
            <span className="gold-gradient-text">for Cleaning Businesses</span>
          </h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed animate-fade-up-delay-2">
            Cleaning is one of the most competitive local markets on Google.
            Dozens of businesses per suburb, most with identical bare-bones
            profiles. We make yours the one Google shows first.
          </p>
        </div>
      </section>

      {/* Why */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6">
          <span className="text-gold text-xs font-semibold uppercase tracking-widest">Why It Matters</span>
          <h2 className="text-3xl font-bold text-navy mt-3 mb-6 tracking-tight">
            Why Google Rankings Matter for Cleaners
          </h2>
          <div className="space-y-4 text-gray-500 leading-relaxed">
            <p>
              The cleaning industry has low barriers to entry. Anyone with a
              ABN and a bucket can list themselves on Google. That means your
              map pack is crowded with competitors, many of whom undercut on
              price. The businesses that win are not always the cheapest. They
              are the ones that look most credible when a customer compares
              the top 3 results on the map.
            </p>
            <p>
              A cleaning business with 60 reviews, detailed service
              descriptions, and photos of actual work will get the call over a
              business with a logo and a phone number. Google knows this too.
              It ranks the more complete profile higher because it provides a
              better experience for the searcher.
            </p>
            <p>
              In{" "}
              <Link href="/areas/mandurah" className="text-gold hover:underline font-medium">Mandurah</Link>,{" "}
              <Link href="/areas/rockingham" className="text-gold hover:underline font-medium">Rockingham</Link>, and{" "}
              <Link href="/areas/perth" className="text-gold hover:underline font-medium">Perth</Link>,
              we see cleaning businesses ranking with incomplete profiles
              simply because nobody in their area has done the work. That is
              your opportunity.
            </p>
          </div>
        </div>
      </section>

      {/* Searches */}
      <section className="py-20 md:py-28 bg-[#f8f9fb]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-gold text-xs font-semibold uppercase tracking-widest">Search Terms</span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mt-3 mb-4 tracking-tight section-divider">
              What Your Customers Are Searching
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {commonSearches.map((term) => (
              <div key={term} className="bg-white border border-gray-100 rounded-xl px-4 py-3 text-sm text-navy font-medium text-center hover:border-gold/30 hover:shadow-sm transition-all">
                {term}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mistakes */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-gold text-xs font-semibold uppercase tracking-widest">Common Mistakes</span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mt-3 mb-4 tracking-tight section-divider">
              GBP Mistakes We See Cleaning Businesses Make
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {gbpMistakes.map((item) => (
              <div key={item.title} className="accent-card p-6">
                <h3 className="font-semibold text-navy mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 md:py-28 bg-[#f8f9fb]">
        <div className="max-w-4xl mx-auto px-6">
          <span className="text-gold text-xs font-semibold uppercase tracking-widest">What We Do</span>
          <h2 className="text-3xl font-bold text-navy mt-3 mb-6 tracking-tight">
            How We Get Cleaning Businesses Into the Map Pack
          </h2>
          <div className="space-y-4 text-gray-500 leading-relaxed">
            <p>
              Our{" "}
              <Link href="/services" className="text-gold hover:underline font-medium">12-week programme</Link>{" "}
              for cleaners starts with picking the right primary category. House
              cleaning, office cleaning, carpet cleaning, or window cleaning.
              Each targets different searches. Then we build out your full
              service list, write your description, and set your service area
              to cover the suburbs you actually work in.
            </p>
            <p>
              We help you build a photo library of your work. Before and after
              shots, team photos, equipment shots. Every image geotagged to the
              suburb where the job was done. We set up a{" "}
              <Link href="/services/review-management" className="text-gold hover:underline font-medium">review system</Link>{" "}
              that makes it easy for your customers to leave a review after each
              clean.
            </p>
            <p>
              Then{" "}
              <Link href="/services/citation-building" className="text-gold hover:underline font-medium">citations</Link>{" "}
              across 15+ directories and{" "}
              <Link href="/services/on-page-seo" className="text-gold hover:underline font-medium">on-page SEO</Link>{" "}
              on your website to back everything up.
            </p>
          </div>
        </div>
      </section>

      {/* Other Industries */}
      <section className="py-12 bg-white border-y border-gray-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-gray-500">
            We also work with{" "}
            <Link href="/industries/plumbers" className="text-gold hover:underline font-medium">plumbers</Link>,{" "}
            <Link href="/industries/electricians" className="text-gold hover:underline font-medium">electricians</Link>,{" "}
            <Link href="/industries/landscapers" className="text-gold hover:underline font-medium">landscapers</Link>, and{" "}
            <Link href="/industries/builders" className="text-gold hover:underline font-medium">builders</Link>.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-gradient py-20 md:py-24 relative">
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <span className="text-gold/70 text-xs font-semibold uppercase tracking-widest">Cleaners</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-4 tracking-tight">
            Where Does Your Cleaning Business Rank?
          </h2>
          <p className="text-white/50 mb-10 text-lg max-w-lg mx-auto">
            We will audit your Google profile and show you how you compare to
            the other cleaning businesses in your area.
          </p>
          <Link href="/contact" className="btn-glow inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-navy font-semibold px-8 py-4 rounded-xl text-base transition-colors">
            Get Your Free Cleaning SEO Audit
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
