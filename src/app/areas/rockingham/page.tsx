import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FAQJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Google Business Profile Optimisation Rockingham | Local SEO Rockingham",
  description:
    "GBP optimisation for Rockingham businesses. We help trades, services, and local businesses rank in the Google Map Pack across Rockingham, Baldivis, Safety Bay, Port Kennedy, and surrounding suburbs.",
  alternates: {
    canonical: "https://csdigitalmarketing.au/areas/rockingham",
  },
};

const suburbs = [
  "Baldivis",
  "Warnbro",
  "Safety Bay",
  "Shoalwater",
  "Port Kennedy",
  "Secret Harbour",
  "Singleton",
  "Golden Bay",
  "Cooloongup",
  "Hillman",
  "East Rockingham",
  "Wellard",
];

const faqs = [
  {
    question: "Do you cover Baldivis and the newer southern suburbs?",
    answer:
      "Yes. Baldivis, Secret Harbour, Golden Bay, and Port Kennedy are all part of our Rockingham service area. These newer suburbs have high search volumes and relatively few well-optimised businesses competing in the map pack, which often makes them more achievable targets than the older, more established Rockingham suburbs.",
  },
  {
    question: "How competitive is the Rockingham local search market?",
    answer:
      "It varies by industry. Trades like plumbing and electrical are competitive because of the number of businesses operating in the area. Newer niches (certain health services, specialist trades) are less competitive. We audit your specific category before we start so you know what the competition looks like.",
  },
  {
    question: "Can Rockingham businesses rank for Perth searches too?",
    answer:
      "Not for central Perth searches. Google uses the searcher's location to show relevant nearby businesses. A Rockingham business will rank for searches made in Rockingham and the surrounding suburbs. To also capture Perth searches, you would need a separate Perth address or service area, which we can discuss.",
  },
  {
    question: "How long does it take to see results in Rockingham?",
    answer:
      "Most businesses see map pack ranking improvements within 4 to 6 weeks of the GBP optimisation phase being completed. Baldivis and the newer southern suburbs tend to move faster because there are fewer fully optimised competitors.",
  },
  {
    question: "What industries do you work with in Rockingham?",
    answer:
      "Any local business that needs customers from Google. Tradies, cleaners, landscapers, health and beauty businesses, cafes and restaurants, professional services, and more. If people in Rockingham and Baldivis search for what you do, we can help you show up for those searches.",
  },
];

export default function RockinghamArea() {
  return (
    <>
      <FAQJsonLd faqs={faqs} />

      {/* Hero */}
      <section className="relative text-white py-20 md:py-28 overflow-hidden">
        <Image
          src="/mandurah-aerial.jpg"
          alt="Aerial view of the Rockingham coastline, Western Australia"
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
              Service Area
              <span className="w-8 h-px bg-gold/60" />
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-5 tracking-tight animate-fade-up-delay-1">
            GBP Optimisation in{" "}
            <span className="gold-gradient-text">Rockingham</span>
          </h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed animate-fade-up-delay-2">
            Helping Rockingham and Baldivis businesses rank in the Google Map
            Pack. We are nearby and we know the area.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6">
          <span className="text-gold text-xs font-semibold uppercase tracking-widest">
            Local Expertise
          </span>
          <h2 className="text-3xl font-bold text-navy mt-3 mb-6 tracking-tight">
            Local SEO for Rockingham Businesses
          </h2>
          <div className="space-y-4 text-gray-500 leading-relaxed">
            <p>
              Rockingham has shifted from a quiet coastal suburb into one of
              the most significant growth corridors in Western Australia. Baldivis
              has been one of the fastest-growing suburbs in the entire country
              for years running. Secret Harbour, Port Kennedy, and Golden Bay
              have added thousands of households to the area&apos;s population.
              That growth brings more customers searching Google for local
              services, and more businesses competing for those searches.
            </p>
            <p>
              The businesses winning the Rockingham map pack are the ones with
              complete, active Google Business Profiles. Most of their
              competitors have set up a profile once and never touched it. If
              you are in a trade, a service, or hospitality in Rockingham,
              the gap between an optimised profile and an unoptimised one is
              often the difference between a busy phone and a quiet one.
            </p>
            <p>
              We work with Rockingham businesses through the same{" "}
              <Link href="/process" className="text-gold hover:underline font-medium">
                three-pillar programme
              </Link>{" "}
              we use for every client:{" "}
              <Link href="/services/gbp-optimisation" className="text-gold hover:underline font-medium">
                GBP optimisation
              </Link>
              ,{" "}
              <Link href="/services/on-page-seo" className="text-gold hover:underline font-medium">
                on-page website SEO
              </Link>
              , and{" "}
              <Link href="/services/citation-building" className="text-gold hover:underline font-medium">
                citation building
              </Link>
              . For Rockingham, we pay particular attention to the Baldivis
              and southern growth suburbs, where newer businesses often find
              it easier to rank quickly because the competition has not caught
              up yet.
            </p>
          </div>

          {/* Rockingham market context */}
          <div className="mt-16">
            <span className="text-gold text-xs font-semibold uppercase tracking-widest">
              The Rockingham Market
            </span>
            <h2 className="text-3xl font-bold text-navy mt-3 mb-6 tracking-tight">
              What Makes Rockingham Different
            </h2>
            <div className="space-y-4 text-gray-500 leading-relaxed">
              <p>
                The Rockingham local search market has a split character. The
                older Rockingham suburbs (Cooloongup, Hillman, East Rockingham)
                have more established businesses with longer track records and
                more reviews. The newer southern suburbs (Baldivis, Secret
                Harbour, Golden Bay) have a younger demographic searching for
                new local services, with far less competition in the map pack.
              </p>
              <p>
                Baldivis deserves special mention. It has one of the youngest
                median ages of any suburb in Western Australia and one of the
                highest rates of new home construction. Young families moving
                into new homes need every local service: tradies to finish
                their house, landscapers for their yard, cleaners, dentists,
                childcare, and more. Most of those searches happen on Google,
                and most of the map pack positions are there for the taking
                because the local business landscape is still catching up with
                the population growth.
              </p>
              <p>
                The Rockingham coast (Shoalwater, Safety Bay, Warnbro) attracts
                visitors and locals looking for hospitality and recreation.
                Cafes, restaurants, and experience businesses serving this area
                benefit from appearing in the map pack for searches like
                "cafe Rockingham" and "restaurants Safety Bay."
              </p>
            </div>
          </div>

          {/* Suburbs */}
          <div className="mt-16">
            <span className="text-gold text-xs font-semibold uppercase tracking-widest">
              Coverage
            </span>
            <h2 className="text-3xl font-bold text-navy mt-3 mb-6 tracking-tight">
              Suburbs We Service in the Rockingham Area
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {suburbs.map((suburb) => (
                <div
                  key={suburb}
                  className="bg-[#f8f9fb] border border-gray-100 rounded-xl px-4 py-3 text-sm text-navy font-medium text-center hover:border-gold/30 hover:shadow-sm transition-all"
                >
                  {suburb}
                </div>
              ))}
            </div>
            <p className="text-gray-400 text-sm mt-4">
              Also covering Kwinana and the corridor between Rockingham and
              Mandurah. Get in touch if you are unsure whether we cover your
              area.
            </p>
          </div>

          {/* What we do */}
          <div className="mt-16">
            <span className="text-gold text-xs font-semibold uppercase tracking-widest">
              What We Do
            </span>
            <h2 className="text-3xl font-bold text-navy mt-3 mb-6 tracking-tight">
              What We Do for Rockingham Businesses
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                {
                  title: "GBP Audit & Optimisation",
                  desc: "Full profile audit with competitor benchmarking against other Rockingham and Baldivis businesses in your category. We fix categories, build out services, update photos, set your service area, and set up a posting schedule.",
                },
                {
                  title: "Local Citation Building",
                  desc: "Consistent listings across 15+ Australian directories with your exact Rockingham address and contact details. We fix any existing inconsistencies and build new citations that carry authority for WA local businesses.",
                },
                {
                  title: "On-Page Website SEO",
                  desc: "Title tags and content targeting Rockingham, Baldivis, and the surrounding suburbs. Schema markup, Google Maps embed, and consistent business details across your site.",
                },
                {
                  title: "Review Strategy",
                  desc: "A direct review link and response templates so you can build Google reviews consistently. For Rockingham businesses in new-growth suburbs, building a review base quickly is one of the fastest ways to establish credibility.",
                },
              ].map((item) => (
                <div key={item.title} className="accent-card p-6">
                  <h3 className="font-semibold text-navy mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Industries */}
          <div className="mt-16">
            <span className="text-gold text-xs font-semibold uppercase tracking-widest">
              Who We Help
            </span>
            <h2 className="text-3xl font-bold text-navy mt-3 mb-6 tracking-tight">
              Rockingham Industries We Work With
            </h2>
            <div className="space-y-4 text-gray-500 leading-relaxed">
              <p>
                The Rockingham and Baldivis growth corridor has strong demand
                across a wide range of local services. We work with:
              </p>
              <ul className="space-y-2 ml-4">
                {[
                  "Trades: plumbers, electricians, builders, tilers, painters",
                  "Outdoor and new build services: landscapers, bore specialists, pool builders, fencing",
                  "Health and allied health: physios, chiros, dentists, osteopaths",
                  "Hospitality: cafes, restaurants, takeaway",
                  "Beauty and wellness: hair salons, beauty therapists, barbers",
                  "Professional services: accountants, mortgage brokers, real estate",
                  "Cleaning and maintenance businesses",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-gold shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Map embed */}
      <section className="py-8 bg-[#f8f9fb]">
        <div className="max-w-4xl mx-auto px-6">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53834.41!2d115.7383!3d-32.2780!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2a32b76e3e5b1e5b%3A0x504f0b535df55d0!2sRockingham%20WA!5e0!3m2!1sen!2sau!4v1"
            width="100%"
            height="300"
            style={{ border: 0, borderRadius: "12px" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Rockingham, Western Australia"
          />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-gold text-xs font-semibold uppercase tracking-widest">
              Questions
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mt-3 mb-4 tracking-tight section-divider">
              Rockingham Local SEO Questions
            </h2>
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
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
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

      {/* Other areas */}
      <section className="py-12 bg-[#f8f9fb] border-y border-gray-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-gray-500">
            We also service businesses in{" "}
            <Link href="/areas/mandurah" className="text-gold hover:underline font-medium">
              Mandurah
            </Link>{" "}
            and{" "}
            <Link href="/areas/perth" className="text-gold hover:underline font-medium">
              greater Perth
            </Link>
            .
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-gradient py-20 md:py-24 relative">
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <span className="text-gold/70 text-xs font-semibold uppercase tracking-widest">
            Free Audit
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-4 tracking-tight">
            Where Does Your Rockingham Business Rank?
          </h2>
          <p className="text-white/50 mb-10 text-lg max-w-lg mx-auto">
            We will audit your Google Business Profile and show you exactly
            where you stand against your Rockingham and Baldivis competitors.
          </p>
          <Link
            href="/contact"
            className="btn-glow inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-navy font-semibold px-8 py-4 rounded-xl text-base transition-colors"
          >
            Get Your Free Rockingham Audit
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
