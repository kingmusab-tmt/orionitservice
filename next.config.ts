import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  images: {
    qualities: [100, 75],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(self)",
          },
        ],
      },
      {
        source: "/sw.js",
        headers: [
          {
            key: "Cache-Control",
            value: "no-cache, no-store, must-revalidate",
          },
          { key: "Content-Type", value: "application/javascript" },
        ],
      },
      {
        source: "/sitemap(.*).xml",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400, must-revalidate",
          },
          { key: "Content-Type", value: "application/xml" },
        ],
      },
      {
        source: "/robots.txt",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400, must-revalidate",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      // Redirect non-www to www for canonical consistency
      {
        source: "/:path*",
        has: [{ type: "host", value: "orionitservice.com" }],
        destination: "https://www.orionitservice.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
