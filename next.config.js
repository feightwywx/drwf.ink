/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.direcore.xyz',
      },
      {
        protocol: 'https',
        hostname: '**.drwf.ink',
      },
    ],
  },
};

module.exports = nextConfig;
