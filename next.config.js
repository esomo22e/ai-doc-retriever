module.exports = {
  webpack: (config, { isServer }) => {
    // Resolve 'fs' to a client-side alternative or mock
    if (!isServer) {
      config.resolve.alias = {
        ...config.resolve.alias,
        fs: false,
      };
    }

    return config;
  },
};
