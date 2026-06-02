import fs from "fs";
import path from "path";

export type PostMeta = {
  title: string;
  description: string;
  excerpt: string;
  date: string; // ISO date string, e.g. "2026-06-02"
  keyword: string; // primary target keyword (used later for performance tracking)
  author: string;
};

export type Post = PostMeta & { slug: string };

const BLOG_DIR = path.join(process.cwd(), "src", "content", "blog");

export function getPostSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export async function getPost(slug: string): Promise<Post | null> {
  try {
    const mod = await import(`@/content/blog/${slug}.mdx`);
    const meta = mod.metadata as PostMeta;
    return { ...meta, slug };
  } catch {
    return null;
  }
}

export async function getAllPosts(): Promise<Post[]> {
  const slugs = getPostSlugs();
  const posts = await Promise.all(slugs.map((slug) => getPost(slug)));
  return posts
    .filter((p): p is Post => p !== null)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}
