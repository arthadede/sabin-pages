self.__precacheManifest = [
  {
    "url": "/_next/static/chunks/commons.448b3c240a1979b812ac.js",
    "revision": "16686310390273755420"
  },
  {
    "url": "/_next/static/runtime/main-e570dc72efd003735c72.js",
    "revision": "73ae6fe0966fa0b7fe3c"
  },
  {
    "url": "/_next/static/runtime/webpack-f5e50b6b501ccea2a79b.js",
    "revision": "ae583f202258b164868a"
  },
  {
    "url": "/_next/static\\sabin-pages-1\\pages\\_app.js",
    "revision": "c24495d8a3e7ce105bc3"
  },
  {
    "url": "/_next/static\\sabin-pages-1\\pages\\_error.js",
    "revision": "a6c8044ad03405d28fc4"
  },
  {
    "url": "/_next/static\\sabin-pages-1\\pages\\admin-dashboard.js",
    "revision": "05f28afe0ddf8a96a7e7"
  },
  {
    "url": "/_next/static\\sabin-pages-1\\pages\\admin-model.js",
    "revision": "9ba47768b8ebe111ad74"
  },
  {
    "url": "/_next/static\\sabin-pages-1\\pages\\admin-source.js",
    "revision": "af63df51b02a2f6716fe"
  },
  {
    "url": "/_next/static\\sabin-pages-1\\pages\\admin-user.js",
    "revision": "ba1fedf2439b84babe40"
  },
  {
    "url": "/_next/static\\sabin-pages-1\\pages\\change-password.js",
    "revision": "749430965d8cb1037882"
  },
  {
    "url": "/_next/static\\sabin-pages-1\\pages\\confirm-account.js",
    "revision": "eda3f1712708f0052e2b"
  },
  {
    "url": "/_next/static\\sabin-pages-1\\pages\\dashboard.js",
    "revision": "2de6c70c33e6ff60cb43"
  },
  {
    "url": "/_next/static\\sabin-pages-1\\pages\\explore.js",
    "revision": "c18479aee762d20c5374"
  },
  {
    "url": "/_next/static\\sabin-pages-1\\pages\\forget-password.js",
    "revision": "20213a0121d14c3de07f"
  },
  {
    "url": "/_next/static\\sabin-pages-1\\pages\\index.js",
    "revision": "85794545dd7930d3a0d2"
  },
  {
    "url": "/_next/static\\sabin-pages-1\\pages\\login.js",
    "revision": "5c57e4a3d5dd20253dfa"
  },
  {
    "url": "/_next/static\\sabin-pages-1\\pages\\me-model-anno.js",
    "revision": "07fee328867fed812993"
  },
  {
    "url": "/_next/static\\sabin-pages-1\\pages\\me-model-info.js",
    "revision": "db09dffb72da0620962b"
  },
  {
    "url": "/_next/static\\sabin-pages-1\\pages\\me-model-source.js",
    "revision": "c60c8a609ef90c1a56b7"
  },
  {
    "url": "/_next/static\\sabin-pages-1\\pages\\me-model-stats.js",
    "revision": "e7856885e3633b454fb7"
  },
  {
    "url": "/_next/static\\sabin-pages-1\\pages\\me-model-train.js",
    "revision": "f85088fde86a9d1307ff"
  },
  {
    "url": "/_next/static\\sabin-pages-1\\pages\\model-anno.js",
    "revision": "ebdf32cfc146d782b2cc"
  },
  {
    "url": "/_next/static\\sabin-pages-1\\pages\\model-create.js",
    "revision": "b2d534e28f572ba0917d"
  },
  {
    "url": "/_next/static\\sabin-pages-1\\pages\\model-info.js",
    "revision": "438a22ef34f5806baf39"
  },
  {
    "url": "/_next/static\\sabin-pages-1\\pages\\model-stats.js",
    "revision": "ca1cf31e484664d712fc"
  },
  {
    "url": "/_next/static\\sabin-pages-1\\pages\\model-train.js",
    "revision": "3db9f71890969c1bfa40"
  },
  {
    "url": "/_next/static\\sabin-pages-1\\pages\\register.js",
    "revision": "54daf898db2c04dd2184"
  }
];

/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

importScripts(
  
);

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "static/antd.min.css",
    "revision": "f4c159d541736a87b3caea9798dd3ba7"
  },
  {
    "url": "static/favicon.ico",
    "revision": "22d06a256e29a645199d46298462c285"
  },
  {
    "url": "static/icon/classifier.png",
    "revision": "31f64c139922dac2764996d3b14e2c9c"
  },
  {
    "url": "static/icon/extractor.png",
    "revision": "0d438f13945c651f15d3a2a681c9b9eb"
  },
  {
    "url": "static/logo_192.png",
    "revision": "d496bd7255e15e86cc89922376b3620f"
  },
  {
    "url": "static/logo_512.png",
    "revision": "c3730df66d9d6e3bf2a6bf7e1c2844f5"
  },
  {
    "url": "static/logo.png",
    "revision": "47c0f269382b23eb9eeacd378d14e34f"
  },
  {
    "url": "static/manifest.json",
    "revision": "42778d0fc4f6ccff44517030c89a4dc9"
  },
  {
    "url": "static/nprogress.css",
    "revision": "2a22de66fcc0f7a2dc2ee618f50f2691"
  },
  {
    "url": "static/sabin.less",
    "revision": "cd7eea903063cc14bd4deb43faf4aacb"
  },
  {
    "url": "static/vs2015.css",
    "revision": "163911e35ea1c131dc4ce4ffd0388e35"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^https?.*/, new workbox.strategies.NetworkFirst({ "cacheName":"offlineCache", plugins: [new workbox.expiration.Plugin({ maxEntries: 200, purgeOnQuotaError: false })] }), 'GET');
