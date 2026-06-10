import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How CS Digital Marketing collects, uses, stores, and protects your personal information.",
  alternates: { canonical: "https://csdigitalmarketing.au/privacy" },
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-8">
      <h2 className="text-xl font-bold text-navy mb-3 tracking-tight">{title}</h2>
      <div className="text-gray-600 leading-relaxed space-y-3">{children}</div>
    </section>
  );
}

export default function PrivacyPolicy() {
  return (
    <>
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]} />

      <section className="hero-gradient text-white py-16 md:py-20 relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
            <span className="gold-gradient-text">Privacy Policy</span>
          </h1>
          <p className="text-white/60">Last updated: 10 June 2026</p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-6 py-16 md:py-20">
        <p className="text-gray-600 leading-relaxed mb-10">
          CS Digital Marketing (&ldquo;we&rdquo;, &ldquo;us&rdquo;) is a local marketing
          business based in Mandurah, Western Australia. This policy explains what personal
          information we collect through this website, how we use it, and the choices you have.
          We keep it short and plain on purpose.
        </p>

        <Section title="What we collect">
          <p>
            When you fill in our contact or audit-request form, we collect the details you give
            us: your name, email address, phone number, business name, and any message you send.
          </p>
          <p>
            We also collect basic, aggregate website analytics (such as page views and general
            location) to understand how the site is used. This analytics data does not identify
            you personally.
          </p>
        </Section>

        <Section title="How we use it">
          <p>We use your information to:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>respond to your enquiry and provide a free audit or quote;</li>
            <li>deliver our services if you become a client;</li>
            <li>improve how this website works.</li>
          </ul>
          <p>We do not sell your information, and we do not send marketing you did not ask for.</p>
        </Section>

        <Section title="Where it is stored">
          <p>
            Form submissions are stored securely in our database and customer-management tools,
            and are sent to our business email. We use trusted third-party providers (for
            hosting, our database, and email) to run the site and our business. Some of these
            providers may store data on servers located outside Australia. We only share your
            information with providers that help us operate, and only as needed.
          </p>
        </Section>

        <Section title="How long we keep it">
          <p>
            We keep your information only as long as we need it to respond to you or to provide
            our services, after which it is deleted or archived.
          </p>
        </Section>

        <Section title="Your choices">
          <p>
            You can ask us to access, correct, or delete the personal information we hold about
            you at any time. Just email us and we will action it.
          </p>
        </Section>

        <Section title="Security">
          <p>
            We take reasonable steps to protect your information from loss, misuse, and
            unauthorised access. No method of transmission over the internet is completely
            secure, but we work to keep your data safe.
          </p>
        </Section>

        <Section title="Changes">
          <p>
            We may update this policy from time to time. The latest version will always be on
            this page, with the date it was last updated shown above.
          </p>
        </Section>

        <Section title="Contact">
          <p>
            Questions about your privacy or this policy? Email{" "}
            <a href="mailto:coen@csdigitalmarketing.au" className="text-gold hover:underline">
              coen@csdigitalmarketing.au
            </a>
            .
          </p>
        </Section>
      </div>
    </>
  );
}
