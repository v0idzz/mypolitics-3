/* eslint @typescript-eslint/no-var-requires:0 */
const nextTranslate = require("next-translate");
const optimizedImages = require("next-optimized-images");
const withPlugins = require("next-compose-plugins");
const withPreact = require("next-plugin-preact");

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
  serverRuntimeConfig: {
    CONTENT_ADMIN_API_KEY: process.env.CONTENT_ADMIN_API_KEY,
  },
  publicRuntimeConfig: {
    NODE_ENV: process.env.NODE_ENV,
    BASE_PATH: process.env.BASE_PATH,
  },
  async redirects() {
    return [
      {
        source: "/talks",
        destination: "https://youtube.com/myPolitics",
        permanent: false,
      },
    ];
  },
  async rewrites() {
    return process.env.NODE_ENV !== "production"
      ? [
          {
            source: "/api/:path*",
            destination: "http://localhost:5000/:path*",
          },
        ]
      : [];
  },
};

module.exports = withPlugins(
  [
    withPreact,
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
