import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "CS Digital Marketing helps local businesses in Mandurah and Perth get found on Google through professional GBP optimisation.",
};

export default function About() {
  return (
    <>
      {/* Header */}
      <section className="bg-navy text-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">About CS Digital Marketing</h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Helping local businesses get the visibility they deserve.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-navy mb-6">Why We Exist</h2>
          <div className="prose prose-gray max-w-none space-y-4 text-gray-700 leading-relaxed">
            <p>
              Most local businesses are great at what they do — but invisible
              online. They rely on word of mouth and hope that&apos;s enough.
              Meanwhile, competitors with optimised Google Business Profiles are
              taking the calls.
            </p>
            <p>
              CS Digital Marketing was built to fix that. We focus on one thing:
              getting local businesses found on Google. No fluff, no
              thousand-dollar retainers for vague &ldquo;digital strategy.&rdquo; Just
              practical, measurable work on the platform that matters most for
              local search — your Google Business Profile.
            </p>
            <p>
              We&apos;re based in Mandurah, Western Australia, and we work with
              service-area businesses and local storefronts across Perth and
              regional WA. Every client gets the same systematic approach:
              audit, optimise, build citations, track results.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-navy mb-6 mt-12">
            Our Approach
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              We don&apos;t do guesswork. Every recommendation is based on data —
              your current rankings, your competitors&apos; profiles, and what
              Google&apos;s algorithm actually rewards for local search.
            </p>
            <p>We believe in:</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            {[
              {
                title: "Transparency",
                desc: "You see everything we do. Weekly updates, monthly reports, no black boxes.",
              },
              {
                title: "Measurable Results",
                desc: "Before-and-after tracking on every metric. If it can't be measured, we don't promise it.",
              },
              {
                title: "No Lock-in",
                desc: "We earn your business every month. No long-term contracts required.",
              },
              {
                title: "One Thing, Done Well",
                desc: "We specialise in GBP optimisation. That focus means better results for you.",
              },
            ].map((v) => (
              <div
                key={v.title}
                className="bg-gray-50 border border-gray-200 rounded-lg p-5"
              >
                <h3 className="font-semibold text-navy mb-1">{v.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-navy mb-4">
            Want to Work Together?
          </h2>
          <p className="text-gray-600 mb-8">
            Reach out for a free audit of your Google Business Profile. We&apos;ll
            show you what&apos;s working, what&apos;s not, and what we&apos;d do about it.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-gold hover:bg-gold-light text-navy font-semibold px-8 py-3.5 rounded-lg text-lg transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
