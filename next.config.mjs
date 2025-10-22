/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: [
      // keep minimal for faster cold starts
    ]
  }
};

export default nextConfig;
