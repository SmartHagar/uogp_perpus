/**
 * @format
 * @type {import('next').NextConfig}
 */

// 127.0.0.1

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["127.0.0.1", "images.unsplash.com"],
  },
};

module.exports = nextConfig;
