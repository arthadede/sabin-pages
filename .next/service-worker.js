self.__precacheManifest = [
  {
    "url": "/_next/static/chunks/commons.f1c858cc0b96ed4f24ac.js",
    "revision": "4e27e3a20f5a83fa957c"
  },
  {
    "url": "/_next/static/runtime/main-6044c0738b44f12718d4.js",
    "revision": "40f32d2fa9a59d10f0a4"
  },
  {
    "url": "/_next/static/runtime/webpack-51ac50431fd9d3cbe717.js",
    "revision": "411e1127740e500699da"
  },
  {
    "url": "/_next/static\\sabin-pages-1\\pages\\_app.js",
    "revision": "86c62d9ec5ab99a78fec"
  },
  {
    "url": "/_next/static\\sabin-pages-1\\pages\\_error.js",
    "revision": "a937746d18641dfc8427"
  },
  {
    "url": "/_next/static\\sabin-pages-1\\pages\\admin-dashboard.js",
    "revision": "0268532c526d39fde7e8"
  },
  {
    "url": "/_next/static\\sabin-pages-1\\pages\\admin-model.js",
    "revision": "7e11f282f45295e4d176"
  },
  {
    "url": "/_next/static\\sabin-pages-1\\pages\\admin-source.js",
    "revision": "2c6d994c51313bb8a96b"
  },
  {
    "url": "/_next/static\\sabin-pages-1\\pages\\admin-user.js",
    "revision": "2c42cb7b10489f5952fb"
  },
  {
    "url": "/_next/static\\sabin-pages-1\\pages\\change-password.js",
    "revision": "4b6131ee12dd8b171eb9"
  },
  {
    "url": "/_next/static\\sabin-pages-1\\pages\\dashboard.js",
    "revision": "aa0ee10f1f4dbf3197d1"
  },
  {
    "url": "/_next/static\\sabin-pages-1\\pages\\explore.js",
    "revision": "d51a00d4904270342781"
  },
  {
    "url": "/_next/static\\sabin-pages-1\\pages\\forget-password.js",
    "revision": "9a73e1af1731bd6774d8"
  },
  {
    "url": "/_next/static\\sabin-pages-1\\pages\\index.js",
    "revision": "ba93399be62028dbaf39"
  },
  {
    "url": "/_next/static\\sabin-pages-1\\pages\\login.js",
    "revision": "11ce181d7336136e533f"
  },
  {
    "url": "/_next/static\\sabin-pages-1\\pages\\me-model-anno.js",
    "revision": "0844dd08d167b756a60f"
  },
  {
    "url": "/_next/static\\sabin-pages-1\\pages\\me-model-info.js",
    "revision": "9544314b917fb8b1d9cd"
  },
  {
    "url": "/_next/static\\sabin-pages-1\\pages\\me-model-source.js",
    "revision": "7a34adb4d439a558767c"
  },
  {
    "url": "/_next/static\\sabin-pages-1\\pages\\me-model-stats.js",
    "revision": "d12c068ac0477f24ca0d"
  },
  {
    "url": "/_next/static\\sabin-pages-1\\pages\\me-model-train.js",
    "revision": "cec433029f25b76f3597"
  },
  {
    "url": "/_next/static\\sabin-pages-1\\pages\\model-anno.js",
    "revision": "11972cb06889a86c85bd"
  },
  {
    "url": "/_next/static\\sabin-pages-1\\pages\\model-create.js",
    "revision": "30b0a2cd0b6abb327f15"
  },
  {
    "url": "/_next/static\\sabin-pages-1\\pages\\model-info.js",
    "revision": "93f21fd168311436743e"
  },
  {
    "url": "/_next/static\\sabin-pages-1\\pages\\model-stats.js",
    "revision": "777751aaf764b7c61305"
  },
  {
    "url": "/_next/static\\sabin-pages-1\\pages\\model-train.js",
    "revision": "33e223cdc1cdcad2fdbd"
  },
  {
    "url": "/_next/static\\sabin-pages-1\\pages\\register.js",
    "revision": "cabe5ce723a057e1c2e4"
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
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|svg)$/, new workbox.strategies.CacheFirst({ "cacheName":"image-cache", plugins: [] }), 'GET');
