import Link from "next/link";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

export function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      ...(item.href
        ? { item: `https://csdigitalmarketing.au${item.href}` }
        : {}),
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <nav
        aria-label="breadcrumb"
        className="bg-[#f8f9fb] border-b border-gray-100"
      >
        <div className="max-w-6xl mx-auto px-6 py-3">
          <ol className="flex items-center gap-1.5 text-xs text-gray-400 flex-wrap">
            {items.map((item, index) => (
              <li key={item.label} className="flex items-center gap-1.5">
                {index > 0 && (
                  <svg
                    className="w-3 h-3 text-gray-300 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                )}
                {item.href && index < items.length - 1 ? (
                  <Link
                    href={item.href}
                    className="hover:text-gold transition-colors"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className={index === items.length - 1 ? "text-navy font-medium" : ""}>
                    {item.label}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </>
  );
}
