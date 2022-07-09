/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

// for the contentful images
const imageOptimization = {
  images: { domains: ["images.ctfassets.net"] },
};

module.exports = nextConfig && imageOptimization;
