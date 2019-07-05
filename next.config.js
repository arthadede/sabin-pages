const withLess = require("@zeit/next-less")
const withOffline = require('next-offline')
const withProgressBar = require('next-progressbar')

const nextConfig = {
  env: {
    "API_HOST": process.env.NODE_ENV  !== 'production' ? "http://localhost:3000" : "https://api.sabin.arthadede.com",
    "PORT": 8000
  },
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[local]___[hash:base64:5]",
  }
}

module.exports = withProgressBar(withLess(withOffline({
  ...nextConfig,
  generateBuildId: async () => {
    // For example get the latest git commit hash here
    return 'sabin-pages-1'
  },
})))
