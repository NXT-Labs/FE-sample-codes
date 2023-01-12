/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['cyber-battles-dev.s3.us-east-1.amazonaws.com', 'cyber-battles-dev.s3.amazonaws.com'],
  },
}

module.exports = nextConfig
