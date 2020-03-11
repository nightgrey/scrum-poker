module.exports = (nextConfig = {}) => ({
  ...nextConfig,
  webpack(config, options) {
  // Add `svgr` to webpack configuration
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        // Only use `svgr` in `.js` files
        test: /\.js?$/,
      },
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            memo: true,
          },
        },
      ],
    });

    if (typeof nextConfig.webpack === 'function') {
      return nextConfig.webpack(config, options);
    }

    return config;
  },
});
