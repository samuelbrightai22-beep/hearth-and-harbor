import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  // Disable the Next.js dev overlay (the circular "N" button in bottom-left).
  // This removes the dev-only indicator from the page entirely.
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
