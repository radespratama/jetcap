/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
//   env: {
//     GITHUB_REPO: process.env.GITHUB_REPO,
//     PUBLIC_API: process.env.PUBLIC_API,
//   },
// };

module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    GITHUB_REPO: process.env.GITHUB_REPO,
    PUBLIC_API: process.env.PUBLIC_API,
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
        ],
      },
    ];
  },
};
