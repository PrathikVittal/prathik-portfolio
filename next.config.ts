/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: { unoptimized: true }, // recommended for static export if using next/image
};

module.exports = nextConfig;
