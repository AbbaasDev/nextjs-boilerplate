const path = require('path');

/** @type {import('next').NextConfig} */
module.exports = async () => {
  return {
    reactStrictMode: true,
    staticPageGenerationTimeout: 1000,
    trailingSlash: true,
    serverRuntimeConfig: {
      PROJECT_ROOT: __dirname
    },
    sassOptions: {
      includePaths: [path.join(__dirname, 'styles')]
    },
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: '**'
        }
      ]
    },
    compress: true,
    eslint: {
      ignoreDuringBuilds: true
    }
  };
};
