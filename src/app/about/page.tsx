import type { Metadata } from "next";
import Link from "next/link";

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
      {/* Header */}
      <section className="hero-gradient dot-pattern text-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">
            Local SEO Agency in Mandurah
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Helping local businesses get the visibility they deserve on Google.
          </p>
        </div>
      </section>

      {/* Founder section */}
      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="md:flex md:gap-12 md:items-start">
            {/* Founder info */}
            <div className="md:flex-1">
              <div className="inline-block text-gold text-sm font-semibold uppercase tracking-wider mb-4 border border-gold/30 rounded-full px-4 py-1.5">
                Meet the Founder
              </div>
              <h2 className="text-2xl font-bold text-navy mb-6">
                Coen Stewart
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
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
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-navy mb-4 text-center">
            How I Work
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-10">
            Every recommendation is based on data — your current rankings, your
            competitors&apos; profiles, and what Google&apos;s algorithm actually
            rewards for local search.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
                title: "Full Transparency",
                desc: "You see everything I do. Weekly email updates, monthly ranking reports, no black boxes. If I can't explain why I'm doing something, I don't do it.",
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                  </svg>
                ),
                title: "Measurable Results",
                desc: "Before-and-after heatmap tracking on every metric. If it can't be measured, I don't promise it. You'll see exactly how your rankings change.",
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5V6.75a4.5 4.5 0 119 0v3.75M3.75 21.75h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H3.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                  </svg>
                ),
                title: "No Lock-in Contracts",
                desc: "The 12-week programme is a one-time engagement. Monthly maintenance after that is optional. I earn your business by delivering results, not by locking you in.",
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                ),
                title: "One Thing, Done Well",
                desc: "I don't offer web design, social media management, or paid ads. I specialise in GBP optimisation and local ranking. That focus means better results for you.",
              },
            ].map((v) => (
              <div
                key={v.title}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md hover:border-gold/30 transition-all"
              >
                <div className="w-10 h-10 bg-gold/10 text-gold rounded-lg flex items-center justify-center mb-3">
                  {v.icon}
                </div>
                <h3 className="font-semibold text-navy text-lg mb-2">{v.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-gradient py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Want to Work Together?
          </h2>
          <p className="text-white/70 mb-8">
            Reach out for a free audit of your Google Business Profile. I&apos;ll
            show you what&apos;s working, what&apos;s not, and what I&apos;d do
            about it.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-gold hover:bg-gold-light text-navy font-semibold px-8 py-3.5 rounded-lg text-lg transition-colors shadow-lg shadow-gold/20"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
