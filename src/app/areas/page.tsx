import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumb } from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Local SEO & GBP Optimisation Areas | Mandurah, Rockingham, Perth",
  description:
    "Google Business Profile optimisation and local SEO across Mandurah, Rockingham and Perth. We get local businesses into the Google map pack where the calls are.",
  alternates: {
    canonical: "https://csdigitalmarketing.au/areas",
  },
};

const areas = [
  {
    title: "Mandurah",
    desc: "Our home base. We know the Mandurah market street by street and rank local businesses in the Google map pack for the searches that bring in calls.",
    href: "/areas/mandurah",
  },
  {
    title: "Rockingham",
    desc: "Just north of home turf. Rockingham businesses compete for the same high-intent local searches, and a complete, optimised Google profile is what wins the map pack.",
    href: "/areas/rockingham",
  },
  {
    title: "Perth",
    desc: "A bigger, more competitive market where organic visibility and a strong Google profile matter most. We help Perth businesses get found by customers ready to buy.",
    href: "/areas/perth",
  },
];

export default function Areas() {
  return (
    <>
      <Breadcrumb items={[
        { label: "Home", href: "/" },
        { label: "Areas" },
      ]} />
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
              Areas We Serve
              <span className="w-8 h-px bg-gold/60" />
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-5 tracking-tight animate-fade-up-delay-1">
            Local SEO Across
            <br />
            <span className="gold-gradient-text">Perth&apos;s South</span>
          </h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed animate-fade-up-delay-2">
            We help local businesses get found on Google in the areas they
            serve. Same ranking process, tuned to the competition and search
            behaviour of each location.
          </p>
        </div>
      </section>

      {/* Areas Grid */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-5">
            {areas.map((area) => (
              <Link
                key={area.title}
                href={area.href}
                className="accent-card p-6 block group"
              >
                <h2 className="text-lg font-semibold text-navy mb-2 group-hover:text-gold transition-colors">
                  {area.title}
                </h2>
                <p className="text-sm text-gray-500 leading-relaxed mb-3">
                  {area.desc}
                </p>
                <span className="text-gold text-sm font-medium inline-flex items-center gap-1">
                  Learn more
                  <svg
                    className="w-3 h-3 group-hover:translate-x-1 transition-transform"
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
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-gradient py-20 md:py-24 relative">
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <span className="text-gold/70 text-xs font-semibold uppercase tracking-widest">
            Your Area
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-4 tracking-tight">
            Don&apos;t See Your Area?
          </h2>
          <p className="text-white/50 mb-10 text-lg max-w-lg mx-auto">
            We work with local businesses across Western Australia. Get in touch
            and we will tell you exactly what we can do for your business in your
            area.
          </p>
          <Link
            href="/contact"
            className="btn-glow inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-navy font-semibold px-8 py-4 rounded-xl text-base transition-colors"
          >
            Get Your Free Audit
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
