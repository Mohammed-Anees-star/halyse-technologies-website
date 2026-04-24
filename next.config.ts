import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",   // Generates /out folder — required for Azure Static Web Apps, Netlify, S3, etc.
  trailingSlash: true, // Ensures /about → /about/index.html (better static hosting compatibility)
  images: {
    unoptimized: true, // Required when using output: "export" (no Next.js image server available)
  },
};

export default nextConfig;
