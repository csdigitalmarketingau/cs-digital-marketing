import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ServiceJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title:
    "Local SEO Services Mandurah, Rockingham & Perth | Rank in Google Maps",
  description:
    "Local SEO services for businesses in Mandurah, Rockingham, and Perth. We help you rank in the Google Map Pack using a three-pillar system: GBP optimisation, on-page SEO, and citation building.",
  alternates: {
    canonical: "https://csdigitalmarketing.au/services/local-seo",
  },
};

const pillars = [
  {
    number: "1",
    title: "Google Business Profile Optimisation",
    desc: "Your Google Business Profile is the listing that appears in the map pack. We configure every element — categories, services, description, photos, attributes, posts, and Q&A — so Google has maximum data to match your business to relevant local searches. Everything else we do builds on this.",
    link: "/services/gbp-optimisation",
    linkText: "Learn more about GBP optimisation",
  },
  {
    number: "2",
    title: "On-Page Website SEO",
    desc: "Your website backs up what your Google profile claims. We optimise title tags, heading structure, schema markup, and local content so Google can connect your site to your service area. When your website matches your profile, Google trusts both more.",
    link: "/services/on-page-seo",
    linkText: "Learn more about on-page SEO",
  },
  {
    number: "3",
    title: "Citation Building",
    desc: "Citations are mentions of your business name, address, and phone number on other websites — directories like Apple Maps, Bing Places, Yelp, and Yellow Pages. Consistent citations across authoritative directories tell Google your business is legitimate and established. Inconsistent or missing citations weaken your ranking potential.",
    link: "/services/citation-building",
    linkText: "Learn more about citation building",
  },
];

const differences = [
  {
    aspect: "What it targets",
    localSeo: "Google Map Pack — the 3 local results with the map",
    regularSeo: "Organic results — the 10 blue links below the map",
  },
  {
    aspect: "Main ranking factor",
    localSeo: "Google Business Profile completeness and relevance",
    regularSeo: "Website content, backlinks, and domain authority",
  },
  {
    aspect: "Geographic focus",
    localSeo: "Specific service area (suburbs, cities, regions)",
    regularSeo: "Can be national or international",
  },
  {
    aspect: "Where customers click",
    localSeo: "Map listing → call, directions, or website",
    regularSeo: "Website link → browse pages",
  },
  {
    aspect: "Timeline to results",
    localSeo: "4-6 weeks for visible improvement",
    regularSeo: "3-12 months depending on competition",
  },
];

export default function LocalSEO() {
  return (
    <>
      <ServiceJsonLd
        name="Local SEO Services"
        description="Local SEO services for businesses in Mandurah, Rockingham, and Perth. Three-pillar system to rank in the Google Map Pack."
        url="https://csdigitalmarketing.au/services/local-seo"
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
              Local SEO
              <span className="w-8 h-px bg-gold/60" />
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-5 tracking-tight animate-fade-up-delay-1">
            Local SEO Services for
            <br />
            <span className="gold-gradient-text">
              Mandurah, Rockingham &amp; Perth
            </span>
          </h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed animate-fade-up-delay-2">
            We get your business showing up when local customers search for
            what you do.
          </p>
        </div>
      </section>

      {/* What is Local SEO */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6">
          <span className="text-gold text-xs font-semibold uppercase tracking-widest">
            The Basics
          </span>
          <h2 className="text-3xl font-bold text-navy mt-3 mb-6 tracking-tight">
            What Is Local SEO and Why Does Your Business Need It?
          </h2>
          <div className="space-y-4 text-gray-500 leading-relaxed">
            <p>
              Local SEO is the practice of optimising your online presence so
              your business appears when people in your area search for the
              services you provide. When someone types &ldquo;plumber near
              me&rdquo; or &ldquo;electrician Mandurah&rdquo; into Google, the
              businesses that appear at the top have invested in local SEO —
              whether they know it or not.
            </p>
            <p>
              97% of consumers search online for local businesses. 46% of all
              Google searches have local intent. And the businesses that appear
              in the Google Map Pack — the three listings shown with a map at
              the top of search results — capture the majority of clicks. If
              your business is not in those top three results, you are
              invisible to most of your potential customers.
            </p>
            <p>
              Local SEO is different from regular website SEO. Regular SEO
              focuses on getting your website to rank in the organic results —
              the traditional list of blue links. Local SEO focuses on the map
              pack, which requires a different strategy: optimising your Google
              Business Profile, building consistent citations, and making sure
              your website backs up your local relevance.
            </p>
            <p>
              We specialise exclusively in local SEO for service-area
              businesses across{" "}
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
              . It is the only thing we do.
            </p>
          </div>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="py-20 md:py-28 bg-[#f8f9fb]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-gold text-xs font-semibold uppercase tracking-widest">
              Our System
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mt-3 mb-4 tracking-tight section-divider">
              The Three Pillars of Local Ranking
            </h2>
            <p className="text-gray-500 mt-8 max-w-2xl mx-auto leading-relaxed">
              Businesses that rank in the map pack have all three of these
              sorted. Drop one and the others don&apos;t work as well.
            </p>
          </div>
          <div className="space-y-6">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="accent-card p-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-gold text-navy font-bold rounded-full flex items-center justify-center text-sm shrink-0 shadow-md">
                    {pillar.number}
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy mb-2 text-lg">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed mb-3">
                      {pillar.desc}
                    </p>
                    <Link
                      href={pillar.link}
                      className="text-gold hover:underline text-sm font-medium inline-flex items-center gap-1"
                    >
                      {pillar.linkText}
                      <svg
                        className="w-3 h-3"
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
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local SEO vs Regular SEO */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-gold text-xs font-semibold uppercase tracking-widest">
              Know the Difference
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mt-3 mb-4 tracking-tight section-divider">
              Local SEO vs Regular SEO
            </h2>
            <p className="text-gray-500 mt-8 max-w-2xl mx-auto leading-relaxed">
              They sound similar but they target different results, use
              different strategies, and work on different timelines.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 text-navy font-semibold" />
                  <th className="text-left py-3 px-4 text-navy font-semibold">
                    Local SEO
                  </th>
                  <th className="text-left py-3 px-4 text-navy font-semibold">
                    Regular SEO
                  </th>
                </tr>
              </thead>
              <tbody>
                {differences.map((row) => (
                  <tr
                    key={row.aspect}
                    className="border-b border-gray-100 hover:bg-gray-50/50"
                  >
                    <td className="py-3 px-4 text-navy font-medium">
                      {row.aspect}
                    </td>
                    <td className="py-3 px-4 text-gray-500">
                      {row.localSeo}
                    </td>
                    <td className="py-3 px-4 text-gray-500">
                      {row.regularSeo}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-20 md:py-28 bg-[#f8f9fb]">
        <div className="max-w-4xl mx-auto px-6">
          <span className="text-gold text-xs font-semibold uppercase tracking-widest">
            Who We Help
          </span>
          <h2 className="text-3xl font-bold text-navy mt-3 mb-6 tracking-tight">
            Local SEO for Service-Area Businesses
          </h2>
          <div className="space-y-4 text-gray-500 leading-relaxed">
            <p>
              Our local SEO services are built for businesses that rely on
              customers finding them through Google — not businesses selling
              products online or operating nationally. If people in your area
              search for what you do and you want to be the business they find,
              this is for you.
            </p>
            <p>
              We work with tradies (plumbers, electricians, builders,
              landscapers), health and wellness providers, professional
              services, hospitality businesses, cleaning companies, and any
              local operation that needs more customers from Google. The
              industries change but the ranking principles stay the same.
            </p>
            <p>
              Our{" "}
              <Link
                href="/services"
                className="text-gold hover:underline font-medium"
              >
                12-week programme
              </Link>{" "}
              covers everything from the initial audit through GBP
              optimisation, website improvements, and citation building. You
              get weekly updates and monthly ranking reports so you can see
              exactly what is changing and where.
            </p>
          </div>
        </div>
      </section>

      {/* The Mandurah / Perth Landscape */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6">
          <span className="text-gold text-xs font-semibold uppercase tracking-widest">
            Local Landscape
          </span>
          <h2 className="text-3xl font-bold text-navy mt-3 mb-6 tracking-tight">
            Local SEO in the Mandurah, Rockingham &amp; Perth Market
          </h2>
          <div className="space-y-4 text-gray-500 leading-relaxed">
            <p>
              The Mandurah and Rockingham region is one of the fastest-growing
              areas in Western Australia. New suburbs, new businesses, and a
              growing population mean more people searching for local services
              on Google every month. For established businesses, that means
              more competition. For new businesses, it means opportunity — if
              you get your local SEO right from the start.
            </p>
            <p>
              Perth is a larger, more competitive market where many agencies
              offer broad digital marketing services. We are different because
              we focus exclusively on local search — the map pack, the local
              listings, the directories that matter for businesses serving a
              specific area. We do not offer web design, social media
              management, or Google Ads.            </p>
            <p>
              As a Mandurah-based agency, we understand the local market. We
              know which directories matter for Western Australian businesses,
              what the competitive landscape looks like in specific suburbs, and
              how to position your business to capture the searches that bring
              in real customers.
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
            Find Out Where You Stand on Google
          </h2>
          <p className="text-white/50 mb-10 text-lg max-w-lg mx-auto">
            We will audit your Google Business Profile, check your local
            rankings, and show you exactly what needs to happen to get into
            the map pack.
          </p>
          <Link
            href="/contact"
            className="btn-glow inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-navy font-semibold px-8 py-4 rounded-xl text-base transition-colors"
          >
            Get Your Free Local SEO Audit
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
