import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ServiceJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title:
    "On-Page SEO for Local Businesses | Title Tags, Schema & Content That Ranks",
  description:
    "On-page SEO optimisation for local businesses in Mandurah, Rockingham, and Perth. Title tags, heading structure, schema markup, and geo-targeted content to reinforce your Google Map Pack rankings.",
  alternates: {
    canonical: "https://csdigitalmarketing.au/services/on-page-seo",
  },
};

const elements = [
  {
    title: "Title Tags",
    desc: "Your title tag is the most important on-page ranking factor. For local businesses, it needs to include your primary service, your location, and your business name. We write title tags that are keyword-rich without being spammy — that tells both Google and your customers exactly what you do and where.",
  },
  {
    title: "H1 & Heading Structure",
    desc: "Your H1 is the main heading on each page and should match your primary keyword and location. Below that, H2s and H3s create a logical hierarchy that helps Google understand the structure of your content. We audit and fix heading hierarchy issues — skipped levels, duplicate H1s, and generic headings that waste ranking potential.",
  },
  {
    title: "Local Business Schema Markup",
    desc: "Schema markup is structured data that tells Google exactly what your business is, where it is located, what services you offer, your hours, your contact details, and your service area. Most local business websites have no schema at all. We add LocalBusiness, Service, and FAQ schema to give Google machine-readable data about your business — data most local businesses skip entirely.",
  },
  {
    title: "NAP Visibility",
    desc: "Your business name, address, and phone number need to be visible on every page of your website — typically in the footer. This consistency between your website, your Google Business Profile, and your directory citations creates a strong signal that reinforces your local relevance. We make sure your NAP is crawlable text, not embedded in images where Google cannot read it.",
  },
  {
    title: "Google Maps Embed",
    desc: "Embedding a Google Map on your contact page (and ideally your area-specific pages) sends a direct location signal to Google. It confirms your physical presence in the area and makes it easy for customers to find you. A surprisingly large number of local business websites do not have a map embed at all.",
  },
  {
    title: "Service-Specific Pages",
    desc: "Instead of listing all your services on one page, building individual pages for each service creates more opportunities to rank for specific search terms. A plumber with separate pages for \"blocked drains\", \"hot water systems\", and \"gas fitting\" has three chances to rank where a competitor with one generic services page has one. Each page targets a different keyword cluster.",
  },
  {
    title: "Geo-Targeted Content",
    desc: "Pages that mention specific suburbs, landmarks, and local context rank better for searches in those areas. We create or optimise content that naturally references your service area — not pages stuffed with suburb names, but actual useful content about your area.",
  },
  {
    title: "Internal Linking",
    desc: "Strategic internal links between your pages help Google understand how your content relates and which pages are most important. We build a linking structure where your homepage links to service pages, service pages link to area pages, and everything connects back through a logical hierarchy. This distributes ranking authority across your site instead of concentrating it on one page.",
  },
];

export default function OnPageSEO() {
  return (
    <>
      <ServiceJsonLd
        name="On-Page SEO for Local Businesses"
        description="On-page SEO optimisation including title tags, schema markup, heading structure, and geo-targeted content for local businesses in Mandurah, Rockingham, and Perth."
        url="https://csdigitalmarketing.au/services/on-page-seo"
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
              On-Page SEO
              <span className="w-8 h-px bg-gold/60" />
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-5 tracking-tight animate-fade-up-delay-1">
            On-Page SEO That Helps
            <br />
            <span className="gold-gradient-text">
              Local Businesses Rank
            </span>
          </h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed animate-fade-up-delay-2">
            Your website backs up your Google listing. We fix the parts that
            help Google tie them together.
          </p>
        </div>
      </section>

      {/* Why Website SEO Matters for Local */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6">
          <span className="text-gold text-xs font-semibold uppercase tracking-widest">
            Pillar Two
          </span>
          <h2 className="text-3xl font-bold text-navy mt-3 mb-6 tracking-tight">
            Why Your Website Matters for Local Search Rankings
          </h2>
          <div className="space-y-4 text-gray-500 leading-relaxed">
            <p>
              Many business owners think local SEO is just about their Google
              Business Profile. The profile is the most important factor, but
              your website is the second pillar — and without it, your profile
              is working alone.
            </p>
            <p>
              Google cross-references the information on your website with
              what is on your Google Business Profile and your directory
              citations. When all three sources tell the same story — same
              business name, same address, same services, same service area —
              Google has high confidence in your listing. When your website
              contradicts or fails to support your profile, that confidence
              drops.
            </p>
            <p>
              On-page SEO for local businesses is not about writing 5,000-word
              blog posts or chasing backlinks from national publications. It is
              about making sure your website clearly and consistently
              communicates what you do, where you do it, and why Google should
              trust your business for local searches.
            </p>
          </div>
        </div>
      </section>

      {/* What We Optimise */}
      <section className="py-20 md:py-28 bg-[#f8f9fb]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-gold text-xs font-semibold uppercase tracking-widest">
              What We Do
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mt-3 mb-4 tracking-tight section-divider">
              On-Page Elements We Optimise
            </h2>
            <p className="text-gray-500 mt-8 max-w-2xl mx-auto leading-relaxed">
              Each one tells Google something about who you are and where you
              work.
            </p>
          </div>
          <div className="space-y-5">
            {elements.map((item) => (
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

      {/* Site Architecture */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6">
          <span className="text-gold text-xs font-semibold uppercase tracking-widest">
            Structure Matters
          </span>
          <h2 className="text-3xl font-bold text-navy mt-3 mb-6 tracking-tight">
            Website Architecture for Local Businesses
          </h2>
          <div className="space-y-4 text-gray-500 leading-relaxed">
            <p>
              The way your website is structured affects how Google crawls,
              understands, and ranks your pages. For local businesses, the
              ideal architecture follows a clear hierarchy:
            </p>
            <div className="bg-white border border-gray-200 rounded-xl p-6 my-6 font-mono text-sm text-navy">
              <div>Homepage</div>
              <div className="ml-4">
                <div className="border-l-2 border-gold/30 pl-4 mt-1">
                  <div>Service Category Pages (5-6)</div>
                  <div className="ml-4 border-l-2 border-gold/20 pl-4 mt-1">
                    <div>Individual Service Pages (3-4 per category)</div>
                  </div>
                </div>
                <div className="border-l-2 border-gold/30 pl-4 mt-1">
                  <div>Area Pages (one per service area)</div>
                </div>
                <div className="border-l-2 border-gold/30 pl-4 mt-1">
                  <div>About / Contact / Blog</div>
                </div>
              </div>
            </div>
            <p>
              This hierarchy does two things. First, it gives Google a clear
              map of your content and how topics relate to each other. Second,
              it creates more pages targeting more specific keyword
              combinations, which means more opportunities to rank.
            </p>
            <p>
              A business with 30 well-structured pages covering specific
              services and areas will outrank a business with 5
              generic pages — even if the 5-page site has better content on
              each individual page. Volume and structure matter for local SEO.
            </p>
          </div>
        </div>
      </section>

      {/* How It Fits */}
      <section className="py-20 md:py-28 bg-[#f8f9fb]">
        <div className="max-w-4xl mx-auto px-6">
          <span className="text-gold text-xs font-semibold uppercase tracking-widest">
            Part of the Programme
          </span>
          <h2 className="text-3xl font-bold text-navy mt-3 mb-6 tracking-tight">
            On-Page SEO in Our 12-Week Programme
          </h2>
          <div className="space-y-4 text-gray-500 leading-relaxed">
            <p>
              Website optimisation happens during weeks 5 and 6 of our{" "}
              <Link
                href="/services"
                className="text-gold hover:underline font-medium"
              >
                12-week programme
              </Link>
              , after your{" "}
              <Link
                href="/services/gbp-optimisation"
                className="text-gold hover:underline font-medium"
              >
                Google Business Profile
              </Link>{" "}
              is fully optimised. By this point, we know your target keywords,
              your service area, and your competitive landscape — so the
              we know exactly what to change on your website.
            </p>
            <p>
              We make changes that reinforce your GBP data: matching title
              tags to your target keywords, adding schema markup that mirrors
              your profile information, embedding maps, and making sure your
              NAP data is consistent between your website and every other
              platform.
            </p>
            <p>
              The on-page improvements then support the{" "}
              <Link
                href="/services/citation-building"
                className="text-gold hover:underline font-medium"
              >
                citation building
              </Link>{" "}
              that follows in weeks 7-10. When directory listings point back
              to a well-optimised website, the combined signal is stronger
              than either one alone.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-gradient py-20 md:py-24 relative">
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <span className="text-gold/70 text-xs font-semibold uppercase tracking-widest">
            Website Check
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-4 tracking-tight">
            Is Your Website Helping or Hurting Your Rankings?
          </h2>
          <p className="text-white/50 mb-10 text-lg max-w-lg mx-auto">
            We will review your website for local SEO issues and show you
            what needs to change to support your Google rankings.
          </p>
          <Link
            href="/contact"
            className="btn-glow inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-navy font-semibold px-8 py-4 rounded-xl text-base transition-colors"
          >
            Get Your Free Website Review
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
