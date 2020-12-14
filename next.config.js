/* eslint @typescript-eslint/no-var-requires:0 */
const nextTranslate = require("next-translate");
const withPlugins = require("next-compose-plugins");

const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        test: /\.(js|ts)x?$/,
      },
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

module.exports = withPlugins([nextTranslate], nextConfig);
