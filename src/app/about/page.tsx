import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About CS Digital Marketing | GBP Specialists Mandurah",
  description:
    "CS Digital Marketing is a local SEO agency based in Mandurah, WA. Founded by Coen Stewart, we specialise in Google Business Profile optimisation for local businesses across Mandurah, Rockingham, and Perth.",
  alternates: {
    canonical: "https://csdigitalmarketing.au/about",
  },
};

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient text-white py-20 md:py-28 relative">
        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          <span className="inline-flex items-center gap-2 text-gold/90 text-xs font-semibold uppercase tracking-widest mb-6">
            <span className="w-8 h-px bg-gold/60" />
            About Us
            <span className="w-8 h-px bg-gold/60" />
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-5 tracking-tight">
            Local SEO Agency in{" "}
            <span className="gold-gradient-text">Mandurah</span>
          </h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
            Helping local businesses get the visibility they deserve on Google.
          </p>
        </div>
      </section>

      {/* Founder section */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6">
          <div className="md:flex md:gap-12 md:items-start">
            {/* Headshot */}
            <div className="mb-8 md:mb-0 md:w-64 shrink-0">
              <div className="relative">
                <Image
                  src="/coen-stewart.jpg"
                  alt="Coen Stewart — Founder of CS Digital Marketing"
                  width={256}
                  height={320}
                  className="rounded-2xl object-cover w-full shadow-lg"
                />
                <div className="absolute -bottom-3 -right-3 bg-gold text-navy text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-md">
                  Founder
                </div>
              </div>
            </div>
            <div className="md:flex-1">
              <span className="text-gold text-xs font-semibold uppercase tracking-widest">
                Meet the Founder
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mt-3 mb-6 tracking-tight">
                Coen Stewart
              </h2>
              <div className="space-y-4 text-gray-500 leading-relaxed">
                <p>
                  I started CS Digital Marketing because I saw the same problem
                  over and over: great local businesses that were invisible
                  online. They were relying on word of mouth while competitors
                  with optimised Google profiles were taking the calls.
                </p>
                <p>
                  I focus on one thing — getting local businesses found on
                  Google. No fluff, no thousand-dollar retainers for vague
                  &ldquo;digital strategy.&rdquo; Just practical, measurable
                  work on the platform that matters most for local search: your
                  Google Business Profile.
                </p>
                <p>
                  Based in Mandurah, I work with service-area businesses and
                  local storefronts across Rockingham, Baldivis, Pinjarra, and
                  greater Perth. Every client gets the same systematic,
                  data-driven approach: audit, optimise, build citations, track
                  results.
                </p>
                <p>
                  I built proprietary tools to track rankings, manage citations,
                  and generate detailed reports — so you always know exactly
                  where you stand and what&apos;s been done.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28 bg-[#f8f9fb]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-gold text-xs font-semibold uppercase tracking-widest">
              Our Values
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mt-3 mb-4 tracking-tight section-divider">
              How I Work
            </h2>
            <p className="text-gray-500 mt-8 max-w-2xl mx-auto leading-relaxed">
              Every recommendation is based on data — your current rankings,
              your competitors&apos; profiles, and what Google&apos;s algorithm
              actually rewards for local search.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                ),
                title: "Full Transparency",
                desc: "You see everything I do. Weekly email updates, monthly ranking reports, no black boxes. If I can't explain why I'm doing something, I don't do it.",
              },
              {
                icon: (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
                    />
                  </svg>
                ),
                title: "Measurable Results",
                desc: "Before-and-after heatmap tracking on every metric. If it can't be measured, I don't promise it. You'll see exactly how your rankings change.",
              },
              {
                icon: (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 10.5V6.75a4.5 4.5 0 119 0v3.75M3.75 21.75h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H3.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                    />
                  </svg>
                ),
                title: "No Lock-in Contracts",
                desc: "The 12-week programme is a one-time engagement. Monthly maintenance after that is optional. I earn your business by delivering results, not by locking you in.",
              },
              {
                icon: (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                ),
                title: "One Thing, Done Well",
                desc: "I don't offer web design, social media management, or paid ads. I specialise in GBP optimisation and local ranking. That focus means better results for you.",
              },
            ].map((v) => (
              <div key={v.title} className="accent-card p-7">
                <div className="w-10 h-10 bg-gold/10 text-gold rounded-lg flex items-center justify-center mb-4">
                  {v.icon}
                </div>
                <h3 className="font-semibold text-navy text-lg mb-2">
                  {v.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-gradient py-20 md:py-24 relative">
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <span className="text-gold/70 text-xs font-semibold uppercase tracking-widest">
            Let&apos;s Talk
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-4 tracking-tight">
            Want to Work Together?
          </h2>
          <p className="text-white/50 mb-10 text-lg max-w-lg mx-auto">
            Reach out for a free audit of your Google Business Profile.
            I&apos;ll show you what&apos;s working, what&apos;s not, and what
            I&apos;d do about it.
          </p>
          <Link
            href="/contact"
            className="btn-glow inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-navy font-semibold px-8 py-4 rounded-xl text-base transition-colors"
          >
            Get in Touch
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
