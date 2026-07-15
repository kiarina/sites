import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/sites",
  assetPrefix: "/sites/",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
