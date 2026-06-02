import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AnimatedCounter } from "@/components/AnimatedCounter";

export const metadata: Metadata = {
  title:
    "Best Google Business Profile Optimisation Mandurah, Rockingham & Perth | CS Digital Marketing",
  description:
    "Get your local business found on Google. CS Digital Marketing provides professional GBP optimisation in Mandurah, Rockingham, and Perth. Free audit available.",
  openGraph: {
    title:
      "Best Google Business Profile Optimisation Mandurah, Rockingham & Perth | CS Digital Marketing",
    description:
      "Get your local business found on Google. Professional GBP optimisation in Mandurah, Rockingham, and Perth.",
  },
  alternates: {
    canonical: "https://csdigitalmarketing.au",
  },
};

export default function Home() {
  return (
    <>
      {/* ======= HERO ======= */}
      <section className="relative text-white py-24 md:py-32 overflow-hidden">
        {/* Background image + overlay */}
        <Image
          src="/mandurah-aerial.jpg"
          alt=""
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy-dark/90 via-navy/80 to-navy-dark/85" />
        <div className="absolute inset-0 hero-gradient opacity-40" />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="animate-fade-up">
              <span className="inline-flex items-center gap-2 text-gold/90 text-xs font-semibold uppercase tracking-widest mb-6">
                <span className="w-8 h-px bg-gold/60" />
                Google Business Profile Specialists
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-[1.1] mb-6 animate-fade-up-delay-1 tracking-tight">
              Get Your Business to the
              <br />
              <span className="gold-gradient-text">Top of Google Maps</span>
              <br />
              <span className="text-white/50 text-3xl md:text-4xl lg:text-[2.5rem]">
                in Mandurah, Rockingham &amp; Perth
              </span>
            </h1>
            <p className="text-lg text-white/60 mb-10 leading-relaxed max-w-xl animate-fade-up-delay-2">
              We help local businesses rank in the Google Map Pack —
              the top 3 results customers see when searching for services near
              them.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up-delay-3">
              <Link
                href="/contact"
                className="btn-glow bg-gold hover:bg-gold-light text-navy font-semibold px-8 py-4 rounded-xl text-base transition-colors inline-flex items-center justify-center gap-2"
              >
                Get a Free Audit
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <Link
                href="/process"
                className="border border-white/20 hover:border-white/40 hover:bg-white/5 text-white/80 font-medium px-8 py-4 rounded-xl text-base transition-all inline-flex items-center justify-center"
              >
                See Our Process
              </Link>
            </div>
          </div>

          {/* Floating stats on right (desktop) */}
          <div className="hidden lg:block absolute top-1/2 right-0 -translate-y-1/2 animate-fade-up-delay-4">
            <div className="glass-card p-6 space-y-6 animate-float">
              {[
                { end: 12, suffix: "", label: "Week Programme", icon: "calendar" },
                { end: 3, suffix: "", label: "Ranking Pillars", icon: "layers" },
                { end: 15, suffix: "+", label: "Directories", icon: "globe" },
              ].map((s) => (
                <div key={s.label} className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-lg bg-gold/10 flex items-center justify-center text-gold">
                    {s.icon === "calendar" && <CalendarIcon />}
                    {s.icon === "layers" && <LayersIcon />}
                    {s.icon === "globe" && <GlobeIcon />}
                  </div>
                  <div>
                    <div className="text-xl font-bold text-white">
                      <AnimatedCounter end={s.end} suffix={s.suffix} duration={1500} />
                    </div>
                    <div className="text-xs text-white/40">{s.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mobile stats bar */}
      <section className="lg:hidden bg-navy-dark border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <div className="grid grid-cols-3 gap-4 text-center">
            {[
              { end: 12, suffix: "", label: "Week Programme" },
              { end: 3, suffix: "", label: "Ranking Pillars" },
              { end: 15, suffix: "+", label: "Directories" },
            ].map((stat) => (
              <div key={stat.label} className="stat-item">
                <div className="text-2xl font-bold text-gold">
                  <AnimatedCounter end={stat.end} suffix={stat.suffix} duration={1500} />
                </div>
                <div className="text-xs text-white/40 mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======= PROBLEM / SOLUTION ======= */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <span className="text-gold text-xs font-semibold uppercase tracking-widest">The Problem</span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mt-3 mb-4 tracking-tight section-divider">
              Your Customers Are Searching.
              <br />
              Are They Finding You?
            </h2>
            <p className="text-gray-500 mt-8 leading-relaxed">
              97% of consumers search online for local businesses. When someone
              searches &ldquo;plumber near me&rdquo; or &ldquo;best cafe
              Mandurah,&rdquo; Google shows 3 businesses on the map. The rest
              get skipped.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="accent-card p-7">
              <div className="w-12 h-12 bg-navy/5 text-navy rounded-xl flex items-center justify-center mb-5">
                <MapPinIcon />
              </div>
              <h3 className="font-semibold text-navy text-lg mb-2">Get Found Locally</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Appear in the Google Map Pack when customers search for your
                services in your area — not buried on page 2.
              </p>
            </div>
            <div className="accent-card p-7">
              <div className="w-12 h-12 bg-navy/5 text-navy rounded-xl flex items-center justify-center mb-5">
                <StarIcon />
              </div>
              <h3 className="font-semibold text-navy text-lg mb-2">Build Trust with Reviews</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                We help you get more Google reviews so people trust you
                enough to call.
              </p>
            </div>
            <div className="accent-card p-7">
              <div className="w-12 h-12 bg-navy/5 text-navy rounded-xl flex items-center justify-center mb-5">
                <TrendingUpIcon />
              </div>
              <h3 className="font-semibold text-navy text-lg mb-2">Track Real Results</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Monthly heatmap reports showing exactly where you rank across
                your service area — not vanity metrics, real data.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ======= THREE PILLARS ======= */}
      <section className="py-20 md:py-28 bg-[#f8f9fb]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <span className="text-gold text-xs font-semibold uppercase tracking-widest">Our Method</span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mt-3 mb-4 tracking-tight section-divider">
              The Three Pillars of Local Ranking
            </h2>
            <p className="text-gray-500 mt-8 leading-relaxed">
              Google looks at three things when ranking local businesses.
              We work on all three.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PillarCard
              number="01"
              title="Google Profile"
              subtitle="Weeks 2–4"
              description="We fix your categories, services, photos, and description so Google shows you for the right searches."
              items={[
                "Business category & services",
                "Description & attributes",
                "Photos & weekly posts",
                "Review generation",
              ]}
            />
            <PillarCard
              number="02"
              title="Website SEO"
              subtitle="Weeks 5–6"
              description="Your website backs up your Google listing. We add your address, a map, and the right keywords so Google ties them together."
              items={[
                "Location-targeted pages",
                "Map embed & business details",
                "Structured data markup",
                "Service & area pages",
              ]}
              featured
            />
            <PillarCard
              number="03"
              title="Directory Listings"
              subtitle="Weeks 7–10"
              description="Same name, address, and phone number on 15+ directories. Google checks these to decide if your business is legit."
              items={[
                "Google, Apple, Bing, Yelp",
                "Australian directories",
                "Industry-specific listings",
                "Consistency audit",
              ]}
            />
          </div>
        </div>
      </section>

      {/* ======= WHO WE HELP ======= */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="md:flex md:items-center md:gap-16">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <span className="text-gold text-xs font-semibold uppercase tracking-widest">Who We Help</span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mt-3 mb-6 tracking-tight">
                Built for Local
                <br />
                Service Businesses
              </h2>
              <p className="text-gray-500 leading-relaxed mb-6">
                We specialise in businesses that depend on local customers
                finding them on Google — tradies, professionals, and
                storefronts across the Mandurah, Rockingham, and Perth region.
              </p>
              <p className="text-gray-500 leading-relaxed mb-8">
                If your customers search for what you do on Google, and
                you&apos;re not showing up in the top 3 map results, we can
                help.
              </p>
              <div className="flex flex-wrap gap-2">
                <Link href="/areas/mandurah" className="text-sm font-medium text-gold border border-gold/30 rounded-full px-4 py-1.5 hover:bg-gold/5 transition-colors">
                  Mandurah
                </Link>
                <Link href="/areas/rockingham" className="text-sm font-medium text-gold border border-gold/30 rounded-full px-4 py-1.5 hover:bg-gold/5 transition-colors">
                  Rockingham
                </Link>
                <Link href="/areas/perth" className="text-sm font-medium text-gold border border-gold/30 rounded-full px-4 py-1.5 hover:bg-gold/5 transition-colors">
                  Perth
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="grid grid-cols-2 gap-3">
                {[
                  { name: "Tradies & Builders", icon: "wrench" },
                  { name: "Landscapers", icon: "tree" },
                  { name: "Cleaners", icon: "sparkles" },
                  { name: "Locksmiths", icon: "key" },
                  { name: "Celebrants", icon: "heart" },
                  { name: "Health & Beauty", icon: "star" },
                  { name: "Restaurants & Cafes", icon: "coffee" },
                  { name: "Professional Services", icon: "briefcase" },
                ].map((niche) => (
                  <div
                    key={niche.name}
                    className="group flex items-center gap-3 bg-white border border-gray-100 rounded-xl px-4 py-3.5 hover:border-gold/30 hover:shadow-sm transition-all"
                  >
                    <div className="w-8 h-8 rounded-lg bg-navy/5 group-hover:bg-gold/10 flex items-center justify-center transition-colors">
                      <NicheIcon name={niche.icon} />
                    </div>
                    <span className="text-sm font-medium text-navy">{niche.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======= CTA ======= */}
      <section className="hero-gradient py-20 md:py-24 relative">
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <span className="text-gold/70 text-xs font-semibold uppercase tracking-widest">Ready?</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-4 tracking-tight">
            See Where You Stand on Google
          </h2>
          <p className="text-white/50 mb-10 text-lg max-w-lg mx-auto">
            We&apos;ll audit your Google Business Profile for free and show you
            exactly what&apos;s holding you back.
          </p>
          <Link
            href="/contact"
            className="btn-glow inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-navy font-semibold px-8 py-4 rounded-xl text-base transition-colors"
          >
            Get Your Free Audit
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}

/* ---- SVG Icons ---- */

function MapPinIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
    </svg>
  );
}

function TrendingUpIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
    </svg>
  );
}

function LayersIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
    </svg>
  );
}

function NicheIcon({ name }: { name: string }) {
  const cls = "w-4 h-4 text-navy/40 group-hover:text-gold transition-colors";
  switch (name) {
    case "wrench":
      return <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.049.58.025 1.194-.14 1.743" /></svg>;
    case "tree":
      return <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-6m0 0l-3-3m3 3l3-3m-3-3V3m0 0L9 6m3-3l3 3" /></svg>;
    case "sparkles":
      return <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" /></svg>;
    case "key":
      return <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" /></svg>;
    case "heart":
      return <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" /></svg>;
    case "star":
      return <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" /></svg>;
    case "coffee":
      return <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.047 8.287 8.287 0 009 9.601a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" /></svg>;
    case "briefcase":
      return <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" /></svg>;
    default:
      return null;
  }
}

/* ---- Pillar Card ---- */

function PillarCard({
  number,
  title,
  subtitle,
  description,
  items,
  featured,
}: {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  items: string[];
  featured?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl p-7 transition-all relative ${
        featured
          ? "bg-navy text-white shadow-xl shadow-navy/20 ring-1 ring-gold/20 scale-[1.02]"
          : "bg-white border border-gray-100 hover:shadow-lg hover:border-gold/20"
      }`}
    >
      {featured && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="bg-gold text-navy text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
            Core
          </span>
        </div>
      )}
      <div className={`text-xs font-mono tracking-wider mb-1 ${featured ? "text-gold" : "text-gold"}`}>
        {number}
      </div>
      <h3 className={`text-xl font-bold mb-1 ${featured ? "text-white" : "text-navy"}`}>
        {title}
      </h3>
      <div className={`text-xs mb-4 ${featured ? "text-white/40" : "text-gray-400"}`}>
        {subtitle}
      </div>
      <p className={`text-sm leading-relaxed mb-5 ${featured ? "text-white/60" : "text-gray-500"}`}>
        {description}
      </p>
      <ul className="space-y-2.5">
        {items.map((item) => (
          <li key={item} className={`flex items-start gap-2.5 text-sm ${featured ? "text-white/70" : "text-gray-600"}`}>
            <svg
              className={`w-4 h-4 shrink-0 mt-0.5 ${featured ? "text-gold" : "text-gold"}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
