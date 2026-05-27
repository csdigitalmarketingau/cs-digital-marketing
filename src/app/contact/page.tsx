"use client";

import { useState } from "react";
import type { FormEvent } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [business, setBusiness] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Build mailto link with form data
    const subject = encodeURIComponent(
      `Free GBP Audit Request — ${business || name}`
    );
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nBusiness: ${business}\n\n${message}`
    );
    window.location.href = `mailto:coen@csdigitalmarketing.au?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <>
      {/* Header */}
      <section className="bg-navy text-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Request a free audit of your Google Business Profile, or just ask us
            anything.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Form */}
          <div>
            <h2 className="text-2xl font-bold text-navy mb-6">
              Request a Free Audit
            </h2>
            {submitted ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                <div className="text-3xl mb-3">✅</div>
                <h3 className="font-semibold text-green-800 mb-2">
                  Thanks for reaching out!
                </h3>
                <p className="text-green-700 text-sm">
                  Your email client should have opened with a pre-filled message.
                  If it didn&apos;t, send us an email directly at{" "}
                  <a
                    href="mailto:coen@csdigitalmarketing.au"
                    className="underline font-medium"
                  >
                    coen@csdigitalmarketing.au
                  </a>
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Business Name
                  </label>
                  <input
                    type="text"
                    value={business}
                    onChange={(e) => setBusiness(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
                    placeholder="Your Business Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
                    placeholder="Tell us about your business and what you're looking for..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gold hover:bg-gold-light text-navy font-semibold py-3.5 rounded-lg text-lg transition-colors"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Contact details */}
          <div>
            <h2 className="text-2xl font-bold text-navy mb-6">
              Contact Details
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">
                  Email
                </h3>
                <a
                  href="mailto:coen@csdigitalmarketing.au"
                  className="text-navy hover:text-gold transition-colors font-medium"
                >
                  coen@csdigitalmarketing.au
                </a>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">
                  Phone
                </h3>
                <a
                  href="tel:0466498861"
                  className="text-navy hover:text-gold transition-colors font-medium"
                >
                  0466 498 861
                </a>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">
                  Location
                </h3>
                <p className="text-gray-700">Mandurah, Western Australia</p>
                <p className="text-sm text-gray-500 mt-1">
                  Servicing Mandurah, Rockingham, and greater Perth.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">
                  Hours
                </h3>
                <p className="text-gray-700">Mon – Fri: 9am – 5pm AWST</p>
              </div>
            </div>

            <div className="mt-10 bg-gray-50 border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-navy mb-2">
                What happens after you reach out?
              </h3>
              <ol className="text-sm text-gray-600 space-y-2 list-decimal list-inside">
                <li>We&apos;ll reply within 24 hours</li>
                <li>
                  We run a free audit of your Google Business Profile
                </li>
                <li>
                  We walk you through the findings and what we&apos;d recommend
                </li>
                <li>You decide if you want to proceed — no pressure</li>
              </ol>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
