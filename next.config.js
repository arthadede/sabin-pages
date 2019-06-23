const withLess = require("@zeit/next-less")
const withOffline = require('next-offline')
const withProgressBar = require('next-progressbar')

const nextConfig = {
  env: {
    "API_HOST": process.env.NODE_ENV  !== 'production' ? "http://localhost:3000" : "http://api.sabin.arthadede.com",
    "PORT": 8000,
    "SOCKET_HOST": process.env.NODE_ENV  !== 'production' ? "http://localhost:8000" : "http://sabin.arthadede.com"
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
  generateBuildId: async () => {
    // For example get the latest git commit hash here
    return 'sabin-pages-1'
  },
  webpack: (config) => {
    config.optimization.minimize = false;
    return config
  }
})))
