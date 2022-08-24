/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [ "constructorio-integrations.s3.amazonaws.com" ]
  }
}

module.exports = nextConfig
