/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove static export for admin functionality
  images: {
    unoptimized: true,
    domains: ['instasize.com', 'media.istockphoto.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'instasize.com',
        port: '',
        pathname: '/p/**',
      },
      {
        protocol: 'https',
        hostname: 'media.istockphoto.com',
        port: '',
        pathname: '/**',
      },
    ],
  }
}

module.exports = nextConfig
