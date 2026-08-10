import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
    formats: ["image/avif", "image/webp"],
  },
  // One canonical URL shape only — trailing-slash duplicates split ranking
  // signals between two versions of the same page.
  trailingSlash: false,
  poweredByHeader: false,
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
