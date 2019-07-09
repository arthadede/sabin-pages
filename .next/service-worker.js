self.__precacheManifest = [
  {
    "url": "/_next/static/chunks/commons.beea1b94bec6f39d4b4f.js",
    "revision": "e927ff92295d35c2f7e5"
  },
  {
    "url": "/_next/static/runtime/main-dcc1e2099c699b4e4830.js",
    "revision": "f26b9d54ae7c2a127dd4"
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
    "revision": "5b5259e24c9ec22da567"
  },
  {
    "url": "/_next/static\\sabin-pages-1\\pages\\admin-model.js",
    "revision": "ad3f67c3c60df41b755f"
  },
  {
    "url": "/_next/static\\sabin-pages-1\\pages\\admin-source.js",
    "revision": "7d639f2fd153de0cb384"
  },
  {
    "url": "/_next/static\\sabin-pages-1\\pages\\admin-user.js",
    "revision": "9ae588c618890c84daeb"
  },
  {
    "url": "/_next/static\\sabin-pages-1\\pages\\change-password.js",
    "revision": "fe136bb639ff6913625e"
  },
  {
    "url": "/_next/static\\sabin-pages-1\\pages\\confirm-account.js",
    "revision": "eda3f1712708f0052e2b"
  },
  {
    "url": "/_next/static\\sabin-pages-1\\pages\\dashboard.js",
    "revision": "1f7b5b682c5f62d65dab"
  },
  {
    "url": "/_next/static\\sabin-pages-1\\pages\\explore.js",
    "revision": "91743e0553d8f2a41563"
  },
  {
    "url": "/_next/static\\sabin-pages-1\\pages\\forget-password.js",
    "revision": "76eadfc22e711ceb05f6"
  },
  {
    "url": "/_next/static\\sabin-pages-1\\pages\\index.js",
    "revision": "85794545dd7930d3a0d2"
  },
  {
    "url": "/_next/static\\sabin-pages-1\\pages\\login.js",
    "revision": "6b31fd5e8d1779bca5fe"
  },
  {
    "url": "/_next/static\\sabin-pages-1\\pages\\me-model-anno.js",
    "revision": "891e95d92b625d0722af"
  },
  {
    "url": "/_next/static\\sabin-pages-1\\pages\\me-model-info.js",
    "revision": "0a8cc627d03101cbede2"
  },
  {
    "url": "/_next/static\\sabin-pages-1\\pages\\me-model-source.js",
    "revision": "4dd0d7e7da7994d5ef09"
  },
  {
    "url": "/_next/static\\sabin-pages-1\\pages\\me-model-stats.js",
    "revision": "5e124ea446d3d3b8647d"
  },
  {
    "url": "/_next/static\\sabin-pages-1\\pages\\me-model-train.js",
    "revision": "f670436a2b6a17d04b5c"
  },
  {
    "url": "/_next/static\\sabin-pages-1\\pages\\model-anno.js",
    "revision": "60c4aa1d902ffa8013e3"
  },
  {
    "url": "/_next/static\\sabin-pages-1\\pages\\model-create.js",
    "revision": "ef4b04a5c0e9efdd89d1"
  },
  {
    "url": "/_next/static\\sabin-pages-1\\pages\\model-info.js",
    "revision": "43fb5d98c4807979b004"
  },
  {
    "url": "/_next/static\\sabin-pages-1\\pages\\model-stats.js",
    "revision": "d36a0bdde762c4ad4e1a"
  },
  {
    "url": "/_next/static\\sabin-pages-1\\pages\\model-train.js",
    "revision": "a6fd8bcf17bfa6cb8918"
  },
  {
    "url": "/_next/static\\sabin-pages-1\\pages\\register.js",
    "revision": "eeabc1353f5b3a59b322"
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
    "revision": "325b97dcf81afcedaadcdef7299dd6f0"
  },
  {
    "url": "static/vs2015.css",
    "revision": "163911e35ea1c131dc4ce4ffd0388e35"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^https?.*/, new workbox.strategies.NetworkFirst({ "cacheName":"offlineCache", plugins: [new workbox.expiration.Plugin({ maxEntries: 200, purgeOnQuotaError: false })] }), 'GET');
