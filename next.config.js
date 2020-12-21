/* eslint @typescript-eslint/no-var-requires:0 */
const nextTranslate = require("next-translate");
const optimizedImages = require("next-optimized-images");
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
  async redirects() {
    return [
      {
        source: "/talks",
        destination: "https://www.facebook.com/myPoliticsTest/live",
        permanent: false,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/admin/graphql",
        destination: `https://admin.mypolitics.pl/graphql`,
      },
    ];
  },
};

module.exports = withPlugins(
  [
    nextTranslate,
    [
      optimizedImages,
      {
        responsive: {
          adapter: require("responsive-loader/sharp"),
        },
      },
    ],
  ],
  nextConfig
);
