import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true, // required for GitHub Pages
  },
  basePath: "/portfolio",
  assetPrefix: "/portfolio/",
};

export default nextConfig;
