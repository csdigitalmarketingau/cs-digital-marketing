import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ServiceJsonLd } from "@/components/JsonLd";
import { Breadcrumb } from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "Citation Building Australia | 15+ Business Directories That Matter for Local SEO",
  description:
    "Professional citation building across 15+ Australian business directories. Consistent NAP data across Apple Maps, Bing, Yelp, Yellow Pages, and more to boost your local search rankings.",
  alternates: {
    canonical: "https://csdigitalmarketing.au/services/citation-building",
  },
};

const directories = [
  { name: "Google Business Profile", priority: "Essential", type: "Search Engine" },
  { name: "Apple Maps / Apple Business Connect", priority: "Essential", type: "Maps & Navigation" },
  { name: "Bing Places", priority: "Essential", type: "Search Engine" },
  { name: "Facebook Business", priority: "Essential", type: "Social" },
  { name: "Yelp", priority: "Essential", type: "Review Directory" },
  { name: "Yellow Pages Australia", priority: "High", type: "Business Directory" },
  { name: "White Pages", priority: "High", type: "Business Directory" },
  { name: "Hotfrog", priority: "High", type: "Business Directory" },
  { name: "Word of Mouth", priority: "High", type: "Review Directory" },
  { name: "AussieWeb", priority: "Medium", type: "Business Directory" },
  { name: "Pure Local", priority: "Medium", type: "Business Directory" },
  { name: "Local.com.au", priority: "Medium", type: "Business Directory" },
  { name: "Super Pages", priority: "Medium", type: "Business Directory" },
  { name: "Search Frog", priority: "Medium", type: "Business Directory" },
  { name: "Brownbook", priority: "Medium", type: "Business Directory" },
  { name: "Street Directory", priority: "Medium", type: "Business Directory" },
];

export default function CitationBuilding() {
  return (
    <>
      <Breadcrumb items={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Citation Building" },
      ]} />
      <ServiceJsonLd
        name="Citation Building"
        description="Professional citation building across 15+ Australian business directories for local businesses in Mandurah, Rockingham, and Perth."
        url="https://csdigitalmarketing.au/services/citation-building"
      />

      {/* Hero */}
      <section className="relative text-white py-20 md:py-28 overflow-hidden">
        <Image
          src="/mandurah-aerial.jpg"
          alt="Mandurah coastal aerial view, Western Australia"
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
              Citation Building
              <span className="w-8 h-px bg-gold/60" />
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-5 tracking-tight animate-fade-up-delay-1">
            Citation Building for
            <br />
            <span className="gold-gradient-text">
              Australian Local Businesses
            </span>
          </h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed animate-fade-up-delay-2">
            Consistent business listings across 15+ authoritative Australian
            directories. One of the three pillars of local search ranking.
          </p>
        </div>
      </section>

      {/* What Are Citations */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6">
          <span className="text-gold text-xs font-semibold uppercase tracking-widest">
            The Basics
          </span>
          <h2 className="text-3xl font-bold text-navy mt-3 mb-6 tracking-tight">
            What Are Citations and Why Do They Matter?
          </h2>
          <div className="space-y-4 text-gray-500 leading-relaxed">
            <p>
              A citation is any online mention of your business name, address,
              and phone number, known as NAP data. These mentions typically
              appear on business directories, mapping platforms, social media
              profiles, and industry-specific listing sites.
            </p>
            <p>
              Google uses citations as a trust signal. When it finds your
              business details listed consistently across multiple authoritative
              websites, it gains confidence that your business is real,
              established, and located where you say you are. This is one of the main things Google looks at when deciding
              your map pack ranking.
            </p>
            <p>
              If your business
              name is &ldquo;Smith&apos;s Plumbing&rdquo; on Google but
              &ldquo;Smiths Plumbing Services&rdquo; on Yelp and
              &ldquo;Smith Plumbing Pty Ltd&rdquo; on Yellow Pages, Google
              cannot confidently connect those listings to the same business.
              Inconsistent citations dilute your ranking power instead of
              building it.
            </p>
            <p>
              A clean listing on Yellow Pages does more for you than 50 sloppy
              ones on directories nobody uses. That is why we focus on the
              directories that count, building your presence on the
              directories that actually influence local rankings in Australia.
            </p>
          </div>
        </div>
      </section>

      {/* Directory List */}
      <section className="py-20 md:py-28 bg-[#f8f9fb]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-gold text-xs font-semibold uppercase tracking-widest">
              Where We List You
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mt-3 mb-4 tracking-tight section-divider">
              15+ Australian Directories That Matter
            </h2>
            <p className="text-gray-500 mt-8 max-w-2xl mx-auto leading-relaxed">
              We have tested and verified which directories carry actual
              authority for Australian local businesses. These are the ones
              that actually affect your ranking.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 text-navy font-semibold">
                    Directory
                  </th>
                  <th className="text-left py-3 px-4 text-navy font-semibold">
                    Priority
                  </th>
                  <th className="text-left py-3 px-4 text-navy font-semibold">
                    Type
                  </th>
                </tr>
              </thead>
              <tbody>
                {directories.map((dir) => (
                  <tr
                    key={dir.name}
                    className="border-b border-gray-100 hover:bg-gray-50/50"
                  >
                    <td className="py-3 px-4 text-navy font-medium">
                      {dir.name}
                    </td>
                    <td className="py-3 px-4">
                      <span
                        className={`text-xs font-semibold px-2 py-1 rounded-full ${
                          dir.priority === "Essential"
                            ? "bg-gold/10 text-gold"
                            : dir.priority === "High"
                            ? "bg-navy/10 text-navy"
                            : "bg-gray-100 text-gray-500"
                        }`}
                      >
                        {dir.priority}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-gray-500">{dir.type}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-400 text-xs mt-4 text-center">
            We also research niche-specific directories relevant to your
            industry and location.
          </p>
        </div>
      </section>

      {/* How We Build Citations */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6">
          <span className="text-gold text-xs font-semibold uppercase tracking-widest">
            Our Process
          </span>
          <h2 className="text-3xl font-bold text-navy mt-3 mb-6 tracking-tight">
            How We Build Your Citations
          </h2>
          <div className="space-y-4 text-gray-500 leading-relaxed">
            <p>
              Citation building is not just about creating listings. It is
              about creating them correctly and maintaining them over time.
              Here is how we approach it during the{" "}
              <Link
                href="/services"
                className="text-gold hover:underline font-medium"
              >
                12-week programme
              </Link>
              .
            </p>
          </div>
          <div className="mt-8 space-y-6">
            {[
              {
                step: "1",
                title: "NAP Audit",
                desc: "We search for every existing mention of your business online and document what is correct, what is inconsistent, and what is missing. This includes old addresses, former business names, duplicate listings, and incorrect phone numbers.",
              },
              {
                step: "2",
                title: "Cleanup & Correction",
                desc: "Before building new citations, we fix existing ones. Duplicate listings get merged or removed. Incorrect details get updated. This prevents conflicting signals from undermining the new citations we build.",
              },
              {
                step: "3",
                title: "Priority Submissions",
                desc: "We start with the essential directories (Google, Apple Maps, Bing, Facebook, and Yelp) then work through high and medium priority directories at a pace of 3-5 per week. Spreading submissions over time looks more natural to search engines than creating 20 listings in one day.",
              },
              {
                step: "4",
                title: "Verification & Monitoring",
                desc: "Many directories require email, phone, or postcard verification. We track every submission through the verification process and confirm each listing is live with correct details. After the programme, we do a final check to make sure nothing has reverted or been auto-edited by the platform.",
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-4">
                <div className="w-10 h-10 bg-gold text-navy font-bold rounded-full flex items-center justify-center text-sm shrink-0 shadow-md">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-semibold text-navy mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Problems */}
      <section className="py-20 md:py-28 bg-[#f8f9fb]">
        <div className="max-w-4xl mx-auto px-6">
          <span className="text-gold text-xs font-semibold uppercase tracking-widest">
            Watch Out
          </span>
          <h2 className="text-3xl font-bold text-navy mt-3 mb-6 tracking-tight">
            Common Citation Problems We Find
          </h2>
          <div className="space-y-4 text-gray-500 leading-relaxed">
            <p>
              Most businesses we audit have citation issues they do not know
              about. These are the most common problems we fix:
            </p>
          </div>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              {
                title: "Inconsistent Business Name",
                desc: "Variations like \"Smith's Plumbing\", \"Smiths Plumbing Services\", and \"Smith Plumbing Pty Ltd\" across different directories confuse Google about which business is which.",
              },
              {
                title: "Old Address Still Listed",
                desc: "Moved premises years ago but never updated your listings. Google finds conflicting addresses and does not know which to trust.",
              },
              {
                title: "Duplicate Listings",
                desc: "Two or three listings for the same business on the same directory, often auto-generated by the platform. These compete against each other and split your ranking power.",
              },
              {
                title: "Missing From Key Directories",
                desc: "Not listed on Apple Maps, Bing Places, or other high-authority directories. These are free listings that directly influence your local ranking.",
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
      </section>

      {/* How It Connects */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6">
          <span className="text-gold text-xs font-semibold uppercase tracking-widest">
            Part of the System
          </span>
          <h2 className="text-3xl font-bold text-navy mt-3 mb-6 tracking-tight">
            Citations Are Pillar Three of Local Ranking
          </h2>
          <div className="space-y-4 text-gray-500 leading-relaxed">
            <p>
              Citation building is the third pillar of our{" "}
              <Link
                href="/services/local-seo"
                className="text-gold hover:underline font-medium"
              >
                local SEO system
              </Link>
              . It works alongside your{" "}
              <Link
                href="/services/gbp-optimisation"
                className="text-gold hover:underline font-medium"
              >
                Google Business Profile optimisation
              </Link>{" "}
              and{" "}
              <Link
                href="/services/on-page-seo"
                className="text-gold hover:underline font-medium"
              >
                on-page website SEO
              </Link>{" "}
              to build a complete picture of your business across the internet.
            </p>
            <p>
              During weeks 7 through 10 of our{" "}
              <Link
                href="/services"
                className="text-gold hover:underline font-medium"
              >
                12-week programme
              </Link>
              , we work through the full citation building process: audit,
              cleanup, submission, and verification. By the time we reach the
              review phase in weeks 11-12, your business will have consistent
              NAP data across 15+ authoritative Australian directories.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-gradient py-20 md:py-24 relative">
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <span className="text-gold/70 text-xs font-semibold uppercase tracking-widest">
            Find Out
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-4 tracking-tight">
            Where Is Your Business Listed?
          </h2>
          <p className="text-white/50 mb-10 text-lg max-w-lg mx-auto">
            We will check your existing citations, find inconsistencies, and
            show you which directories you are missing from.
          </p>
          <Link
            href="/contact"
            className="btn-glow inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-navy font-semibold px-8 py-4 rounded-xl text-base transition-colors"
          >
            Get Your Free Citation Audit
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
