import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Note: we intentionally do NOT set `output: "standalone"` here.
  // OpenNext for Cloudflare handles the build output transformation
  // via open-next.config.ts and the build:cloudflare script.
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  // Disable the Next.js dev overlay (the circular "N" button in bottom-left).
  devIndicators: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "z-cdn.chatglm.cn",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
