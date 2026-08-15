import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/zdev",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
