/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "doodleipsum.com",
        port: "",
        pathname: "/700x700/**",
      },
      {
        protocol: "https",
        hostname: "doodleipsum.com",
        port: "",
        pathname: "/700x394/**",
      },
      {
        protocol: "https",
        hostname: "cloudflare-ipfs.com",
        port: "",
        pathname: "/ipfs/**",
      },
    ],
  },
};

module.exports = nextConfig;
