import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "GBP Optimisation for Electricians | Mandurah, Rockingham & Perth",
  description:
    "Google Business Profile optimisation for electricians in Mandurah, Rockingham, and Perth. Rank in the Google Map Pack for electrical service searches in your area.",
  alternates: {
    canonical: "https://csdigitalmarketing.au/industries/electricians",
  },
};

const commonSearches = [
  "Electrician near me",
  "Emergency electrician [suburb]",
  "Electrical repairs [suburb]",
  "Switchboard upgrade",
  "Ceiling fan installation",
  "Electrician Mandurah",
  "Electrician Rockingham",
  "Electrician Baldivis",
];

const gbpMistakes = [
  {
    title: "Category Set to Contractor",
    desc: "\"Contractor\" and \"Electrician\" are different categories in Google. If your profile says Contractor, you will not appear when someone searches \"electrician near me.\" The category needs to match the exact words your customers use.",
  },
  {
    title: "Services Section Left Empty",
    desc: "Electrical work covers dozens of individual services: switchboard upgrades, safety inspections, rewiring, lighting installation, smoke alarm testing, ceiling fan installation. Each service you list is a keyword Google can match you to. Most electricians list two or three.",
  },
  {
    title: "Reviews Mentioning Specific Work",
    desc: "Generic reviews like \"great service\" do less for your rankings than reviews that mention specific work. \"Fixed our switchboard in Halls Head, very professional\" tells Google what you do and where. We set up a review process that encourages customers to mention the job and location.",
  },
  {
    title: "No Posts or Updates",
    desc: "Electricians rarely post on their Google profile. That is a missed opportunity. A weekly post showing a completed job, a safety tip, or a seasonal reminder (smoke alarm checks before winter) signals to Google that your business is active. Active profiles rank higher.",
  },
];

export default function ElectriciansPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative text-white py-20 md:py-28 overflow-hidden">
        <Image
          src="/mandurah-aerial.jpg"
          alt="Aerial view of Mandurah, Western Australia"
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
              Electricians
              <span className="w-8 h-px bg-gold/60" />
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-5 tracking-tight animate-fade-up-delay-1">
            Google Business Profile Optimisation
            <br />
            <span className="gold-gradient-text">for Electricians</span>
          </h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed animate-fade-up-delay-2">
            Electrical work is trust-dependent. Customers pick the electrician
            with the best reviews and the most complete profile. We make sure
            yours stands out.
          </p>
        </div>
      </section>

      {/* Why */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6">
          <span className="text-gold text-xs font-semibold uppercase tracking-widest">
            Why It Matters
          </span>
          <h2 className="text-3xl font-bold text-navy mt-3 mb-6 tracking-tight">
            Why Google Rankings Matter for Electricians
          </h2>
          <div className="space-y-4 text-gray-500 leading-relaxed">
            <p>
              People hiring an electrician care about two things: can they trust
              you, and are you available. Both of those questions get answered
              by your Google Business Profile before they ever visit your
              website.
            </p>
            <p>
              Your star rating, your review count, your photos, your listed
              services. A customer comparing three electricians in the map pack
              will call the one that looks most established. That decision
              takes about 10 seconds.
            </p>
            <p>
              Electrical businesses in{" "}
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
                Perth
              </Link>{" "}
              face increasing competition from larger franchises and aggregator
              platforms. An optimised Google profile is how independent
              electricians compete without paying for ads.
            </p>
          </div>
        </div>
      </section>

      {/* Searches */}
      <section className="py-20 md:py-28 bg-[#f8f9fb]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-gold text-xs font-semibold uppercase tracking-widest">
              Search Terms
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mt-3 mb-4 tracking-tight section-divider">
              What Your Customers Are Searching
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {commonSearches.map((term) => (
              <div
                key={term}
                className="bg-white border border-gray-100 rounded-xl px-4 py-3 text-sm text-navy font-medium text-center hover:border-gold/30 hover:shadow-sm transition-all"
              >
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
            <span className="text-gold text-xs font-semibold uppercase tracking-widest">
              Common Mistakes
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mt-3 mb-4 tracking-tight section-divider">
              GBP Mistakes We See Electricians Make
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {gbpMistakes.map((item) => (
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

      {/* What We Do */}
      <section className="py-20 md:py-28 bg-[#f8f9fb]">
        <div className="max-w-4xl mx-auto px-6">
          <span className="text-gold text-xs font-semibold uppercase tracking-widest">
            What We Do
          </span>
          <h2 className="text-3xl font-bold text-navy mt-3 mb-6 tracking-tight">
            How We Get Electricians Into the Map Pack
          </h2>
          <div className="space-y-4 text-gray-500 leading-relaxed">
            <p>
              Our{" "}
              <Link href="/services" className="text-gold hover:underline font-medium">
                12-week programme
              </Link>{" "}
              for electricians starts with an audit of your current rankings
              and your competitors&apos; profiles. Then we work through{" "}
              <Link href="/services/gbp-optimisation" className="text-gold hover:underline font-medium">
                GBP optimisation
              </Link>{" "}
              (category, 25+ services, photos, posts),{" "}
              <Link href="/services/on-page-seo" className="text-gold hover:underline font-medium">
                on-page SEO
              </Link>{" "}
              (title tags targeting "electrician [suburb]" for every area you
              cover), and{" "}
              <Link href="/services/citation-building" className="text-gold hover:underline font-medium">
                citation building
              </Link>{" "}
              across 15+ Australian directories.
            </p>
            <p>
              For electricians specifically, we focus on building out your
              service list to cover every type of electrical work you do. We
              set up a review system that encourages customers to mention the
              specific job and suburb. And we geotag your job photos so Google
              can see exactly where you are working.
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
            <Link href="/industries/cleaners" className="text-gold hover:underline font-medium">cleaners</Link>,{" "}
            <Link href="/industries/landscapers" className="text-gold hover:underline font-medium">landscapers</Link>, and{" "}
            <Link href="/industries/builders" className="text-gold hover:underline font-medium">builders</Link>.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-gradient py-20 md:py-24 relative">
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <span className="text-gold/70 text-xs font-semibold uppercase tracking-widest">
            Electricians
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-4 tracking-tight">
            Where Does Your Electrical Business Rank?
          </h2>
          <p className="text-white/50 mb-10 text-lg max-w-lg mx-auto">
            We will audit your Google profile and show you where you rank for
            electrical searches in your service area.
          </p>
          <Link
            href="/contact"
            className="btn-glow inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-navy font-semibold px-8 py-4 rounded-xl text-base transition-colors"
          >
            Get Your Free Electrician SEO Audit
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
