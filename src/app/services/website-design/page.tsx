import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ServiceJsonLd, FAQJsonLd } from "@/components/JsonLd";
import { Breadcrumb } from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "Website Design for Local Businesses | Fast, SEO-Ready Sites in Mandurah, Rockingham & Perth",
  description:
    "We build fast, SEO-ready websites for local businesses in Mandurah, Rockingham, and Perth. Mobile-first, built to back up your Google listing and turn visitors into customers.",
  alternates: {
    canonical: "https://csdigitalmarketing.au/services/website-design",
  },
};

const features = [
  {
    title: "Built to Rank",
    desc: "Most local business websites are built to look nice and nothing else. We build yours around the things Google reads: proper title tags, heading structure, schema markup, and service and area pages. The site supports your local rankings instead of sitting there doing nothing.",
  },
  {
    title: "Fast and Mobile-First",
    desc: "Over half your visitors are on a phone, often standing in a hardware aisle or sitting in a ute. We build on modern frameworks so pages load in under a second and look right on every screen. A slow site loses customers before they ever read a word.",
  },
  {
    title: "Service and Area Pages",
    desc: "Instead of one page that lists everything, we build a page for each service you offer and each area you cover. A plumber gets a blocked drains page, a hot water page, and a gas fitting page, plus pages for Mandurah, Baldivis, and the suburbs in between. Each one is a fresh chance to rank.",
  },
  {
    title: "Local Schema Built In",
    desc: "Every site we build ships with LocalBusiness, Service, and FAQ schema. This is the structured data that tells Google exactly what you do, where you do it, and how to contact you. Most local websites have none of it.",
  },
  {
    title: "Set Up to Convert",
    desc: "Ranking is only half the job. We make sure your phone number, quote form, and call buttons are easy to find on every page, so the visitors you earn actually get in touch.",
  },
  {
    title: "Easy to Keep Current",
    desc: "Your hours, services, and contact details live in one place, so updates are quick and your site never falls out of date. We hand over a site you can keep running, not a black box you have to pay to touch.",
  },
];

const included = [
  "Mobile-first design that loads fast on every device",
  "A page for every service you offer",
  "Area pages for the suburbs you cover",
  "LocalBusiness, Service, and FAQ schema markup",
  "Title tags and headings written for local search",
  "Google Maps embed and consistent contact details",
  "Contact and quote form that lands straight in your inbox",
  "Sitemap and search engine setup so Google can find every page",
];

const faqs = [
  {
    question: "Do I need a new website, or can you fix my existing one?",
    answer:
      "It depends on what you have. If your current site is slow, thin, or built on a platform that fights local SEO, a rebuild is usually faster and cheaper than patching it. If the bones are good, we may be able to improve what is there. We will tell you honestly after a look.",
  },
  {
    question: "How does the website connect to my Google ranking?",
    answer:
      "Your website is the second of the three local ranking pillars, alongside your Google Business Profile and your citations. Google cross-checks your site against your profile. When they match and your site is fast and well structured, your whole local presence gets stronger. A good website and an optimised profile work together.",
  },
  {
    question: "How long does a website take to build?",
    answer:
      "A standard local business site takes two to three weeks from the time we have your content and photos. Larger sites with more services and areas take a little longer. We give you a clear timeline before we start.",
  },
  {
    question: "Will I be able to update it myself?",
    answer:
      "Yes. We build your site so the details that change most often, like hours, services, and contact info, are simple to update. We also walk you through it on handover. If you would rather we handle changes, we can do that too.",
  },
  {
    question: "Do you build websites for businesses outside Mandurah?",
    answer:
      "Yes. We are based in Mandurah and work with businesses across Rockingham, Baldivis, and greater Perth. The work is done remotely, so your location does not change what we can build for you.",
  },
];

export default function WebsiteDesign() {
  return (
    <>
      <ServiceJsonLd
        name="Website Design for Local Businesses"
        description="Fast, SEO-ready website design for local businesses in Mandurah, Rockingham, and Perth. Mobile-first, built with local schema to support Google rankings and convert visitors."
        url="https://csdigitalmarketing.au/services/website-design"
      />
      <FAQJsonLd faqs={faqs} />
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Website Design" },
        ]}
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
              Website Design
              <span className="w-8 h-px bg-gold/60" />
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-5 tracking-tight animate-fade-up-delay-1">
            Websites Built to
            <br />
            <span className="gold-gradient-text">Rank and Convert</span>
          </h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed animate-fade-up-delay-2">
            A great Google listing needs a website to back it up. We build fast,
            local-SEO-ready sites for businesses across Mandurah, Rockingham,
            and Perth.
          </p>
        </div>
      </section>

      {/* Why it matters */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6">
          <span className="text-gold text-xs font-semibold uppercase tracking-widest">
            Why It Matters
          </span>
          <h2 className="text-3xl font-bold text-navy mt-3 mb-6 tracking-tight">
            Your Website Is the Second Pillar of Local Ranking
          </h2>
          <div className="space-y-4 text-gray-500 leading-relaxed">
            <p>
              When someone finds you in the Google Map Pack, the next thing they
              do is click through to your website. If it loads slowly, looks
              dated on their phone, or does not answer their question, they hit
              back and call the next business on the list.
            </p>
            <p>
              Your website also feeds your rankings. Google checks your site
              against your{" "}
              <Link
                href="/services/gbp-optimisation"
                className="text-gold hover:underline font-medium"
              >
                Google Business Profile
              </Link>
              . When the two match and your site is fast and well structured,
              Google trusts your business more and ranks you higher. A weak
              website holds back even a well-optimised profile.
            </p>
            <p>
              Most local business websites were built once, years ago, by
              someone who focused on how it looked rather than whether it would
              rank. We build the other kind: sites that load fast, read well on
              a phone, and give Google everything it needs to put you in front
              of local customers.
            </p>
          </div>
        </div>
      </section>

      {/* What we build */}
      <section className="py-20 md:py-28 bg-[#f8f9fb]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-gold text-xs font-semibold uppercase tracking-widest">
              What We Build
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mt-3 mb-4 tracking-tight section-divider">
              Built for Local Businesses, Not Awards
            </h2>
            <p className="text-gray-500 mt-8 max-w-2xl mx-auto leading-relaxed">
              Every site we build is designed to do one job: bring you more
              local customers.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {features.map((item) => (
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

      {/* What's included */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6">
          <span className="text-gold text-xs font-semibold uppercase tracking-widest">
            What You Get
          </span>
          <h2 className="text-3xl font-bold text-navy mt-3 mb-6 tracking-tight">
            What Comes With Every Website
          </h2>
          <ul className="space-y-3 mt-6">
            {included.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-gold shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-500 leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* How it fits */}
      <section className="py-20 md:py-28 bg-[#f8f9fb]">
        <div className="max-w-4xl mx-auto px-6">
          <span className="text-gold text-xs font-semibold uppercase tracking-widest">
            Part of the Bigger Picture
          </span>
          <h2 className="text-3xl font-bold text-navy mt-3 mb-6 tracking-tight">
            A Website That Works With the Rest
          </h2>
          <div className="space-y-4 text-gray-500 leading-relaxed">
            <p>
              A website on its own is a brochure. A website paired with an
              optimised Google profile and consistent directory listings is a
              local lead machine. That is why website design sits alongside our{" "}
              <Link
                href="/services/local-seo"
                className="text-gold hover:underline font-medium"
              >
                local SEO
              </Link>{" "}
              work rather than apart from it.
            </p>
            <p>
              When we build your site, we handle the{" "}
              <Link
                href="/services/on-page-seo"
                className="text-gold hover:underline font-medium"
              >
                on-page SEO
              </Link>{" "}
              at the same time, so the structure, schema, and content are right
              from day one. Pair it with{" "}
              <Link
                href="/services/citation-building"
                className="text-gold hover:underline font-medium"
              >
                citations
              </Link>{" "}
              and a tuned Google profile and you have all three ranking pillars
              working together.
            </p>
            <p>
              We work with businesses across{" "}
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
              </Link>
              . If you need a website that earns its keep, this is where to
              start.
            </p>
          </div>
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
              Website Design Questions
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

      {/* CTA */}
      <section className="hero-gradient py-20 md:py-24 relative">
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <span className="text-gold/70 text-xs font-semibold uppercase tracking-widest">
            Free Quote
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-4 tracking-tight">
            Need a Website That Actually Ranks?
          </h2>
          <p className="text-white/50 mb-10 text-lg max-w-lg mx-auto">
            Tell us about your business and we will put together a plan for a
            site that brings in local customers.
          </p>
          <Link
            href="/contact"
            className="btn-glow inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-navy font-semibold px-8 py-4 rounded-xl text-base transition-colors"
          >
            Get a Free Quote
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
