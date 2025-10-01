/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['drive.google.com'],
    // Or if using the newer format:
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'drive.google.com',
        pathname: '/uc**',
      },
    ],
  },
}

module.exports = nextConfig