const withLess = require("@zeit/next-less")
const withOffline = require('next-offline')
const withProgressBar = require('next-progressbar')

const nextConfig = {
  env: {
    "API_HOST": "http://api.sabin.arthadede.com",
    "PORT": 8000,
    "SOCKET_HOST": "http://sabin.arthadede.com"
  },
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
    config.optimization.minimize = false;
    return config
  }
})))
