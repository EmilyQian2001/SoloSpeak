/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: "*.googleusercontent.com",
      },
      {
        hostname: "images.unsplash.com",
      },
      {
        hostname: "scontent-xsp1-2.xx.fbcdn.net",
      },
    ],
  },
};

module.exports = nextConfig;
