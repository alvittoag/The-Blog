/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["media.cakeresume.com", "cdn.sanity.io"],
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
