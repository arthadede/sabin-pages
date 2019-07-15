self.__precacheManifest = [
  {
    "url": "/_next/static/chunks/commons.564f257b790687457c36.js",
    "revision": "cdef65c31f926eb751f8"
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
    "url": "/_next/static\\FzfpFnnodws6Qth5U3L2T\\pages\\_app.js",
    "revision": "cd400319293fee4faad2"
  },
  {
    "url": "/_next/static\\FzfpFnnodws6Qth5U3L2T\\pages\\_error.js",
    "revision": "31b894e10bf182160df9"
  },
  {
    "url": "/_next/static\\FzfpFnnodws6Qth5U3L2T\\pages\\admin-dashboard.js",
    "revision": "d6e79fe35b25cbadb35b"
  },
  {
    "url": "/_next/static\\FzfpFnnodws6Qth5U3L2T\\pages\\admin-model.js",
    "revision": "7a2589bb43ac5d9892e2"
  },
  {
    "url": "/_next/static\\FzfpFnnodws6Qth5U3L2T\\pages\\admin-source.js",
    "revision": "a708d60bc587eacfb3fd"
  },
  {
    "url": "/_next/static\\FzfpFnnodws6Qth5U3L2T\\pages\\admin-user.js",
    "revision": "8e16f3b842da62315b94"
  },
  {
    "url": "/_next/static\\FzfpFnnodws6Qth5U3L2T\\pages\\change-password.js",
    "revision": "ed6c477cc68bed6753ac"
  },
  {
    "url": "/_next/static\\FzfpFnnodws6Qth5U3L2T\\pages\\confirm-account.js",
    "revision": "946a42f696775a04bd36"
  },
  {
    "url": "/_next/static\\FzfpFnnodws6Qth5U3L2T\\pages\\dashboard.js",
    "revision": "d3de17e150190499c4cf"
  },
  {
    "url": "/_next/static\\FzfpFnnodws6Qth5U3L2T\\pages\\explore.js",
    "revision": "e45b35f2a2ad0ae230f8"
  },
  {
    "url": "/_next/static\\FzfpFnnodws6Qth5U3L2T\\pages\\forget-password.js",
    "revision": "c2b6fd43cffede9eb349"
  },
  {
    "url": "/_next/static\\FzfpFnnodws6Qth5U3L2T\\pages\\index.js",
    "revision": "1410280a047bbda8799c"
  },
  {
    "url": "/_next/static\\FzfpFnnodws6Qth5U3L2T\\pages\\login.js",
    "revision": "2d07ed34a0d65a256903"
  },
  {
    "url": "/_next/static\\FzfpFnnodws6Qth5U3L2T\\pages\\me-model-anno.js",
    "revision": "08dc57ba6f3651023071"
  },
  {
    "url": "/_next/static\\FzfpFnnodws6Qth5U3L2T\\pages\\me-model-info.js",
    "revision": "48915c8bd14f08576657"
  },
  {
    "url": "/_next/static\\FzfpFnnodws6Qth5U3L2T\\pages\\me-model-source.js",
    "revision": "59e54f497a98d515d4ae"
  },
  {
    "url": "/_next/static\\FzfpFnnodws6Qth5U3L2T\\pages\\me-model-stats.js",
    "revision": "a867b36cc1c1f933632d"
  },
  {
    "url": "/_next/static\\FzfpFnnodws6Qth5U3L2T\\pages\\me-model-train.js",
    "revision": "e298e44e4c7fce6a4f2a"
  },
  {
    "url": "/_next/static\\FzfpFnnodws6Qth5U3L2T\\pages\\model-anno.js",
    "revision": "c10ab413cae9cf23a855"
  },
  {
    "url": "/_next/static\\FzfpFnnodws6Qth5U3L2T\\pages\\model-create.js",
    "revision": "d074879ef809ceb303ae"
  },
  {
    "url": "/_next/static\\FzfpFnnodws6Qth5U3L2T\\pages\\model-info.js",
    "revision": "bf6941ffc3c832b939d0"
  },
  {
    "url": "/_next/static\\FzfpFnnodws6Qth5U3L2T\\pages\\model-stats.js",
    "revision": "9ad9f1307d3e9f51820c"
  },
  {
    "url": "/_next/static\\FzfpFnnodws6Qth5U3L2T\\pages\\model-train.js",
    "revision": "df7af814666e389fada5"
  },
  {
    "url": "/_next/static\\FzfpFnnodws6Qth5U3L2T\\pages\\register.js",
    "revision": "c19113ea181dee2e4263"
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
    "revision": "287fda4dd25fe4c6a4eea8eddcd59424"
  },
  {
    "url": "static/nprogress.css",
    "revision": "2a22de66fcc0f7a2dc2ee618f50f2691"
  },
  {
    "url": "static/sabin.less",
    "revision": "afe62308c99161208a75e59851213808"
  },
  {
    "url": "static/vs2015.css",
    "revision": "163911e35ea1c131dc4ce4ffd0388e35"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^https?.*/, new workbox.strategies.NetworkFirst({ "cacheName":"offlineCache", plugins: [new workbox.expiration.Plugin({ maxEntries: 200, purgeOnQuotaError: false })] }), 'GET');
