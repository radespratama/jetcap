/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    GITHUB_REPO: process.env.GITHUB_REPO,
  },
};

module.exports = nextConfig;
