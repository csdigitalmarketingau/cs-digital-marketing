import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "GBP Optimisation for Landscapers | Mandurah, Rockingham & Perth",
  description:
    "Google Business Profile optimisation for landscapers in Mandurah, Rockingham, and Perth. Rank in the Google Map Pack for landscaping searches and get more enquiries from Google.",
  alternates: {
    canonical: "https://csdigitalmarketing.au/industries/landscapers",
  },
};

const commonSearches = [
  "Landscaper near me",
  "Landscaping [suburb]",
  "Garden design [suburb]",
  "Reticulation installation",
  "Turf laying [suburb]",
  "Landscaper Mandurah",
  "Landscaper Rockingham",
  "Paving [suburb]",
];

const gbpMistakes = [
  {
    title: "Not Using Google Posts",
    desc: "Landscaping is visual. A weekly Google Post showing a completed garden, a new patio, or a turf installation does two things: it tells Google your business is active, and it shows potential customers what you can do. Most landscapers post nothing. A business that posts weekly will outrank one that has not posted in six months.",
  },
  {
    title: "Missing Service Breakdown",
    desc: "\"Landscaping\" covers everything from garden maintenance to full outdoor renovations. Google needs you to spell it out. Turf laying, reticulation, paving, garden design, retaining walls, tree removal, planting, mulching. Each service listed is a search term you can rank for.",
  },
  {
    title: "Photos Without Geotags",
    desc: "Landscapers take more job photos than almost any other trade. But uploading them without geotagging wastes their ranking potential. A photo of a finished garden tagged to Baldivis tells Google you work in Baldivis. An untagged photo tells Google nothing about your location.",
  },
  {
    title: "No Description of Service Area",
    desc: "Landscaping is seasonal and location-specific. Customers searching \"landscaper Mandurah\" want someone who works in Mandurah, not someone 40km away. Your business description and service area settings need to clearly state which suburbs and regions you cover.",
  },
];

export default function LandscapersPage() {
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
              Landscapers
              <span className="w-8 h-px bg-gold/60" />
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-5 tracking-tight animate-fade-up-delay-1">
            Google Business Profile Optimisation
            <br />
            <span className="gold-gradient-text">for Landscapers</span>
          </h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed animate-fade-up-delay-2">
            Landscaping customers search with intent. They want to see your
            work, read your reviews, and know you service their area. Your
            Google profile is where all of that lives.
          </p>
        </div>
      </section>

      {/* Why */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6">
          <span className="text-gold text-xs font-semibold uppercase tracking-widest">Why It Matters</span>
          <h2 className="text-3xl font-bold text-navy mt-3 mb-6 tracking-tight">
            Why Google Rankings Matter for Landscapers
          </h2>
          <div className="space-y-4 text-gray-500 leading-relaxed">
            <p>
              Landscaping jobs are high-value. A garden renovation, a new
              patio, a full backyard makeover. These are $5,000 to $50,000+
              projects. The customer does their research. They compare
              businesses. And the first place they compare is the Google Map
              Pack.
            </p>
            <p>
              Landscapers have a natural advantage on Google: the work is
              visual. A profile full of completed project photos is more
              convincing than any sales pitch. But most landscapers upload a
              few photos when they first set up their profile and never touch
              it again. The ones who keep it updated rank higher and close
              more jobs.
            </p>
            <p>
              In the{" "}
              <Link href="/areas/mandurah" className="text-gold hover:underline font-medium">Mandurah</Link> and{" "}
              <Link href="/areas/rockingham" className="text-gold hover:underline font-medium">Rockingham</Link>{" "}
              region, new housing developments in Baldivis, Lakelands, and
              Madora Bay mean a constant flow of people searching for
              landscapers. In{" "}
              <Link href="/areas/perth" className="text-gold hover:underline font-medium">Perth</Link>,
              established suburbs with ageing gardens create steady demand for
              renovation and maintenance.
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
              GBP Mistakes We See Landscapers Make
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
            How We Get Landscapers Into the Map Pack
          </h2>
          <div className="space-y-4 text-gray-500 leading-relaxed">
            <p>
              Our{" "}
              <Link href="/services" className="text-gold hover:underline font-medium">12-week programme</Link>{" "}
              for landscapers leans heavily on photos and services. We help
              you build a library of project photos, geotagged to each job
              location. We list every service you offer individually, with
              descriptions using the search terms your customers actually
              type.
            </p>
            <p>
              We set up weekly Google Posts showcasing your recent work. Each
              post includes a geotagged image and links back to your profile.
              This keeps your listing active and gives Google fresh content to
              index every week.
            </p>
            <p>
              The{" "}
              <Link href="/services/on-page-seo" className="text-gold hover:underline font-medium">website SEO</Link>{" "}
              and{" "}
              <Link href="/services/citation-building" className="text-gold hover:underline font-medium">citation building</Link>{" "}
              phases round out the programme. Title tags targeting
              "landscaper [suburb]" for every area you cover, consistent
              directory listings, and schema markup connecting your website
              to your Google profile.
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
            <Link href="/industries/builders" className="text-gold hover:underline font-medium">builders</Link>.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-gradient py-20 md:py-24 relative">
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <span className="text-gold/70 text-xs font-semibold uppercase tracking-widest">Landscapers</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-4 tracking-tight">
            Where Does Your Landscaping Business Rank?
          </h2>
          <p className="text-white/50 mb-10 text-lg max-w-lg mx-auto">
            We will audit your Google profile and show you where you rank for
            landscaping searches in your service area.
          </p>
          <Link href="/contact" className="btn-glow inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-navy font-semibold px-8 py-4 rounded-xl text-base transition-colors">
            Get Your Free Landscaping SEO Audit
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
