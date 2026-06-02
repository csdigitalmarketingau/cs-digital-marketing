import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ServiceJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "GBP Optimisation for Restaurants & Cafes | Mandurah, Rockingham & Perth",
  description:
    "Google Business Profile optimisation for restaurants and cafes in Mandurah, Rockingham, and Perth. Rank in the Google Map Pack and turn searchers into diners.",
  alternates: {
    canonical: "https://csdigitalmarketing.au/industries/restaurants-cafes",
  },
};

const commonSearches = [
  "Restaurants near me",
  "Cafe Mandurah",
  "Best coffee Rockingham",
  "Brunch Mandurah",
  "Italian restaurant Perth",
  "Fish and chips Halls Head",
  "Breakfast Rockingham",
  "Lunch near me",
];

const gbpMistakes = [
  {
    title: "Menu Not Uploaded",
    desc: "Google lets you add your full menu to your profile. Customers checking the map pack often look at the menu before deciding where to eat. A restaurant without a menu on Google loses to one that has it. We add your menu items with prices so customers can browse before they walk in.",
  },
  {
    title: "Photos of Empty Tables",
    desc: "Stock photos of place settings do nothing for your profile. Customers want to see your actual food, your actual space, and what it looks like when people are there. A photo of your signature dish gets more engagement than a photo of an empty dining room. Food photos should look appetising, not staged.",
  },
  {
    title: "Wrong Hours",
    desc: "Restaurants and cafes change hours seasonally, for public holidays, and sometimes week to week. Nothing frustrates a customer more than driving to a restaurant Google says is open, only to find it closed. We help you keep your hours accurate and set up holiday hours in advance.",
  },
  {
    title: "Not Responding to Reviews",
    desc: "Restaurants get more reviews than almost any other business type. Many are detailed. Responding to each one shows you care, gives you a chance to address complaints, and tells Google your business is active. A restaurant with 200 reviews and no responses looks less engaged than one with 100 reviews and thoughtful replies to each.",
  },
];

export default function RestaurantsCafesPage() {
  return (
    <>
      <Breadcrumb items={[
        { label: "Home", href: "/" },
        { label: "Industries", href: "/industries" },
        { label: "Restaurants & Cafes" },
      ]} />
      <ServiceJsonLd
        name="GBP Optimisation for Restaurants & Cafes"
        description="Google Business Profile optimisation for restaurants and cafes in Mandurah, Rockingham, and Perth."
        url="https://csdigitalmarketing.au/industries/restaurants-cafes"
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
              Restaurants &amp; Cafes
              <span className="w-8 h-px bg-gold/60" />
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-5 tracking-tight animate-fade-up-delay-1">
            Google Business Profile Optimisation
            <br />
            <span className="gold-gradient-text">for Restaurants &amp; Cafes</span>
          </h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed animate-fade-up-delay-2">
            "Restaurants near me" is one of the most common Google searches in
            Australia. When someone is hungry and looking, your Google profile
            decides whether they walk through your door or your competitor&apos;s.
          </p>
        </div>
      </section>

      {/* Why */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6">
          <span className="text-gold text-xs font-semibold uppercase tracking-widest">Why It Matters</span>
          <h2 className="text-3xl font-bold text-navy mt-3 mb-6 tracking-tight">Why Google Rankings Matter for Restaurants &amp; Cafes</h2>
          <div className="space-y-4 text-gray-500 leading-relaxed">
            <p>Food and drink searches are the highest-volume local searches on Google. "Restaurants near me," "cafe Mandurah," "best coffee Rockingham." These happen thousands of times a day in Perth alone. The restaurants in the map pack capture the majority of walk-in and takeaway traffic from people who did not already have a place in mind.</p>
            <p>Reviews matter more for restaurants than almost any other industry. People read them. They look at the food photos. They check the menu. They compare the rating to the place next door. This all happens on your Google profile in about 15 seconds.</p>
            <p>Along the <Link href="/areas/mandurah" className="text-gold hover:underline font-medium">Mandurah</Link> foreshore, through <Link href="/areas/rockingham" className="text-gold hover:underline font-medium">Rockingham</Link>, and across <Link href="/areas/perth" className="text-gold hover:underline font-medium">Perth</Link>, new restaurants open regularly. The ones that rank well on Google from day one fill seats faster.</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-navy mt-3 mb-4 tracking-tight section-divider">GBP Mistakes We See Restaurants &amp; Cafes Make</h2>
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
          <h2 className="text-3xl font-bold text-navy mt-3 mb-6 tracking-tight">How We Get Restaurants &amp; Cafes Into the Map Pack</h2>
          <div className="space-y-4 text-gray-500 leading-relaxed">
            <p>Our <Link href="/services" className="text-gold hover:underline font-medium">12-week programme</Link> for restaurants and cafes covers the full profile: correct category, menu upload, hours (including holiday hours), attributes (dine-in, takeaway, delivery, outdoor seating, BYO), and a description that tells people what kind of food you serve and what the experience is like.</p>
            <p>We help you build a food photo library. Real shots of your dishes, your space, your coffee. Geotagged to your location. Google Posts showing weekly specials, new menu items, or events keep your profile active and give regulars a reason to engage.</p>
            <p>The <Link href="/services/review-management" className="text-gold hover:underline font-medium">review response strategy</Link> we set up helps you handle the volume. Restaurants get more reviews than most businesses. Responding to each one builds trust with future customers and tells Google you are paying attention.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-gradient py-20 md:py-24 relative">
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <span className="text-gold/70 text-xs font-semibold uppercase tracking-widest">Hospitality</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-4 tracking-tight">Where Does Your Restaurant Rank?</h2>
          <p className="text-white/50 mb-10 text-lg max-w-lg mx-auto">We will audit your Google profile and show you where you rank for food and drink searches in your area.</p>
          <Link href="/contact" className="btn-glow inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-navy font-semibold px-8 py-4 rounded-xl text-base transition-colors">
            Get Your Free Restaurant SEO Audit
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
          </Link>
        </div>
      </section>
    </>
  );
}
