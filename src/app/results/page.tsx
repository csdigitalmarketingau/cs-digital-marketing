import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Results",
  description:
    "See real results from our Google Business Profile optimisation work. Case studies and before-and-after data from local businesses.",
};

export default function Results() {
  return (
    <>
      {/* Header */}
      <section className="bg-navy text-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">Results</h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Real data from real local businesses.
          </p>
        </div>
      </section>

      {/* Coming soon placeholder */}
      <section className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="w-16 h-16 bg-gold/10 text-gold rounded-2xl flex items-center justify-center mx-auto mb-6 text-3xl">
            📊
          </div>
          <h2 className="text-2xl font-bold text-navy mb-4">
            Case Studies Coming Soon
          </h2>
          <p className="text-gray-600 leading-relaxed mb-8 max-w-lg mx-auto">
            We&apos;re currently working with our first clients through the
            12-week optimisation programme. Detailed before-and-after case
            studies with real ranking data will be published here as results
            come in.
          </p>
          <p className="text-gray-500 text-sm mb-10">
            In the meantime, we&apos;re happy to walk you through our process and
            show you what we&apos;d do for your business specifically.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-gold hover:bg-gold-light text-navy font-semibold px-8 py-3.5 rounded-lg text-lg transition-colors"
          >
            Get a Free Audit
          </Link>
        </div>
      </section>
    </>
  );
}
