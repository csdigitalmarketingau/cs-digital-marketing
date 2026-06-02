import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "GBP Optimisation for Builders | Mandurah, Rockingham & Perth",
  description:
    "Google Business Profile optimisation for builders and construction businesses in Mandurah, Rockingham, and Perth. Rank in the Google Map Pack for high-value building searches.",
  alternates: {
    canonical: "https://csdigitalmarketing.au/industries/builders",
  },
};

const commonSearches = [
  "Builder near me",
  "Home builder [suburb]",
  "Renovation builder [suburb]",
  "Granny flat builder",
  "Extension builder Perth",
  "Builder Mandurah",
  "Builder Rockingham",
  "Custom home builder",
];

const gbpMistakes = [
  {
    title: "Category Too Vague",
    desc: "\"Building Consultant\" and \"General Contractor\" are different categories from \"Home Builder\" and \"Building Firm.\" The category needs to match how your customers search. A home renovation builder should not be listed as a general contractor. Google treats them as different businesses.",
  },
  {
    title: "No Project Photos",
    desc: "Construction is a high-commitment purchase. Nobody hires a builder without seeing their work. Your Google profile photos should show projects in progress and completed builds, not just your logo. Framing stages, fit-outs, finished kitchens, exterior shots. Every photo geotagged to the job site.",
  },
  {
    title: "Reviews Without Detail",
    desc: "A review that says \"built our extension in Safety Bay, excellent communication throughout the 4-month build\" is worth ten reviews that say \"good builder.\" The first one tells Google what you do, where you do it, and how long projects take. We help you set up a review process that encourages this kind of detail.",
  },
  {
    title: "Incomplete Service List",
    desc: "Builders offer many specific services: new home builds, renovations, extensions, granny flats, knockdown rebuilds, bathroom renovations, kitchen renovations, outdoor living areas. Most builders list \"building services\" and nothing else. Each missing service is a search you are invisible for.",
  },
];

export default function BuildersPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative text-white py-20 md:py-28 overflow-hidden">
        <Image src="/mandurah-aerial.jpg" alt="Aerial view of Mandurah, Western Australia" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-br from-navy-dark/90 via-navy/80 to-navy-dark/85" />
        <div className="absolute inset-0 hero-gradient opacity-40" />
        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 text-gold/90 text-xs font-semibold uppercase tracking-widest mb-6">
              <span className="w-8 h-px bg-gold/60" />
              Builders
              <span className="w-8 h-px bg-gold/60" />
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-5 tracking-tight animate-fade-up-delay-1">
            Google Business Profile Optimisation
            <br />
            <span className="gold-gradient-text">for Builders</span>
          </h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed animate-fade-up-delay-2">
            Construction searches carry serious commercial intent. People
            searching for builders are ready to spend. Ranking in the map
            pack puts you in front of them at the right moment.
          </p>
        </div>
      </section>

      {/* Why */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6">
          <span className="text-gold text-xs font-semibold uppercase tracking-widest">Why It Matters</span>
          <h2 className="text-3xl font-bold text-navy mt-3 mb-6 tracking-tight">
            Why Google Rankings Matter for Builders
          </h2>
          <div className="space-y-4 text-gray-500 leading-relaxed">
            <p>
              Building and construction is a high-ticket industry. A single
              lead from Google can be worth $50,000 to $500,000+ in project
              revenue. Yet most builders treat their Google Business Profile
              as an afterthought. They set it up once during registration and
              never update it.
            </p>
            <p>
              Meanwhile, the builders ranking in the map pack are getting a
              steady stream of enquiries from homeowners searching "builder
              near me," "renovation builder [suburb]," and "home extension
              [area]." These searches represent customers who have already
              decided to build. They are comparing builders right now.
            </p>
            <p>
              In the{" "}
              <Link href="/areas/mandurah" className="text-gold hover:underline font-medium">Mandurah</Link> and{" "}
              <Link href="/areas/rockingham" className="text-gold hover:underline font-medium">Rockingham</Link>{" "}
              region, new developments and growing families drive renovation
              and extension demand. In{" "}
              <Link href="/areas/perth" className="text-gold hover:underline font-medium">Perth</Link>,
              knockdown rebuilds and custom homes are a competitive market
              where online presence matters more than ever.
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
              GBP Mistakes We See Builders Make
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
            How We Get Builders Into the Map Pack
          </h2>
          <div className="space-y-4 text-gray-500 leading-relaxed">
            <p>
              Our{" "}
              <Link href="/services" className="text-gold hover:underline font-medium">12-week programme</Link>{" "}
              for builders focuses on the elements that matter most for
              high-value construction searches. We pick the right category
              (Home Builder, not General Contractor), build out a full
              service list covering every type of build you do, and set your
              service area to the regions where you want projects.
            </p>
            <p>
              We help you set up a photo schedule. Construction projects
              generate photos at every stage. Slab pour, framing, lock-up,
              fit-out, handover. Each photo gets geotagged and uploaded to
              your profile. By the end of a few projects, you will have more
              photos than every competitor in your area.
            </p>
            <p>
              The{" "}
              <Link href="/services/review-management" className="text-gold hover:underline font-medium">review system</Link>{" "}
              we set up prompts customers at project completion, when
              satisfaction is highest. Building clients are loyal. When you
              ask them at the right time, they leave detailed reviews
              mentioning the type of project and location. That is exactly
              what Google wants to see.
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
            <Link href="/industries/cleaners" className="text-gold hover:underline font-medium">cleaners</Link>, and{" "}
            <Link href="/industries/landscapers" className="text-gold hover:underline font-medium">landscapers</Link>.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-gradient py-20 md:py-24 relative">
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <span className="text-gold/70 text-xs font-semibold uppercase tracking-widest">Builders</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-4 tracking-tight">
            Where Does Your Building Business Rank?
          </h2>
          <p className="text-white/50 mb-10 text-lg max-w-lg mx-auto">
            We will audit your Google profile and show you where you rank for
            building and construction searches in your service area.
          </p>
          <Link href="/contact" className="btn-glow inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-navy font-semibold px-8 py-4 rounded-xl text-base transition-colors">
            Get Your Free Builder SEO Audit
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
