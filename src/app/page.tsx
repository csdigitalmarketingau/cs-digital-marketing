import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-white py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Get Your Business Found
            <br />
            <span className="text-gold">on Google</span>
          </h1>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-8 leading-relaxed">
            We optimise your Google Business Profile so local customers find you
            first. More visibility. More calls. More jobs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gold hover:bg-gold-light text-navy font-semibold px-8 py-3.5 rounded-lg text-lg transition-colors"
            >
              Get a Free Audit
            </Link>
            <Link
              href="/services"
              className="border border-white/30 hover:border-white/60 text-white font-medium px-8 py-3.5 rounded-lg text-lg transition-colors"
            >
              How It Works
            </Link>
          </div>
        </div>
      </section>

      {/* Problem / Solution */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-navy text-center mb-4">
            Your Customers Are Searching. Are They Finding You?
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            97% of consumers search online for local businesses. If your Google
            Business Profile isn&apos;t optimised, you&apos;re invisible to the people
            who need your services right now.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card
              icon="📍"
              title="Get Found Locally"
              description="Appear in the Google Map Pack when customers search for your services in your area."
            />
            <Card
              icon="⭐"
              title="Build Trust with Reviews"
              description="A structured review strategy that builds social proof and improves your ranking."
            />
            <Card
              icon="📈"
              title="Track Real Results"
              description="Monthly reports showing your ranking improvements, visibility growth, and new leads."
            />
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-navy text-center mb-4">
            What We Do
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            A systematic 12-week programme to get your Google Business Profile
            ranking where it should be.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                step: "1",
                title: "Audit & Benchmark",
                desc: "We run a full audit of your current profile, rankings, and competitor landscape. This becomes your baseline.",
              },
              {
                step: "2",
                title: "Profile Optimisation",
                desc: "Categories, description, services, attributes, photos — every element of your profile optimised for maximum relevance.",
              },
              {
                step: "3",
                title: "Citations & Consistency",
                desc: "We build and verify your business listings across key directories, ensuring your name, address, and phone are consistent everywhere.",
              },
              {
                step: "4",
                title: "Monitor & Report",
                desc: "Weekly progress tracking with monthly reports. You see exactly what changed and why your phone is ringing more.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="flex gap-4 bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 bg-gold/10 text-gold font-bold rounded-lg flex items-center justify-center shrink-0 text-lg">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-semibold text-navy text-lg mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Get Found?
          </h2>
          <p className="text-white/70 mb-8 text-lg">
            We&apos;ll audit your Google Business Profile for free and show you
            exactly what&apos;s holding you back.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-gold hover:bg-gold-light text-navy font-semibold px-8 py-3.5 rounded-lg text-lg transition-colors"
          >
            Get Your Free Audit
          </Link>
        </div>
      </section>
    </>
  );
}

function Card({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-md transition-shadow">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="font-semibold text-navy text-lg mb-2">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  );
}
