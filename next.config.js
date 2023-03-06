/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "beta.mejorconsalud.com",
      "mejorconsalud.as.com",
      "cdn.pixabay.com",
    ],
  },
};

module.exports = nextConfig;
