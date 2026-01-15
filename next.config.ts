import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const repoPath = "/portfolio";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true, // required for GitHub Pages
  },
  ...(isProd && {
    basePath: repoPath,
    assetPrefix: repoPath,
  }),
};

export default nextConfig;
