import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
};

const withMDX = createMDX({
  // No remark/rehype plugins: keeps Turbopack happy (it can't take JS-function
  // plugin options). Frontmatter is handled via `export const metadata` in each post.
});

export default withMDX(nextConfig);
