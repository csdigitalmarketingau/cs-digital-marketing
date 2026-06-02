import type { MDXComponents } from "mdx/types";
import Link from "next/link";

// Maps markdown elements to site-styled components so blog posts match the brand.
// Required by @next/mdx for the App Router.
const components: MDXComponents = {
  h2: ({ children }) => (
    <h2 className="text-2xl md:text-3xl font-bold text-navy mt-12 mb-4 tracking-tight">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-xl font-bold text-navy mt-8 mb-3 tracking-tight">
      {children}
    </h3>
  ),
  p: ({ children }) => (
    <p className="text-gray-500 leading-relaxed mb-4">{children}</p>
  ),
  ul: ({ children }) => (
    <ul className="space-y-2 mb-6 ml-1">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="space-y-2 mb-6 ml-5 list-decimal text-gray-500">{children}</ol>
  ),
  li: ({ children }) => (
    <li className="flex items-start gap-2 text-gray-500 leading-relaxed">
      <svg
        className="w-4 h-4 text-gold shrink-0 mt-1"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        strokeWidth={2.5}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
      <span>{children}</span>
    </li>
  ),
  a: ({ href, children }) => {
    const url = href ?? "#";
    const isInternal = url.startsWith("/");
    if (isInternal) {
      return (
        <Link href={url} className="text-gold hover:underline font-medium">
          {children}
        </Link>
      );
    }
    return (
      <a
        href={url}
        className="text-gold hover:underline font-medium"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  },
  strong: ({ children }) => (
    <strong className="font-semibold text-navy">{children}</strong>
  ),
  blockquote: ({ children }) => (
    <blockquote className="border-l-4 border-gold/40 pl-5 py-1 my-6 text-gray-600 italic">
      {children}
    </blockquote>
  ),
  hr: () => <hr className="my-10 border-gray-200" />,
  h1: ({ children }) => (
    <h1 className="text-4xl font-bold text-navy mb-6 tracking-tight">
      {children}
    </h1>
  ),
};

export function useMDXComponents(): MDXComponents {
  return components;
}
