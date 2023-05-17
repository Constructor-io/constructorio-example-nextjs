/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [ "constructorio-integrations.s3.amazonaws.com" ]
  },
  webpack: (config, { isServer, webpack } = {}) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }

    config.plugins = [
      new webpack.NormalModuleReplacementPlugin(/node:/, (resource) => {
        const mod = resource.request.replace(/^node:/, '');

        if (mod) {
          resource.request = mod;
        } else {
          throw new Error(`Cannot Find Module ${resource.request}`);
        }
      }),

      ...config.plugins,
    ];

    config.resolve.fallback = { ...config.resolve.fallback, net: false };

    return config;
  },
};

module.exports = nextConfig
