import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/Breadcrumb";
import { getPostSlugs, type PostMeta } from "@/lib/blog";

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export const dynamicParams = false;

async function loadPost(slug: string) {
  try {
    const mod = await import(`@/content/blog/${slug}.mdx`);
    return {
      Post: mod.default as React.ComponentType,
      meta: mod.metadata as PostMeta,
    };
  } catch {
    return null;
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const loaded = await loadPost(slug);
  if (!loaded) return {};
  return {
    title: loaded.meta.title,
    description: loaded.meta.description,
    alternates: { canonical: `https://csdigitalmarketing.au/blog/${slug}` },
  };
}

function formatDate(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number);
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
  ];
  return `${d} ${months[m - 1]} ${y}`;
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const loaded = await loadPost(slug);
  if (!loaded) notFound();
  const { Post, meta } = loaded;

  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: meta.title,
    description: meta.description,
    datePublished: meta.date,
    dateModified: meta.date,
    author: { "@type": "Person", name: meta.author },
    publisher: {
      "@type": "Organization",
      name: "CS Digital Marketing",
      logo: {
        "@type": "ImageObject",
        url: "https://csdigitalmarketing.au/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://csdigitalmarketing.au/blog/${slug}`,
    },
    image: "https://csdigitalmarketing.au/logo.png",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: meta.title },
        ]}
      />

      <article className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6">
          {/* Header */}
          <header className="mb-10">
            <div className="flex items-center gap-3 text-xs text-gold font-semibold uppercase tracking-widest mb-4">
              <time dateTime={meta.date}>{formatDate(meta.date)}</time>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-navy tracking-tight leading-tight">
              {meta.title}
            </h1>
            <p className="text-lg text-gray-500 mt-4 leading-relaxed">
              {meta.excerpt}
            </p>
            <div className="mt-6 pt-6 border-t border-gray-100 text-sm text-gray-400">
              By {meta.author}
            </div>
          </header>

          {/* Body */}
          <div className="blog-body">
            <Post />
          </div>

          {/* Inline CTA */}
          <div className="mt-12 bg-[#f8f9fb] border border-gray-100 rounded-2xl p-8 text-center">
            <h2 className="text-xl font-bold text-navy mb-2 tracking-tight">
              Want help with your Google Business Profile?
            </h2>
            <p className="text-gray-500 text-sm mb-6 max-w-md mx-auto">
              We will audit your profile for free and show you exactly what to
              fix to rank in the Google Map Pack.
            </p>
            <Link
              href="/contact"
              className="btn-glow inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-navy font-semibold px-6 py-3 rounded-xl text-sm transition-colors"
            >
              Get Your Free Audit
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
