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
    "url": "/_next/static\\xMIIrFkqbqrw7qkg9HF70\\pages\\_app.js",
    "revision": "661fff627d06229ba5a1"
  },
  {
    "url": "/_next/static\\xMIIrFkqbqrw7qkg9HF70\\pages\\_error.js",
    "revision": "ca813bab43e94480e4ee"
  },
  {
    "url": "/_next/static\\xMIIrFkqbqrw7qkg9HF70\\pages\\admin-dashboard.js",
    "revision": "24c9c4d55efb140e0760"
  },
  {
    "url": "/_next/static\\xMIIrFkqbqrw7qkg9HF70\\pages\\admin-model.js",
    "revision": "ed7406008d98419fd2dc"
  },
  {
    "url": "/_next/static\\xMIIrFkqbqrw7qkg9HF70\\pages\\admin-source.js",
    "revision": "c10161c7e6bf8b75b447"
  },
  {
    "url": "/_next/static\\xMIIrFkqbqrw7qkg9HF70\\pages\\admin-user.js",
    "revision": "6de636a55821bc4c7061"
  },
  {
    "url": "/_next/static\\xMIIrFkqbqrw7qkg9HF70\\pages\\change-password.js",
    "revision": "074aff5bd45f37f4442e"
  },
  {
    "url": "/_next/static\\xMIIrFkqbqrw7qkg9HF70\\pages\\confirm-account.js",
    "revision": "0eb2b8d2e8c35baa50f5"
  },
  {
    "url": "/_next/static\\xMIIrFkqbqrw7qkg9HF70\\pages\\dashboard.js",
    "revision": "a7d7bd10f747806cf8df"
  },
  {
    "url": "/_next/static\\xMIIrFkqbqrw7qkg9HF70\\pages\\explore.js",
    "revision": "9fedfd3e1c0205b0875c"
  },
  {
    "url": "/_next/static\\xMIIrFkqbqrw7qkg9HF70\\pages\\forget-password.js",
    "revision": "1c7dbabe53352beed05b"
  },
  {
    "url": "/_next/static\\xMIIrFkqbqrw7qkg9HF70\\pages\\index.js",
    "revision": "8dd411b46fbc4b5b2b4f"
  },
  {
    "url": "/_next/static\\xMIIrFkqbqrw7qkg9HF70\\pages\\login.js",
    "revision": "dfdda199928529101d73"
  },
  {
    "url": "/_next/static\\xMIIrFkqbqrw7qkg9HF70\\pages\\me-model-anno.js",
    "revision": "9a9c740779ff136c89e1"
  },
  {
    "url": "/_next/static\\xMIIrFkqbqrw7qkg9HF70\\pages\\me-model-info.js",
    "revision": "cfcfcea078b44e6be50e"
  },
  {
    "url": "/_next/static\\xMIIrFkqbqrw7qkg9HF70\\pages\\me-model-source.js",
    "revision": "78c10e93e8bc791af2c2"
  },
  {
    "url": "/_next/static\\xMIIrFkqbqrw7qkg9HF70\\pages\\me-model-stats.js",
    "revision": "3dd9c3585a21d96b4d0b"
  },
  {
    "url": "/_next/static\\xMIIrFkqbqrw7qkg9HF70\\pages\\me-model-train.js",
    "revision": "f71469f5de0fa7aaf21c"
  },
  {
    "url": "/_next/static\\xMIIrFkqbqrw7qkg9HF70\\pages\\model-anno.js",
    "revision": "24af7b76140f1d3498ef"
  },
  {
    "url": "/_next/static\\xMIIrFkqbqrw7qkg9HF70\\pages\\model-create.js",
    "revision": "14a69d6a12e358590532"
  },
  {
    "url": "/_next/static\\xMIIrFkqbqrw7qkg9HF70\\pages\\model-info.js",
    "revision": "4d7aedfdf00ceb415044"
  },
  {
    "url": "/_next/static\\xMIIrFkqbqrw7qkg9HF70\\pages\\model-stats.js",
    "revision": "191672f4508c6a8f07b7"
  },
  {
    "url": "/_next/static\\xMIIrFkqbqrw7qkg9HF70\\pages\\model-train.js",
    "revision": "b34b4e8f2a544d226fb8"
  },
  {
    "url": "/_next/static\\xMIIrFkqbqrw7qkg9HF70\\pages\\register.js",
    "revision": "f9960ce8f71e95d32032"
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
    "revision": "98a5f787144433ddd10895b64f11e5c5"
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
