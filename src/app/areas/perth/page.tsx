import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FAQJsonLd } from "@/components/JsonLd";
import { Breadcrumb } from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Google Business Profile Optimisation Perth | Local SEO Perth",
  description:
    "GBP optimisation for Perth businesses. We help local businesses across the Perth metropolitan area rank in the Google Map Pack. Fremantle, Joondalup, Subiaco, Victoria Park, and beyond.",
  alternates: {
    canonical: "https://csdigitalmarketing.au/areas/perth",
  },
};

const areas = [
  "Perth CBD",
  "Fremantle",
  "Joondalup",
  "Midland",
  "Armadale",
  "Cannington",
  "Morley",
  "Osborne Park",
  "Subiaco",
  "Victoria Park",
  "Cockburn",
  "Wanneroo",
];

const faqs = [
  {
    question: "Can you work with businesses across the whole Perth metro area?",
    answer:
      "Yes. We work with businesses anywhere in the Perth metropolitan area. The work is done remotely through shared Google Business Profile access. Your physical location within Perth does not affect what we can do for you.",
  },
  {
    question: "Perth is huge. How do you target specific suburbs?",
    answer:
      "Your Google Business Profile has a service area setting that lets you define exactly which suburbs you want to rank for. We set this up correctly based on where you actually take customers. On the website side, we create content and title tags targeting the specific suburb combinations that matter for your business.",
  },
  {
    question: "How competitive is the Perth map pack?",
    answer:
      "It varies significantly by industry and suburb. Competitive industries in inner-city suburbs (trades in Fremantle, cafes in Subiaco) are harder. The same industry in an outer suburb with fewer competitors can be much more achievable. We audit your specific situation before we start so you know what to expect.",
  },
  {
    question: "Does local SEO in Perth work the same way as regional areas?",
    answer:
      "The principles are the same but the scale and competition are different. Perth businesses typically compete against more profiles in the map pack. Reviews carry more weight when there are 30 competitors instead of 5. The GBP completeness gap between businesses is often larger in Perth because more businesses have invested in some level of optimisation.",
  },
  {
    question: "We already have a website agency. Can you just do the GBP side?",
    answer:
      "Yes. If you have an existing website agency handling your site, we can focus purely on your Google Business Profile and citations. The three pillars of our programme can be delivered independently. We can also coordinate with your existing agency on the on-page SEO elements if needed.",
  },
];

export default function PerthArea() {
  return (
    <>
      <Breadcrumb items={[
        { label: "Home", href: "/" },
        { label: "Areas" },
        { label: "Perth" },
      ]} />
      <FAQJsonLd faqs={faqs} />

      {/* Hero */}
      <section className="relative text-white py-20 md:py-28 overflow-hidden">
        <Image
          src="/mandurah-aerial.jpg"
          alt="Aerial view of Western Australia coastline"
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
            <span className="gold-gradient-text">Perth</span>
          </h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed animate-fade-up-delay-2">
            Helping Perth businesses get into the Google Map Pack across the
            metropolitan area.
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
            Local SEO for Perth Businesses
          </h2>
          <div className="space-y-4 text-gray-500 leading-relaxed">
            <p>
              Perth is a large, spread-out metropolitan area with distinct local
              markets in each suburb. The plumber ranking in Fremantle is not
              necessarily competing with the plumber ranking in Joondalup. Each
              suburb has its own map pack, and ranking in one does not
              automatically help you rank in another.
            </p>
            <p>
              That said, the fundamentals are the same across all of Perth:
              Google Business Profile completeness, website relevance, and
              citation consistency. A business with a fully optimised profile
              and consistent citations will outrank one that has not invested in
              these things, regardless of the suburb.
            </p>
            <p>
              We are based in the Mandurah and Rockingham corridor but we work
              with Perth businesses across the whole metro area. The work is
              done remotely. We handle everything through shared GBP access and
              keep you updated each week through our{" "}
              <Link href="/services" className="text-gold hover:underline font-medium">
                12-week programme
              </Link>
              .
            </p>
          </div>

          {/* Perth market context */}
          <div className="mt-16">
            <span className="text-gold text-xs font-semibold uppercase tracking-widest">
              The Perth Market
            </span>
            <h2 className="text-3xl font-bold text-navy mt-3 mb-6 tracking-tight">
              What Makes Perth Different
            </h2>
            <div className="space-y-4 text-gray-500 leading-relaxed">
              <p>
                Perth is more competitive than regional markets but it is not
                uniformly competitive. Inner-city suburbs like Subiaco, South
                Perth, and Fremantle have dense business populations and more
                competitors in the map pack. Outer suburbs in the north
                (Wanneroo, Joondalup) and south (Cockburn, Armadale) often have
                more room to rank with fewer fully-optimised competitors.
              </p>
              <p>
                The Perth market also has a higher proportion of businesses that
                have invested in some level of digital marketing, which means
                the average baseline is slightly higher than in Mandurah or
                Rockingham. Getting into the top 3 in a Perth suburb requires a
                more complete profile, more reviews, and stronger citation
                consistency than the same result might require in a smaller
                market.
              </p>
              <p>
                The upside is that Perth searches have higher volume. A
                plumber ranking in Fremantle gets more enquiries from that map
                pack position than a plumber ranking in a regional town, simply
                because more people are searching. The reward for doing the work
                is proportionally higher.
              </p>
            </div>
          </div>

          {/* Areas */}
          <div className="mt-16">
            <span className="text-gold text-xs font-semibold uppercase tracking-widest">
              Coverage
            </span>
            <h2 className="text-3xl font-bold text-navy mt-3 mb-6 tracking-tight">
              Areas We Service Across Perth
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {areas.map((area) => (
                <div
                  key={area}
                  className="bg-[#f8f9fb] border border-gray-100 rounded-xl px-4 py-3 text-sm text-navy font-medium text-center hover:border-gold/30 hover:shadow-sm transition-all"
                >
                  {area}
                </div>
              ))}
            </div>
            <p className="text-gray-400 text-sm mt-4">
              We cover the full Perth metropolitan area. If your suburb is not
              listed above, get in touch. We work across all of Perth.
            </p>
          </div>

          {/* What we do */}
          <div className="mt-16">
            <span className="text-gold text-xs font-semibold uppercase tracking-widest">
              What We Do
            </span>
            <h2 className="text-3xl font-bold text-navy mt-3 mb-6 tracking-tight">
              What We Do for Perth Businesses
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                {
                  title: "GBP Audit & Optimisation",
                  desc: "Full profile audit benchmarked against your top Perth competitors. We fix categories, build out the service list, set your service area to the suburbs you actually cover, add photos, and get a posting schedule in place.",
                },
                {
                  title: "Local Citation Building",
                  desc: "Consistent listings across 15+ Australian directories. For Perth businesses, citation consistency is particularly important because many have been listed on multiple directories over the years with inconsistent details.",
                },
                {
                  title: "On-Page Website SEO",
                  desc: "Title tags targeting the specific Perth suburbs you serve, schema markup, Google Maps embed, and consistent NAP data. For businesses with wide service areas, we create suburb-level content to target each area specifically.",
                },
                {
                  title: "Competitive Intelligence",
                  desc: "We look at what your top Perth competitors are doing in the map pack. Categories they use, services they list, review counts and ratings, posting frequency. This tells us exactly what you need to match or beat them.",
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
              Perth Industries We Work With
            </h2>
            <div className="space-y-4 text-gray-500 leading-relaxed">
              <p>
                We work with local businesses across all of Perth that need
                customers from Google searches. The most common industries we
                work with in the Perth metro area:
              </p>
              <ul className="space-y-2 ml-4">
                {[
                  "Trades: plumbers, electricians, builders, painters, roofers",
                  "Home services: cleaners, landscapers, removalists, pest control",
                  "Health and allied health: physios, dentists, chiropractors, GPs",
                  "Beauty and wellness: hair salons, beauty clinics, barbershops",
                  "Hospitality: cafes, restaurants, catering, food trucks",
                  "Professional services: accountants, lawyers, mortgage brokers, financial planners",
                  "Automotive: mechanics, smash repairers, tyre shops",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-gold shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4">
                See our{" "}
                <Link href="/industries" className="text-gold hover:underline font-medium">
                  industry pages
                </Link>{" "}
                for details on how we approach GBP optimisation for specific
                categories.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Map embed */}
      <section className="py-8 bg-[#f8f9fb]">
        <div className="max-w-4xl mx-auto px-6">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d214587.9!2d115.8613!3d-31.9505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2a32a20897873f69%3A0x136b8de921cd0743!2sPerth%20WA!5e0!3m2!1sen!2sau!4v1"
            width="100%"
            height="300"
            style={{ border: 0, borderRadius: "12px" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Perth, Western Australia"
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
              Perth Local SEO Questions
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
            We also have strong results in{" "}
            <Link href="/areas/mandurah" className="text-gold hover:underline font-medium">
              Mandurah
            </Link>{" "}
            and{" "}
            <Link href="/areas/rockingham" className="text-gold hover:underline font-medium">
              Rockingham
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
            Where Does Your Perth Business Rank?
          </h2>
          <p className="text-white/50 mb-10 text-lg max-w-lg mx-auto">
            We will audit your Google Business Profile and show you exactly
            where you stand against your Perth competitors.
          </p>
          <Link
            href="/contact"
            className="btn-glow inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-navy font-semibold px-8 py-4 rounded-xl text-base transition-colors"
          >
            Get Your Free Perth Audit
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
