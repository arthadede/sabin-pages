const withLess = require("@zeit/next-less");
const withOffline = require("next-offline");
const withProgressBar = require("next-progressbar");

const nextConfig = {
  env: {
    API_HOST: "http://localhost:3000",
    PORT: 8000
  },
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[local]___[hash:base64:5]"
  }
};

module.exports = withProgressBar(
  withLess(
    withOffline({
      ...nextConfig
    })
  )
);
