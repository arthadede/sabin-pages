const withLess = require("@zeit/next-less")
const withOffline = require('next-offline')
const withProgressBar = require('next-progressbar')

const nextConfig = {
  workboxOpts: {
    runtimeCaching: [
      {
        urlPattern: /\.(?:png|jpg|jpeg|svg)$/,
        handler: 'CacheFirst',
        options: {
          cacheName: 'image-cache',
        }
      }
    ]
  }
}

module.exports = withProgressBar(withLess(withOffline({
  ...nextConfig,
  webpack: (config) => {
    return config
  }
})))
