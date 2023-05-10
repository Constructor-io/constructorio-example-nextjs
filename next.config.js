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
      config.resolve.fallback.worker_threads = false;
    }

    config.plugins = [
      new webpack.NormalModuleReplacementPlugin(/node:/, (resource) => {
        const mod = resource.request.replace(/^node:/, '');

        if (mod) {
          if (mod === 'stream/web') {
            resource.request =  'web-streams-polyfill/ponyfill/es2018';
          } else {
            resource.request = mod;
          }
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
