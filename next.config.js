const withPlugins = require("next-compose-plugins");
const withBundleAnalyzer = require("@next/bundle-analyzer");

module.exports = withPlugins(
  [
    [
      withBundleAnalyzer({
        enabled: process.env.ANALYZE === "true",
      }),
    ],
  ],
  {
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
      config.externals.push("moment");
      return config;
    },
    assetPrefix:
      process.env.NODE_ENV === "production"
        ? "https://gpa.cdn.robertying.net"
        : "",
    compress: false,
  }
);
