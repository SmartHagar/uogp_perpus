/**
 * @format
 * @type {import('next').NextConfig}
 */

// 127.0.0.1

const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
