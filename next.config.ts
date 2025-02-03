import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.valorant-api.com',
      },
      {
        protocol: 'https',
        hostname: 'images.contentstack.io',
      },
      {
        protocol: 'https',
        hostname: 'cmsassets.rgpub.io',
      },
    ],
  },
};

export default nextConfig;
