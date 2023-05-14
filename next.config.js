/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  env: {
    PUBLIC_URL: "/",
  },
  sassOptions: {
    includePaths: ["src/styles"],
  },
  // images: {
  //   path: "public/",
  //   unoptimized: true,
  // },
};

module.exports = nextConfig;
