import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumb } from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "GBP Optimisation for Professional Services | Mandurah, Rockingham & Perth",
  description:
    "Google Business Profile optimisation for accountants, lawyers, financial advisers, and other professional services in Mandurah, Rockingham, and Perth. Rank in the Google Map Pack.",
  alternates: {
    canonical: "https://csdigitalmarketing.au/industries/professional-services",
  },
};

const commonSearches = [
  "Accountant near me",
  "Lawyer Mandurah",
  "Financial adviser Rockingham",
  "Mortgage broker near me",
  "Tax agent Mandurah",
  "Bookkeeper Rockingham",
  "Real estate agent Baldivis",
  "Insurance broker Perth",
];

const gbpMistakes = [
  {
    title: "Category Too Broad",
    desc: "\"Professional Services\" is not a Google category. Google has specific categories: Accountant, Tax Preparation Service, Lawyer, Financial Planner, Mortgage Broker, Insurance Agency, Real Estate Agent. Pick the one that matches your primary service. If you offer multiple services, your primary category should be the one people search for most.",
  },
  {
    title: "No Service Descriptions",
    desc: "Professional services cover wide ground. An accountant might do BAS lodgement, tax returns, bookkeeping, business advisory, and SMSF. Each one is a separate service people search for. Listing them individually with descriptions means Google can match you to more specific searches.",
  },
  {
    title: "Missing Credentials",
    desc: 'Professional service clients care about qualifications. CPA, CA, MFAA, registered tax agent. Your Google description should mention these. Not as a brag, but because people search for "registered tax agent near me" or "CPA accountant Mandurah" and Google matches those terms against your profile content.',
  },
  {
    title: "Formal but Empty Profile",
    desc: "Many professional service businesses have a clean logo and a one-line description. That looks polished but gives Google nothing to work with. The accountant with 20 services listed, 15 reviews mentioning specific work (\"handled our company tax and BAS\"), and a detailed description will outrank the one with a nice logo and no content every time.",
  },
];

export default function ProfessionalServicesPage() {
  return (
    <>
      <Breadcrumb items={[
        { label: "Home", href: "/" },
        { label: "Industries", href: "/industries" },
        { label: "Professional Services" },
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
              Professional Services
              <span className="w-8 h-px bg-gold/60" />
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-5 tracking-tight animate-fade-up-delay-1">
            Google Business Profile Optimisation
            <br />
            <span className="gold-gradient-text">for Professional Services</span>
          </h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed animate-fade-up-delay-2">
            Accountants, lawyers, financial advisers, mortgage brokers. Your
            clients search Google when they need you. We make sure you show up
            ahead of the firm down the road.
          </p>
        </div>
      </section>

      {/* Why */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6">
          <span className="text-gold text-xs font-semibold uppercase tracking-widest">Why It Matters</span>
          <h2 className="text-3xl font-bold text-navy mt-3 mb-6 tracking-tight">Why Google Rankings Matter for Professional Services</h2>
          <div className="space-y-4 text-gray-500 leading-relaxed">
            <p>Professional service searches are high-value. Someone searching "accountant near me" is looking for a long-term business relationship, not a one-off purchase. A single new client from Google can be worth thousands per year in recurring fees.</p>
            <p>Trust is the deciding factor. People choose their accountant or lawyer based on reviews, credentials, and proximity. All three of those signals live on your Google Business Profile. A firm with 30 reviews mentioning specific services will get the call over one with a generic profile, regardless of who has the nicer website.</p>
            <p>In <Link href="/areas/mandurah" className="text-gold hover:underline font-medium">Mandurah</Link> and <Link href="/areas/rockingham" className="text-gold hover:underline font-medium">Rockingham</Link>, many professional service businesses rely on referrals and have neglected their Google presence. That creates an opening. In <Link href="/areas/perth" className="text-gold hover:underline font-medium">Perth</Link>, the market is more competitive but the search volume is higher.</p>
          </div>
        </div>
      </section>

      {/* Searches */}
      <section className="py-20 md:py-28 bg-[#f8f9fb]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-gold text-xs font-semibold uppercase tracking-widest">Search Terms</span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mt-3 mb-4 tracking-tight section-divider">What Your Clients Are Searching</h2>
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
            <h2 className="text-3xl md:text-4xl font-bold text-navy mt-3 mb-4 tracking-tight section-divider">GBP Mistakes We See Professional Services Make</h2>
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
          <h2 className="text-3xl font-bold text-navy mt-3 mb-6 tracking-tight">How We Get Professional Services Into the Map Pack</h2>
          <div className="space-y-4 text-gray-500 leading-relaxed">
            <p>Our <Link href="/services" className="text-gold hover:underline font-medium">12-week programme</Link> for professional services starts with picking the exact right Google category. Then we build out a service list covering every service you offer, write a description that includes your credentials and specialties, and set your service area.</p>
            <p>For professional services, <Link href="/services/review-management" className="text-gold hover:underline font-medium">reviews</Link> are particularly valuable. We set up a review process that encourages clients to mention the specific service and location. "Handled our company tax in Mandurah, very thorough" is worth more for your rankings than "good accountant."</p>
            <p><Link href="/services/citation-building" className="text-gold hover:underline font-medium">Citations</Link> on industry-specific directories (CPA Australia, Law Society, professional association listings) carry extra weight for professional services. We identify and build these alongside the standard 15+ Australian directories.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-gradient py-20 md:py-24 relative">
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <span className="text-gold/70 text-xs font-semibold uppercase tracking-widest">Professional Services</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-4 tracking-tight">Where Does Your Practice Rank?</h2>
          <p className="text-white/50 mb-10 text-lg max-w-lg mx-auto">We will audit your Google profile and show you where you rank for professional service searches in your area.</p>
          <Link href="/contact" className="btn-glow inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-navy font-semibold px-8 py-4 rounded-xl text-base transition-colors">
            Get Your Free Audit
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
          </Link>
        </div>
      </section>
    </>
  );
}
