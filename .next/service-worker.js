self.__precacheManifest = [
  {
    "url": "/_next/static/chunks/commons.40b879ba7aa0674604cb.js",
    "revision": "492beb45c6422b1acb18"
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
    "url": "/_next/static\\nNVsNM5sZ3bryt_8K9NgM\\pages\\_app.js",
    "revision": "fdd83fc70dec6abc46dc"
  },
  {
    "url": "/_next/static\\nNVsNM5sZ3bryt_8K9NgM\\pages\\_error.js",
    "revision": "1ec25cd1c381a4eba30c"
  },
  {
    "url": "/_next/static\\nNVsNM5sZ3bryt_8K9NgM\\pages\\admin-dashboard.js",
    "revision": "c72a5cbf4f4413df073e"
  },
  {
    "url": "/_next/static\\nNVsNM5sZ3bryt_8K9NgM\\pages\\admin-model.js",
    "revision": "e66b7c18f3165e84a831"
  },
  {
    "url": "/_next/static\\nNVsNM5sZ3bryt_8K9NgM\\pages\\admin-source.js",
    "revision": "96a315ab57a985169850"
  },
  {
    "url": "/_next/static\\nNVsNM5sZ3bryt_8K9NgM\\pages\\admin-user.js",
    "revision": "508d25f04453837809a5"
  },
  {
    "url": "/_next/static\\nNVsNM5sZ3bryt_8K9NgM\\pages\\change-password.js",
    "revision": "3abb3c030d7b138909fa"
  },
  {
    "url": "/_next/static\\nNVsNM5sZ3bryt_8K9NgM\\pages\\confirm-account.js",
    "revision": "bdf7aba6090dedbf8bf5"
  },
  {
    "url": "/_next/static\\nNVsNM5sZ3bryt_8K9NgM\\pages\\dashboard.js",
    "revision": "9d75d74abf051ff316c3"
  },
  {
    "url": "/_next/static\\nNVsNM5sZ3bryt_8K9NgM\\pages\\explore.js",
    "revision": "9800f2b8308c0d413098"
  },
  {
    "url": "/_next/static\\nNVsNM5sZ3bryt_8K9NgM\\pages\\forget-password.js",
    "revision": "d9602349dbaa52326474"
  },
  {
    "url": "/_next/static\\nNVsNM5sZ3bryt_8K9NgM\\pages\\index.js",
    "revision": "9ee17833bcb3ce0d7ba1"
  },
  {
    "url": "/_next/static\\nNVsNM5sZ3bryt_8K9NgM\\pages\\login.js",
    "revision": "7142f1e06b915265f3e3"
  },
  {
    "url": "/_next/static\\nNVsNM5sZ3bryt_8K9NgM\\pages\\me-model-anno.js",
    "revision": "79d38d6460a2a484455a"
  },
  {
    "url": "/_next/static\\nNVsNM5sZ3bryt_8K9NgM\\pages\\me-model-info.js",
    "revision": "d6f4455f8bc55046c8be"
  },
  {
    "url": "/_next/static\\nNVsNM5sZ3bryt_8K9NgM\\pages\\me-model-source.js",
    "revision": "0c7b01f3a236e50039f3"
  },
  {
    "url": "/_next/static\\nNVsNM5sZ3bryt_8K9NgM\\pages\\me-model-stats.js",
    "revision": "da57fc43c29ea29b3c10"
  },
  {
    "url": "/_next/static\\nNVsNM5sZ3bryt_8K9NgM\\pages\\me-model-train.js",
    "revision": "b3626608782889751550"
  },
  {
    "url": "/_next/static\\nNVsNM5sZ3bryt_8K9NgM\\pages\\model-anno.js",
    "revision": "e83e8c61ab206edfe030"
  },
  {
    "url": "/_next/static\\nNVsNM5sZ3bryt_8K9NgM\\pages\\model-create.js",
    "revision": "127ed49441c8c903d747"
  },
  {
    "url": "/_next/static\\nNVsNM5sZ3bryt_8K9NgM\\pages\\model-info.js",
    "revision": "0dc0fb54e57d543c6781"
  },
  {
    "url": "/_next/static\\nNVsNM5sZ3bryt_8K9NgM\\pages\\model-stats.js",
    "revision": "fcd41ca60dac11a9fed9"
  },
  {
    "url": "/_next/static\\nNVsNM5sZ3bryt_8K9NgM\\pages\\model-train.js",
    "revision": "2adec9218a291c63c2a3"
  },
  {
    "url": "/_next/static\\nNVsNM5sZ3bryt_8K9NgM\\pages\\register.js",
    "revision": "c03bc98a37af1d1a6ae0"
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
