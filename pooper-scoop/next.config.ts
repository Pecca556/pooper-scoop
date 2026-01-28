import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compiler: {
    // Remove React properties for production builds
    reactRemoveProperties: true,
  },
  // Target modern browsers to avoid unnecessary polyfills
  experimental: {
    // Use SWC with modern target
    forceSwcTransforms: true,
  },
};

export default nextConfig;
