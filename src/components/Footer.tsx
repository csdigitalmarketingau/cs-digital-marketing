import Link from "next/link";
import Image from "next/image";

const serviceLinks = [
  { href: "/services", label: "All Services" },
  { href: "/services/gbp-optimisation", label: "GBP Optimisation" },
  { href: "/services/local-seo", label: "Local SEO" },
  { href: "/services/citation-building", label: "Citation Building" },
  { href: "/services/on-page-seo", label: "On-Page SEO" },
  { href: "/services/review-management", label: "Review Management" },
];

const industryLinks = [
  { href: "/industries", label: "All Industries" },
  { href: "/industries/plumbers", label: "Plumbers" },
  { href: "/industries/electricians", label: "Electricians" },
  { href: "/industries/builders", label: "Builders" },
  { href: "/industries/cleaners", label: "Cleaners" },
  { href: "/industries/landscapers", label: "Landscapers" },
  { href: "/industries/locksmiths", label: "Locksmiths" },
  { href: "/industries/celebrants", label: "Celebrants" },
  { href: "/industries/health-beauty", label: "Health & Beauty" },
  { href: "/industries/restaurants-cafes", label: "Restaurants & Cafes" },
  { href: "/industries/professional-services", label: "Professional Services" },
];

const companyLinks = [
  { href: "/process", label: "Our Process" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

const areaLinks = [
  { href: "/areas/mandurah", label: "Mandurah" },
  { href: "/areas/rockingham", label: "Rockingham" },
  { href: "/areas/perth", label: "Perth" },
];

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string }[];
}) {
  return (
    <div>
      <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-3">
        {title}
      </h3>
      <ul className="space-y-2">
        {links.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              className="text-sm hover:text-gold transition-colors"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-dark text-white/60">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <Image
              src="/logo.png"
              alt="CS Digital Marketing"
              width={100}
              height={34}
              className="h-16 w-auto opacity-70"
            />
            <p className="text-sm mt-3 leading-relaxed">
              Helping local businesses in Mandurah and surrounding areas get
              found on Google.
            </p>
          </div>

          <FooterColumn title="Services" links={serviceLinks} />
          <FooterColumn title="Industries" links={industryLinks} />
          <FooterColumn title="Service Areas" links={areaLinks} />
          <FooterColumn title="Company" links={companyLinks} />

          {/* Contact info */}
          <div>
            <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-3">
              Contact
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="mailto:coen@csdigitalmarketing.au"
                  className="hover:text-gold transition-colors break-words"
                >
                  coen@csdigitalmarketing.au
                </a>
              </li>
              <li>
                <a
                  href="tel:+61466498861"
                  className="hover:text-gold transition-colors"
                >
                  0466 498 861
                </a>
              </li>
              <li>Mandurah, Western Australia</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 text-xs text-center">
          &copy; {year} CS Digital Marketing. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
