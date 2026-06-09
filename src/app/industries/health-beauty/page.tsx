import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ServiceJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "GBP Optimisation for Health & Beauty | Mandurah, Rockingham & Perth",
  description:
    "Google Business Profile optimisation for health and beauty businesses in Mandurah, Rockingham, and Perth. Salons, spas, clinics, and wellness providers. Rank in the Google Map Pack.",
  alternates: {
    canonical: "https://csdigitalmarketing.au/industries/health-beauty",
  },
};

const commonSearches = [
  "Hair salon near me",
  "Beauty salon Mandurah",
  "Massage Rockingham",
  "Physio near me",
  "Nail salon Baldivis",
  "Barber Mandurah",
  "Day spa Rockingham",
  "Dentist near me",
];

const gbpMistakes = [
  {
    title: "Generic Category",
    desc: "Google has specific categories for hair salons, beauty salons, nail salons, day spas, massage therapists, physiotherapists, chiropractors, and dozens more. Using \"Health and Beauty\" when you are a hair salon means Google does not know to show you for \"hair salon near me\" searches. Pick the specific category that matches your main service.",
  },
  {
    title: "No Booking Link",
    desc: "Health and beauty businesses live on bookings. Google lets you add a booking link directly to your profile so customers can book without calling. Most salons and clinics do not set this up. Adding it removes friction and turns profile views into booked appointments.",
  },
  {
    title: "Outdated Photos",
    desc: "Your salon or clinic changes. New fit-out, new staff, new treatment rooms. But the photos on Google are from three years ago. Customers make snap judgements based on how your space looks. Fresh photos of your actual space, your team, and your work (before and afters for beauty, clean treatment rooms for health) build confidence.",
  },
  {
    title: "Not Using Attributes",
    desc: "Google offers health and beauty specific attributes: wheelchair accessible, LGBTQ+ friendly, appointment required, walk-ins welcome, free Wi-Fi. These show up as badges on your profile and help customers filter results. Most businesses leave them blank.",
  },
];

export default function HealthBeautyPage() {
  return (
    <>
      <Breadcrumb items={[
        { label: "Home", href: "/" },
        { label: "Industries", href: "/industries" },
        { label: "Health & Beauty" },
      ]} />
      <ServiceJsonLd
        name="GBP Optimisation for Health & Beauty"
        description="Google Business Profile optimisation for salons, spas, clinics, and wellness providers in Mandurah, Rockingham, and Perth."
        url="https://csdigitalmarketing.au/industries/health-beauty"
      />
      {/* Hero */}
      <section className="relative text-white py-20 md:py-28 overflow-hidden">
        <Image src="/mandurah-aerial.jpg" alt="Aerial view of Mandurah, Western Australia" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-br from-navy-dark/90 via-navy/80 to-navy-dark/85" />
        <div className="absolute inset-0 hero-gradient opacity-40" />
        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 text-gold/90 text-xs font-semibold uppercase tracking-widest mb-6">
              <span className="w-8 h-px bg-gold/60" />
              Health &amp; Beauty
              <span className="w-8 h-px bg-gold/60" />
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-5 tracking-tight animate-fade-up-delay-1">
            Google Business Profile Optimisation
            <br />
            <span className="gold-gradient-text">for Health &amp; Beauty</span>
          </h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed animate-fade-up-delay-2">
            Salons, spas, clinics, and wellness providers. Your customers
            search Google before they book. We make sure your profile is the
            one they choose.
          </p>
        </div>
      </section>

      {/* Why */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6">
          <span className="text-gold text-xs font-semibold uppercase tracking-widest">Why It Matters</span>
          <h2 className="text-3xl font-bold text-navy mt-3 mb-6 tracking-tight">Why Google Rankings Matter for Health &amp; Beauty</h2>
          <div className="space-y-4 text-gray-500 leading-relaxed">
            <p>Health and beauty is one of the most searched local categories on Google. Hair salons, nail salons, massage therapists, physios, dentists. People search for these services constantly, and they almost always pick someone nearby.</p>
            <p>Reviews carry extra weight in this industry. A salon with 120 reviews and a 4.8 rating feels safe. One with 4 reviews feels risky. Customers are trusting you with their appearance or their health. They need to see that other people trust you too.</p>
            <p>In <Link href="/areas/mandurah" className="text-gold hover:underline font-medium">Mandurah</Link> and <Link href="/areas/rockingham" className="text-gold hover:underline font-medium">Rockingham</Link>, the health and beauty market is competitive but most profiles are incomplete. In <Link href="/areas/perth" className="text-gold hover:underline font-medium">Perth</Link>, the volume of searches is higher and so is the competition. In both markets, a fully built-out profile stands out.</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-navy mt-3 mb-4 tracking-tight section-divider">GBP Mistakes We See in Health &amp; Beauty</h2>
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
          <h2 className="text-3xl font-bold text-navy mt-3 mb-6 tracking-tight">How We Get Health &amp; Beauty Businesses Into the Map Pack</h2>
          <div className="space-y-4 text-gray-500 leading-relaxed">
            <p>Our <Link href="/services" className="text-gold hover:underline font-medium">12-week programme</Link> for health and beauty businesses starts with picking the right specific category. Then we build out your service list, add your booking link, enable all relevant attributes, and write a description that tells customers exactly what you offer and where.</p>
            <p>Photos are critical in this industry. We help you set up a regular photo schedule: your space, your team, your work. Before and afters for beauty treatments. Clean treatment rooms for health practices. Every photo geotagged to your location.</p>
            <p>The <Link href="/services/review-management" className="text-gold hover:underline font-medium">review system</Link> we set up takes advantage of the fact that health and beauty customers visit regularly. Each visit is a chance for a review. Over a few months, you build a review count that puts you ahead of competitors who never ask.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-gradient py-20 md:py-24 relative">
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <span className="text-gold/70 text-xs font-semibold uppercase tracking-widest">Health &amp; Beauty</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-4 tracking-tight">Where Does Your Salon or Clinic Rank?</h2>
          <p className="text-white/50 mb-10 text-lg max-w-lg mx-auto">We will audit your Google profile and show you where you rank for health and beauty searches in your area.</p>
          <Link href="/contact" className="btn-glow inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-navy font-semibold px-8 py-4 rounded-xl text-base transition-colors">
            Get Your Free Health &amp; Beauty Audit
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
          </Link>
        </div>
      </section>
    </>
  );
}
