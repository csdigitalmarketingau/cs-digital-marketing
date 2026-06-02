import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "GBP Optimisation for Celebrants | Mandurah, Rockingham & Perth",
  description:
    "Google Business Profile optimisation for marriage celebrants and funeral celebrants in Mandurah, Rockingham, and Perth. Rank in the Google Map Pack when couples and families search for a celebrant.",
  alternates: {
    canonical: "https://csdigitalmarketing.au/industries/celebrants",
  },
};

const commonSearches = [
  "Marriage celebrant near me",
  "Wedding celebrant Mandurah",
  "Celebrant Mandurah",
  "Celebrant Rockingham",
  "Funeral celebrant Perth",
  "Elopement celebrant Perth",
  "Beach wedding celebrant",
  "Celebrant Falcon",
];

const gbpMistakes = [
  {
    title: "Wrong Category",
    desc: "Google has a specific \"Marriage Celebrant\" category. Many celebrants use \"Wedding Service\" or \"Event Planner\" instead. The category determines which searches Google shows you for. \"Marriage Celebrant\" matches what couples actually type into Google.",
  },
  {
    title: "No Photos of Ceremonies",
    desc: "Couples choosing a celebrant want to see you in action. Ceremony photos, signing table setups, candid shots from real weddings. A profile with 30+ ceremony photos builds trust faster than any written description. Most celebrants have these photos on Instagram but never upload them to Google.",
  },
  {
    title: "Description Missing Key Details",
    desc: "Couples searching for a celebrant want to know: what types of ceremonies you do, where you are willing to travel, your style (formal, relaxed, humorous), and whether you write custom vows. Your Google description should answer all of these in 750 characters. Most celebrant descriptions say \"I create beautiful ceremonies\" and nothing specific.",
  },
  {
    title: "Reviews Not Mentioning Location",
    desc: "A review that says \"amazing celebrant for our beach wedding in Mandurah\" tells Google two things: you are a celebrant and you work in Mandurah. A review that says \"highly recommend\" tells Google nothing useful. We help you guide customers toward reviews that mention the ceremony type and location.",
  },
];

export default function CelebrantsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative text-white py-20 md:py-28 overflow-hidden">
        <Image src="/mandurah-aerial.jpg" alt="Aerial view of Mandurah waterways, Western Australia" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-br from-navy-dark/90 via-navy/80 to-navy-dark/85" />
        <div className="absolute inset-0 hero-gradient opacity-40" />
        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 text-gold/90 text-xs font-semibold uppercase tracking-widest mb-6">
              <span className="w-8 h-px bg-gold/60" />
              Celebrants
              <span className="w-8 h-px bg-gold/60" />
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-5 tracking-tight animate-fade-up-delay-1">
            Google Business Profile Optimisation
            <br />
            <span className="gold-gradient-text">for Celebrants</span>
          </h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed animate-fade-up-delay-2">
            Couples search Google when choosing a celebrant. Your profile, your
            photos, and your reviews are what they see first. We make sure
            that first impression counts.
          </p>
        </div>
      </section>

      {/* Why */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6">
          <span className="text-gold text-xs font-semibold uppercase tracking-widest">Why It Matters</span>
          <h2 className="text-3xl font-bold text-navy mt-3 mb-6 tracking-tight">Why Google Rankings Matter for Celebrants</h2>
          <div className="space-y-4 text-gray-500 leading-relaxed">
            <p>Choosing a celebrant is personal. Couples research, compare, and read reviews before reaching out. The first place most of them look is Google. They search "marriage celebrant Mandurah" or "wedding celebrant Perth" and compare the top results on the map.</p>
            <p>Your star rating, your review count, your ceremony photos, and your description all factor into their decision. A celebrant with 40 reviews and a gallery of real ceremony photos will get the enquiry over one with 3 reviews and a stock image.</p>
            <p>The <Link href="/areas/mandurah" className="text-gold hover:underline font-medium">Mandurah</Link> and <Link href="/areas/rockingham" className="text-gold hover:underline font-medium">Rockingham</Link> coastline is one of the most popular wedding destinations in Western Australia. Beach ceremonies at Halls Head, garden venues in Falcon, winery weddings in Pinjarra. Couples searching for celebrants in these areas need to find you, not your competitor three suburbs away.</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-navy mt-3 mb-4 tracking-tight section-divider">GBP Mistakes We See Celebrants Make</h2>
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
          <h2 className="text-3xl font-bold text-navy mt-3 mb-6 tracking-tight">How We Get Celebrants Into the Map Pack</h2>
          <div className="space-y-4 text-gray-500 leading-relaxed">
            <p>Our <Link href="/services" className="text-gold hover:underline font-medium">12-week programme</Link> for celebrants focuses on the visual and emotional side of your profile. We set the right category, build your service list (wedding ceremonies, elopements, vow renewals, naming ceremonies, funerals), and write a description that tells couples exactly what working with you is like.</p>
            <p>We help you upload your best ceremony photos, geotagged to the venues where they were taken. A photo from a beach wedding in Mandurah tells Google you work in Mandurah. Over time, this builds a photo library that shows couples your range and your style.</p>
            <p>The <Link href="/services/review-management" className="text-gold hover:underline font-medium">review system</Link> we set up makes it easy for couples to leave a review after their wedding day. We guide them toward mentioning the ceremony location and type, which helps your profile rank for those specific searches.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-gradient py-20 md:py-24 relative">
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <span className="text-gold/70 text-xs font-semibold uppercase tracking-widest">Celebrants</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-4 tracking-tight">Where Does Your Celebrant Business Rank?</h2>
          <p className="text-white/50 mb-10 text-lg max-w-lg mx-auto">We will audit your Google profile and show you where you rank for celebrant searches in your area.</p>
          <Link href="/contact" className="btn-glow inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-navy font-semibold px-8 py-4 rounded-xl text-base transition-colors">
            Get Your Free Celebrant SEO Audit
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
          </Link>
        </div>
      </section>
    </>
  );
}
