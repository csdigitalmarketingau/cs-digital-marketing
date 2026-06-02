import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumb } from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "GBP Optimisation for Locksmiths | Mandurah, Rockingham & Perth",
  description:
    "Google Business Profile optimisation for locksmiths in Mandurah, Rockingham, and Perth. Rank in the Google Map Pack for emergency locksmith and lock-related searches in your area.",
  alternates: {
    canonical: "https://csdigitalmarketing.au/industries/locksmiths",
  },
};

const commonSearches = [
  "Locksmith near me",
  "Emergency locksmith Mandurah",
  "Car locksmith Rockingham",
  "Lock change Baldivis",
  "Locked out of house",
  "Locksmith Halls Head",
  "Locksmith Rockingham",
  "24 hour locksmith Perth",
];

const gbpMistakes = [
  {
    title: "Not Marking as 24/7",
    desc: "Most locksmith calls happen outside business hours. A locked-out customer at 11pm will call the first locksmith whose Google profile shows they are open right now. If your hours say 9 to 5, Google will not show you for after-hours searches. Set your hours to reflect when you actually take calls.",
  },
  {
    title: "Missing Emergency Keywords",
    desc: "Locksmith searches are heavily weighted toward emergencies: locked out, lost keys, broken lock. Your services list needs to include emergency lockout service, after-hours callout, car lockout, and house lockout as individual entries. Each one matches a different search.",
  },
  {
    title: "No Service Area Set",
    desc: "Locksmiths are mobile. You go to the customer. If you have not set your service area in Google, you are invisible to searches in suburbs you cover. We see locksmiths missing calls from areas 10 minutes away because they never told Google they service those suburbs.",
  },
  {
    title: "Competing Against Scam Listings",
    desc: "The locksmith industry on Google has a well-known problem with fake listings using virtual addresses. These scam profiles sometimes rank above legitimate locksmiths. A fully optimised, verified profile with real reviews is the best way to outrank them. Google penalises fake listings when they are reported, and rewards complete, legitimate ones.",
  },
];

export default function LocksmithsPage() {
  return (
    <>
      <Breadcrumb items={[
        { label: "Home", href: "/" },
        { label: "Industries", href: "/industries" },
        { label: "Locksmiths" },
      ]} />
      {/* Hero */}
      <section className="relative text-white py-20 md:py-28 overflow-hidden">
        <Image src="/mandurah-aerial.jpg" alt="Aerial view of Mandurah, Western Australia" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-br from-navy-dark/90 via-navy/80 to-navy-dark/85" />
        <div className="absolute inset-0 hero-gradient opacity-40" />
        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 text-gold/90 text-xs font-semibold uppercase tracking-widest mb-6">
              <span className="w-8 h-px bg-gold/60" />
              Locksmiths
              <span className="w-8 h-px bg-gold/60" />
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-5 tracking-tight animate-fade-up-delay-1">
            Google Business Profile Optimisation
            <br />
            <span className="gold-gradient-text">for Locksmiths</span>
          </h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed animate-fade-up-delay-2">
            Locksmith searches are urgent. Someone locked out at midnight calls
            the first result they see. We make sure your business is that
            result.
          </p>
        </div>
      </section>

      {/* Why */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6">
          <span className="text-gold text-xs font-semibold uppercase tracking-widest">Why It Matters</span>
          <h2 className="text-3xl font-bold text-navy mt-3 mb-6 tracking-tight">Why Google Rankings Matter for Locksmiths</h2>
          <div className="space-y-4 text-gray-500 leading-relaxed">
            <p>Locksmith searches have the highest urgency of any local service. Nobody plans to get locked out. When it happens, they grab their phone, type "locksmith near me," and call whoever shows up first in the map pack. There is no browsing, no comparison shopping, no "I'll think about it." They need someone now.</p>
            <p>That means ranking in the top 3 of the Google Map Pack is worth more to a locksmith than almost any other trade. One position in the map pack can generate dozens of calls per month, each one a paying customer who needs immediate help.</p>
            <p>In <Link href="/areas/mandurah" className="text-gold hover:underline font-medium">Mandurah</Link>, <Link href="/areas/rockingham" className="text-gold hover:underline font-medium">Rockingham</Link>, and <Link href="/areas/perth" className="text-gold hover:underline font-medium">Perth</Link>, legitimate locksmiths compete against both real competitors and fake listings. A complete, well-reviewed Google profile is the clearest signal to both Google and customers that your business is real and trustworthy.</p>
          </div>
        </div>
      </section>

      {/* Searches */}
      <section className="py-20 md:py-28 bg-[#f8f9fb]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-gold text-xs font-semibold uppercase tracking-widest">Search Terms</span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mt-3 mb-4 tracking-tight section-divider">What Your Customers Are Searching</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {commonSearches.map((term) => (
              <div key={term} className="bg-white border border-gray-100 rounded-xl px-4 py-3 text-sm text-navy font-medium text-center hover:border-gold/30 hover:shadow-sm transition-all">{term}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Mistakes */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-gold text-xs font-semibold uppercase tracking-widest">Common Mistakes</span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mt-3 mb-4 tracking-tight section-divider">GBP Mistakes We See Locksmiths Make</h2>
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
          <h2 className="text-3xl font-bold text-navy mt-3 mb-6 tracking-tight">How We Get Locksmiths Into the Map Pack</h2>
          <div className="space-y-4 text-gray-500 leading-relaxed">
            <p>Our <Link href="/services" className="text-gold hover:underline font-medium">12-week programme</Link> for locksmiths focuses on the elements that drive emergency search visibility. We set your hours to match when you actually take calls, build out a service list covering every type of locksmith work (residential, commercial, automotive, emergency), and set your service area to the exact suburbs you cover.</p>
            <p>We set up a <Link href="/services/review-management" className="text-gold hover:underline font-medium">review system</Link> that prompts customers right after you finish a job. Locksmith customers are relieved and grateful. They leave reviews when you ask. Those reviews build the trust profile that separates you from fake listings and part-time operators.</p>
            <p><Link href="/services/citation-building" className="text-gold hover:underline font-medium">Citations</Link> across 15+ directories and <Link href="/services/on-page-seo" className="text-gold hover:underline font-medium">on-page SEO</Link> on your website complete the picture.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-gradient py-20 md:py-24 relative">
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <span className="text-gold/70 text-xs font-semibold uppercase tracking-widest">Locksmiths</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-4 tracking-tight">Where Does Your Locksmith Business Rank?</h2>
          <p className="text-white/50 mb-10 text-lg max-w-lg mx-auto">We will audit your Google profile and show you where you rank for locksmith searches in your area.</p>
          <Link href="/contact" className="btn-glow inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-navy font-semibold px-8 py-4 rounded-xl text-base transition-colors">
            Get Your Free Locksmith SEO Audit
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
          </Link>
        </div>
      </section>
    </>
  );
}
