import Link from "next/link";
import Image from "next/image";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-dark text-white/60">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Image
              src="/logo.png"
              alt="CS Digital Marketing"
              width={100}
              height={34}
              className="h-10 w-auto opacity-70"
            />
            <p className="text-sm mt-3 leading-relaxed">
              Helping local businesses in Mandurah and surrounding areas get
              found on Google.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-3">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                { href: "/services", label: "Services" },
                { href: "/process", label: "Our Process" },
                { href: "/about", label: "About" },
                { href: "/contact", label: "Contact" },
              ].map(({ href, label }) => (
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

          {/* Service areas */}
          <div>
            <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-3">
              Service Areas
            </h3>
            <ul className="space-y-2">
              {[
                { href: "/areas/mandurah", label: "Mandurah" },
                { href: "/areas/rockingham", label: "Rockingham" },
                { href: "/areas/perth", label: "Perth" },
              ].map(({ href, label }) => (
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

          {/* Contact info */}
          <div>
            <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-3">
              Contact
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="mailto:coen@csdigitalmarketing.au"
                  className="hover:text-gold transition-colors"
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
