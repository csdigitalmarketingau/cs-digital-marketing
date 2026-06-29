import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FAQJsonLd } from "@/components/JsonLd";
import { Breadcrumb } from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Google Business Profile Optimisation Mandurah | Local SEO Mandurah",
  description:
    "GBP optimisation for Mandurah businesses. We help tradies, restaurants, health clinics, and service businesses rank in the Google Map Pack across Mandurah, Halls Head, Falcon, and the Peel region.",
  alternates: {
    canonical: "https://csdigitalmarketing.au/areas/mandurah",
  },
};

const suburbs = [
  "Halls Head",
  "Dudley Park",
  "Greenfields",
  "Lakelands",
  "Meadow Springs",
  "Coodanup",
  "Falcon",
  "Dawesville",
  "Silver Sands",
  "Erskine",
  "Madora Bay",
  "San Remo",
];

const faqs = [
  {
    question: "Do you need to be based in Mandurah to work with us?",
    answer:
      "No. We work with businesses across Mandurah and the wider Peel region remotely. We access your Google Business Profile through shared access, handle citations online, and keep you updated by email each week. Most of the work is done digitally.",
  },
  {
    question: "How long does it take to see results in Mandurah?",
    answer:
      "Most Mandurah businesses see their map pack rankings improve within 4 to 6 weeks of the GBP optimisation phase. The full 12-week programme builds on that with website SEO and citation building, which compounds the gains over time.",
  },
  {
    question: "Is Mandurah competitive for local SEO?",
    answer:
      "It depends on the industry. Trades (plumbers, electricians) and health services are competitive because there are many businesses competing for the same searches. Hospitality and professional services vary by suburb. We audit your specific market before we start so you know what you're up against.",
  },
  {
    question: "What types of Mandurah businesses do you work with?",
    answer:
      "Any local business that needs customers from Google. Tradies, landscapers, cleaners, health and beauty, restaurants, professional services, celebrants. If people in Mandurah or the Peel region search for what you do, we can help you show up.",
  },
  {
    question: "How is local SEO in Mandurah different from Perth?",
    answer:
      "Mandurah is a regional city with its own distinct search market. People searching for services in Mandurah want a Mandurah-based or Mandurah-familiar provider. Ranking well in Mandurah requires local signals: a Mandurah address on your GBP and website, citations on directories relevant to WA regional businesses, and content that references local suburbs and the Peel region.",
  },
];

export default function MandurahArea() {
  return (
    <>
      <Breadcrumb items={[
        { label: "Home", href: "/" },
        { label: "Areas", href: "/areas" },
        { label: "Mandurah" },
      ]} />
      <FAQJsonLd faqs={faqs} />

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
              Service Area
              <span className="w-8 h-px bg-gold/60" />
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-5 tracking-tight animate-fade-up-delay-1">
            GBP Optimisation in{" "}
            <span className="gold-gradient-text">Mandurah</span>
          </h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed animate-fade-up-delay-2">
            Helping Mandurah and Peel region businesses rank in the Google Map
            Pack. We are based here and we know the market.
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
            Local SEO for Mandurah Businesses
          </h2>
          <div className="space-y-4 text-gray-500 leading-relaxed">
            <p>
              Mandurah is Western Australia&apos;s second largest city outside
              the Perth metropolitan area, with a population pushing past
              100,000 and growing. The Peel region has been one of the
              fastest-growing areas in the state for more than a decade, driven
              by families relocating from Perth, retirees, and a strong local
              economy centred on trades, tourism, and services.
            </p>
            <p>
              That growth means more local businesses, and more competition for
              the same Google searches. A plumber in Halls Head is now
              competing with a dozen other plumbers all trying to rank for
              the same map pack. A cleaner in Greenfields is up against
              operators from across the Peel region. The businesses winning
              those map pack positions are the ones who have spent time on
              their Google Business Profile and local SEO.
            </p>
            <p>
              We are based in the Mandurah area. We run the same{" "}
              <Link href="/process" className="text-gold hover:underline font-medium">
                three-pillar programme
              </Link>{" "}
              that we use for every client: full{" "}
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
              </Link>{" "}
              across 15+ Australian directories. For Mandurah businesses, we
              also know which local signals matter: the Peel region directories,
              the suburb-level keywords, and how Google reads location data for
              businesses serving the area between Mandurah and Rockingham. If you
              need a website to go with it, we also handle{" "}
              <Link href="/services/website-design" className="text-gold hover:underline font-medium">
                website design
              </Link>
              .
            </p>
          </div>

          {/* Mandurah market context */}
          <div className="mt-16">
            <span className="text-gold text-xs font-semibold uppercase tracking-widest">
              The Mandurah Market
            </span>
            <h2 className="text-3xl font-bold text-navy mt-3 mb-6 tracking-tight">
              What Makes Mandurah Different
            </h2>
            <div className="space-y-4 text-gray-500 leading-relaxed">
              <p>
                Mandurah sits at the centre of the Peel region, which stretches
                from the southern suburbs of Rockingham down through Falcon,
                Dawesville, and towards Pinjarra. Businesses based in Mandurah
                often service customers across this whole corridor, not just the
                city itself.
              </p>
              <p>
                The tourism side of Mandurah (the canals, the foreshore, the
                dolphin cruises) brings seasonal visitors who use Google to find
                restaurants, accommodation, and experiences. For hospitality and
                retail businesses, ranking well during peak periods (school
                holidays, long weekends, summer) can make a significant
                difference to revenue.
              </p>
              <p>
                Newer suburbs like Lakelands, Meadow Springs, and Madora Bay
                have large populations of young families who rely heavily on
                Google to find local services. These suburbs are often
                underserved by local businesses competing for them, which means
                ranking there is more achievable than in the established
                Mandurah CBD area.
              </p>
            </div>
          </div>

          {/* Suburbs */}
          <div className="mt-16">
            <span className="text-gold text-xs font-semibold uppercase tracking-widest">
              Coverage
            </span>
            <h2 className="text-3xl font-bold text-navy mt-3 mb-6 tracking-tight">
              Suburbs We Service in the Mandurah Area
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
              Also covering Pinjarra, Waroona, and surrounding Peel region
              towns. Get in touch if you are unsure whether we cover your area.
            </p>
          </div>

          {/* What we do */}
          <div className="mt-16">
            <span className="text-gold text-xs font-semibold uppercase tracking-widest">
              What We Do
            </span>
            <h2 className="text-3xl font-bold text-navy mt-3 mb-6 tracking-tight">
              What We Do for Mandurah Businesses
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                {
                  title: "GBP Audit & Optimisation",
                  desc: "Full profile audit with competitor benchmarking against other Mandurah businesses in your category. We check categories, services, photos, posts, attributes, and reviews, then fix everything that is holding you back.",
                },
                {
                  title: "Local Citation Building",
                  desc: "Consistent listings across 15+ Australian directories with your exact business name, Mandurah address, and phone number. We also check for and fix any existing inconsistencies that are diluting your ranking power.",
                },
                {
                  title: "On-Page Website SEO",
                  desc: "Title tags and headings targeting Mandurah and Peel region searches, schema markup, Google Maps embed, and NAP consistency across every page of your website.",
                },
                {
                  title: "Review Strategy",
                  desc: "A simple review system that makes it easy for your customers to leave a Google review. We set up the direct link and response templates so you can build reviews consistently without chasing people.",
                },
                {
                  title: "Website Design",
                  desc: "Need a site to back up your listing? We build fast, mobile-first websites for Mandurah businesses with service and area pages and local schema built in, so your site supports your rankings instead of holding them back.",
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
              Mandurah Industries We Work With
            </h2>
            <div className="space-y-4 text-gray-500 leading-relaxed">
              <p>
                We work with any local business that needs customers from
                Google. In Mandurah and the Peel region, that typically
                includes:
              </p>
              <ul className="space-y-2 ml-4">
                {[
                  "Trades: plumbers, electricians, builders, painters, tilers",
                  "Outdoor services: landscapers, bore and reticulation, pool builders",
                  "Health and wellness: physios, chiropractors, massage therapists, dentists",
                  "Hospitality: cafes, restaurants, takeaway, catering",
                  "Professional services: accountants, mortgage brokers, real estate agents",
                  "Beauty: hair salons, nail salons, beauty therapists",
                  "Celebrants and event services",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-gold shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <p>
                We have worked with a{" "}
                <Link href="/industries/celebrants" className="text-gold hover:underline font-medium">
                  marriage celebrant
                </Link>{" "}
                in Falcon as one of our first Mandurah clients. The same
                process applies whether you are a tradie or a professional
                service. What changes is the specific keywords, categories,
                and competitor landscape for your industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Map embed */}
      <section className="py-8 bg-[#f8f9fb]">
        <div className="max-w-4xl mx-auto px-6">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13455.5!2d115.7465!3d-32.5307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2a324a5e923e4d41%3A0x504f0b535df55d0!2sMandurah%20WA%206210!5e0!3m2!1sen!2sau!4v1"
            width="100%"
            height="300"
            style={{ border: 0, borderRadius: "12px" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mandurah, Western Australia"
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
              Mandurah Local SEO Questions
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
            <Link href="/areas/rockingham" className="text-gold hover:underline font-medium">
              Rockingham
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
            Where Does Your Mandurah Business Rank?
          </h2>
          <p className="text-white/50 mb-10 text-lg max-w-lg mx-auto">
            We will audit your Google Business Profile and show you exactly
            where you stand against your Mandurah competitors.
          </p>
          <Link
            href="/contact"
            className="btn-glow inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-navy font-semibold px-8 py-4 rounded-xl text-base transition-colors"
          >
            Get Your Free Mandurah Audit
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
