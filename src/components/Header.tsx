"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";

type NavItem = {
  href: string;
  label: string;
  children?: { href: string; label: string }[];
};

const nav: NavItem[] = [
  { href: "/", label: "Home" },
  {
    href: "/services",
    label: "Services",
    children: [
      { href: "/services", label: "All Services" },
      { href: "/services/gbp-optimisation", label: "GBP Optimisation" },
      { href: "/services/local-seo", label: "Local SEO" },
      { href: "/services/citation-building", label: "Citation Building" },
      { href: "/services/on-page-seo", label: "On-Page SEO" },
      { href: "/services/review-management", label: "Review Management" },
    ],
  },
  {
    href: "/industries",
    label: "Industries",
    children: [
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
    ],
  },
  { href: "/process", label: "Our Process" },
  {
    href: "/areas/mandurah",
    label: "Areas",
    children: [
      { href: "/areas/mandurah", label: "Mandurah" },
      { href: "/areas/rockingham", label: "Rockingham" },
      { href: "/areas/perth", label: "Perth" },
    ],
  },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

function DropdownItem({
  item,
  pathname,
  onNavigate,
}: {
  item: NavItem;
  pathname: string;
  onNavigate?: () => void;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const timeout = useRef<ReturnType<typeof setTimeout>>(null);

  const isActive =
    pathname === item.href ||
    item.children?.some((c) => pathname === c.href);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  if (!item.children) {
    return (
      <Link
        href={item.href}
        onClick={onNavigate}
        className={`text-sm transition-colors ${
          pathname === item.href
            ? "text-gold font-semibold"
            : "text-white/80 hover:text-gold"
        }`}
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={() => {
        if (timeout.current) clearTimeout(timeout.current);
        setOpen(true);
      }}
      onMouseLeave={() => {
        timeout.current = setTimeout(() => setOpen(false), 150);
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        className={`text-sm transition-colors flex items-center gap-1 cursor-pointer ${
          isActive ? "text-gold font-semibold" : "text-white/80 hover:text-gold"
        }`}
        aria-expanded={open}
        aria-haspopup="true"
      >
        {item.label}
        <svg
          className={`w-3 h-3 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {open && (
        <div className="absolute top-full left-0 mt-2 w-52 bg-navy-dark border border-white/10 rounded-xl shadow-xl shadow-navy-dark/40 py-2 z-50">
          {item.children.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              onClick={() => {
                setOpen(false);
                onNavigate?.();
              }}
              className={`block px-4 py-2 text-sm transition-colors ${
                pathname === child.href
                  ? "text-gold font-medium bg-white/5"
                  : "text-white/70 hover:text-gold hover:bg-white/5"
              }`}
            >
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const pathname = usePathname();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setMobileExpanded(null);
  }, [pathname]);

  return (
    <header className="bg-navy text-white sticky top-0 z-50 shadow-lg shadow-navy-dark/20">
      <div className="max-w-6xl mx-auto px-6 py-2 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="CS Digital Marketing"
            width={120}
            height={40}
            className="h-10 w-auto"
            priority
          />
          <span className="text-[11px] font-light tracking-[0.25em] uppercase text-white/70 leading-tight hidden sm:block">
            Digital
            <br />
            Marketing
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {nav.map((item) => (
            <DropdownItem
              key={item.href}
              item={item}
              pathname={pathname}
            />
          ))}
          <Link
            href="/contact"
            className="bg-gold hover:bg-gold-light text-navy font-semibold text-sm px-5 py-2.5 rounded-xl transition-colors shadow-sm shadow-gold/20"
          >
            Free Audit
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-white/80 hover:text-white"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {mobileOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="md:hidden border-t border-white/10 px-6 py-4 space-y-1">
          {nav.map((item) => {
            if (!item.children) {
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block text-sm py-2 transition-colors ${
                    pathname === item.href
                      ? "text-gold font-semibold"
                      : "text-white/80 hover:text-gold"
                  }`}
                >
                  {item.label}
                </Link>
              );
            }

            const isExpanded = mobileExpanded === item.label;
            const isActive = item.children.some((c) => pathname === c.href);

            return (
              <div key={item.href}>
                <button
                  onClick={() =>
                    setMobileExpanded(isExpanded ? null : item.label)
                  }
                  className={`flex items-center justify-between w-full text-sm py-2 transition-colors cursor-pointer ${
                    isActive
                      ? "text-gold font-semibold"
                      : "text-white/80 hover:text-gold"
                  }`}
                >
                  {item.label}
                  <svg
                    className={`w-3 h-3 transition-transform ${
                      isExpanded ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {isExpanded && (
                  <div className="pl-4 space-y-1 pb-2">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className={`block text-sm py-1.5 transition-colors ${
                          pathname === child.href
                            ? "text-gold font-medium"
                            : "text-white/60 hover:text-gold"
                        }`}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
          <Link
            href="/contact"
            className="block bg-gold hover:bg-gold-light text-navy font-semibold text-sm px-5 py-2.5 rounded-xl transition-colors text-center mt-3 shadow-sm shadow-gold/20"
          >
            Free Audit
          </Link>
        </nav>
      )}
    </header>
  );
}
