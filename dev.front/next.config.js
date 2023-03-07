/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: { appDir: true },
  publicRuntimeConfig: {
    apiUrl: process.env.API_URL,
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/resources/company",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
