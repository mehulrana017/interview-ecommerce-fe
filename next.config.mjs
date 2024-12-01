/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  // Add this if the app directory is in src
  pageExtensions: ["tsx", "ts", "jsx", "js"],
};

export default nextConfig;
