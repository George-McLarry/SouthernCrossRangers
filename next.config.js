/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove static export for admin functionality
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
