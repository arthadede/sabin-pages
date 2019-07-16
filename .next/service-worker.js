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
    "url": "/_next/static\\WRyCAAiaZds3H7cUbAier\\pages\\_app.js",
    "revision": "70a455e3c2115e6963d5"
  },
  {
    "url": "/_next/static\\WRyCAAiaZds3H7cUbAier\\pages\\_error.js",
    "revision": "fa7cc4d89d95630a6d43"
  },
  {
    "url": "/_next/static\\WRyCAAiaZds3H7cUbAier\\pages\\admin-dashboard.js",
    "revision": "9705a1546ec20e9c20f1"
  },
  {
    "url": "/_next/static\\WRyCAAiaZds3H7cUbAier\\pages\\admin-model.js",
    "revision": "3b7d73a9d2c1b7d65f44"
  },
  {
    "url": "/_next/static\\WRyCAAiaZds3H7cUbAier\\pages\\admin-source.js",
    "revision": "505555f6c3c26ae26212"
  },
  {
    "url": "/_next/static\\WRyCAAiaZds3H7cUbAier\\pages\\admin-user.js",
    "revision": "5b393377902ed13eb983"
  },
  {
    "url": "/_next/static\\WRyCAAiaZds3H7cUbAier\\pages\\change-password.js",
    "revision": "d06bd41cda4b4772df6e"
  },
  {
    "url": "/_next/static\\WRyCAAiaZds3H7cUbAier\\pages\\confirm-account.js",
    "revision": "197f5e2661fc31629bb0"
  },
  {
    "url": "/_next/static\\WRyCAAiaZds3H7cUbAier\\pages\\dashboard.js",
    "revision": "13ff243e10786bf9f319"
  },
  {
    "url": "/_next/static\\WRyCAAiaZds3H7cUbAier\\pages\\explore.js",
    "revision": "32b7b53a86d2d13ab7ef"
  },
  {
    "url": "/_next/static\\WRyCAAiaZds3H7cUbAier\\pages\\forget-password.js",
    "revision": "7a3cab2087a15dcae637"
  },
  {
    "url": "/_next/static\\WRyCAAiaZds3H7cUbAier\\pages\\index.js",
    "revision": "5411417d2418726497dd"
  },
  {
    "url": "/_next/static\\WRyCAAiaZds3H7cUbAier\\pages\\login.js",
    "revision": "2e421ee750b46ca6904a"
  },
  {
    "url": "/_next/static\\WRyCAAiaZds3H7cUbAier\\pages\\me-model-anno.js",
    "revision": "8cbdfb25b38e3e0b5d83"
  },
  {
    "url": "/_next/static\\WRyCAAiaZds3H7cUbAier\\pages\\me-model-info.js",
    "revision": "835f9d94199a16460b3d"
  },
  {
    "url": "/_next/static\\WRyCAAiaZds3H7cUbAier\\pages\\me-model-source.js",
    "revision": "b39797aa460ee9c03928"
  },
  {
    "url": "/_next/static\\WRyCAAiaZds3H7cUbAier\\pages\\me-model-stats.js",
    "revision": "a1ba53e97d2e3f629691"
  },
  {
    "url": "/_next/static\\WRyCAAiaZds3H7cUbAier\\pages\\me-model-train.js",
    "revision": "a480143afc52b6c2cb45"
  },
  {
    "url": "/_next/static\\WRyCAAiaZds3H7cUbAier\\pages\\model-anno.js",
    "revision": "8d99c3c8ffc0c3ea5d4d"
  },
  {
    "url": "/_next/static\\WRyCAAiaZds3H7cUbAier\\pages\\model-create.js",
    "revision": "e49c8961db5022f058db"
  },
  {
    "url": "/_next/static\\WRyCAAiaZds3H7cUbAier\\pages\\model-info.js",
    "revision": "babfdf664f84ced529fb"
  },
  {
    "url": "/_next/static\\WRyCAAiaZds3H7cUbAier\\pages\\model-stats.js",
    "revision": "1083d8288094889cfd72"
  },
  {
    "url": "/_next/static\\WRyCAAiaZds3H7cUbAier\\pages\\model-train.js",
    "revision": "004a2052d334960ff5c3"
  },
  {
    "url": "/_next/static\\WRyCAAiaZds3H7cUbAier\\pages\\register.js",
    "revision": "d8c2e72eea068382b5a3"
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
