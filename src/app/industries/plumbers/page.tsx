import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ServiceJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "GBP Optimisation for Plumbers | Mandurah, Rockingham & Perth",
  description:
    "Google Business Profile optimisation for plumbers in Mandurah, Rockingham, and Perth. Get into the Google Map Pack for searches like plumber near me, blocked drains, and hot water repairs.",
  alternates: {
    canonical: "https://csdigitalmarketing.au/industries/plumbers",
  },
};

const commonSearches = [
  "Plumber near me",
  "Emergency plumber Mandurah",
  "Blocked drains Rockingham",
  "Hot water system repair",
  "Gas plumber Baldivis",
  "Plumber Halls Head",
  "Plumber Rockingham",
  "Plumber Falcon",
];

const gbpMistakes = [
  {
    title: "Wrong Primary Category",
    desc: "Many plumbers set their category to \"Contractor\" or \"Home Service\" instead of \"Plumber.\" Google uses your primary category as the strongest signal for which searches to show you for. If your category says contractor, you will not appear for \"plumber near me\" searches.",
  },
  {
    title: "Generic Service List",
    desc: "Listing \"plumbing services\" as your only service tells Google nothing. The plumbers ranking at the top have 20 to 30 individual services listed: blocked drains, hot water installation, gas fitting, leak detection, bathroom renovations, tap repairs. Each one is a keyword Google can match you against.",
  },
  {
    title: "No Photos of Actual Work",
    desc: "Stock photos or an empty photo section hurt you. Google wants to see photos of your van, your team, your completed jobs. Customers want to see them too. The plumbers with 50+ photos of real work get more calls than the ones with a logo and nothing else.",
  },
  {
    title: "No Review Strategy",
    desc: "Plumbing customers are happy to leave reviews when you ask. Most plumbers never ask. The result is 3 reviews from 2021 while the competitor down the road has 87 reviews and a 4.9 rating. That competitor gets the call every time.",
  },
];

export default function PlumbersPage() {
  return (
    <>
      <Breadcrumb items={[
        { label: "Home", href: "/" },
        { label: "Industries", href: "/industries" },
        { label: "Plumbers" },
      ]} />
      <ServiceJsonLd
        name="GBP Optimisation for Plumbers"
        description="Google Business Profile optimisation for plumbers in Mandurah, Rockingham, and Perth. Rank in the Google Map Pack for plumbing searches."
        url="https://csdigitalmarketing.au/industries/plumbers"
      />
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
              Plumbers
              <span className="w-8 h-px bg-gold/60" />
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-5 tracking-tight animate-fade-up-delay-1">
            Google Business Profile Optimisation
            <br />
            <span className="gold-gradient-text">for Plumbers</span>
          </h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed animate-fade-up-delay-2">
            Plumbing is one of the most searched local services on Google. When
            someone has a burst pipe at 10pm, they search, they call the first
            plumber they see. We make sure that is you.
          </p>
        </div>
      </section>

      {/* Why Plumbers Need GBP */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6">
          <span className="text-gold text-xs font-semibold uppercase tracking-widest">
            Why It Matters
          </span>
          <h2 className="text-3xl font-bold text-navy mt-3 mb-6 tracking-tight">
            Why Google Rankings Matter for Plumbers
          </h2>
          <div className="space-y-4 text-gray-500 leading-relaxed">
            <p>
              Plumbing searches have some of the highest urgency of any local
              service. A blocked drain, a leaking pipe, a broken hot water
              system. People do not browse. They search, they look at the map
              results, and they call the first business that looks trustworthy.
            </p>
            <p>
              The three plumbers in the Google Map Pack get the majority of
              those calls. Everyone below the map gets a fraction. If you are
              running a plumbing business in{" "}
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
              , or{" "}
              <Link
                href="/areas/perth"
                className="text-gold hover:underline font-medium"
              >
                Perth
              </Link>
              , the difference between position 3 and position 4 in the map
              pack is the difference between a phone that rings and one that
              does not.
            </p>
            <p>
              Most plumbers rely on word of mouth and repeat customers. That
              works until it does not. When you need new customers, Google is
              where they are looking. And they are looking right now, for the
              exact services you offer, in the exact suburbs you work in.
            </p>
          </div>
        </div>
      </section>

      {/* What Plumbers Search For */}
      <section className="py-20 md:py-28 bg-[#f8f9fb]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-gold text-xs font-semibold uppercase tracking-widest">
              Search Terms
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mt-3 mb-4 tracking-tight section-divider">
              What Your Customers Are Searching
            </h2>
            <p className="text-gray-500 mt-8 max-w-2xl mx-auto leading-relaxed">
              These are the searches we optimise your profile for. Each one
              represents a customer ready to book a plumber.
            </p>
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

      {/* Common GBP Mistakes */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-gold text-xs font-semibold uppercase tracking-widest">
              Common Mistakes
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mt-3 mb-4 tracking-tight section-divider">
              GBP Mistakes We See Plumbers Make
            </h2>
            <p className="text-gray-500 mt-8 max-w-2xl mx-auto leading-relaxed">
              We audit plumbing businesses every week. These are the issues
              that come up again and again.
            </p>
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
            How We Get Plumbers Into the Map Pack
          </h2>
          <div className="space-y-4 text-gray-500 leading-relaxed">
            <p>
              Our{" "}
              <Link
                href="/services"
                className="text-gold hover:underline font-medium"
              >
                12-week programme
              </Link>{" "}
              covers everything. We start with an audit of your current Google
              profile, your rankings across your service area, and what your
              top competitors are doing. Then we work through the three
              ranking pillars.
            </p>
            <p>
              For plumbers, the{" "}
              <Link
                href="/services/gbp-optimisation"
                className="text-gold hover:underline font-medium"
              >
                GBP optimisation
              </Link>{" "}
              phase is where the biggest gains happen. We set your primary
              category to Plumber (not Contractor), build out 25 to 30
              individual services with descriptions, write a keyword-rich
              business description, and set up a photo and posting schedule.
            </p>
            <p>
              Then we move to{" "}
              <Link
                href="/services/on-page-seo"
                className="text-gold hover:underline font-medium"
              >
                on-page SEO
              </Link>{" "}
              on your website. Title tags targeting "plumber Mandurah," "plumber Baldivis," and so on for
              every area you service. Schema markup. A map embed. Consistent
              business details across every page.
            </p>
            <p>
              Finally,{" "}
              <Link
                href="/services/citation-building"
                className="text-gold hover:underline font-medium"
              >
                citation building
              </Link>{" "}
              across 15+ Australian directories with your exact business name,
              address, and phone number. Consistent across all of them. This
              is what tells Google your business is established and legitimate.
            </p>
          </div>
        </div>
      </section>

      {/* Other Industries */}
      <section className="py-12 bg-white border-y border-gray-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-gray-500">
            We also work with{" "}
            <Link href="/industries/electricians" className="text-gold hover:underline font-medium">electricians</Link>,{" "}
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
            Plumbers
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-4 tracking-tight">
            Where Does Your Plumbing Business Rank?
          </h2>
          <p className="text-white/50 mb-10 text-lg max-w-lg mx-auto">
            We will audit your Google Business Profile and show you exactly
            where you rank for plumbing searches in your area.
          </p>
          <Link
            href="/contact"
            className="btn-glow inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-navy font-semibold px-8 py-4 rounded-xl text-base transition-colors"
          >
            Get Your Free Plumbing SEO Audit
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
