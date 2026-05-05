import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    // Allow external avatar images from pravatar.cc (testimonial photos)
    remotePatterns: [
      new URL("https://i.pravatar.cc/**"),
    ],
    // Next.js 16 requires explicit qualities allowlist
    qualities: [75, 90, 100],
  },
};

export default nextConfig;
