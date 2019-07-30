self.__precacheManifest = [
  {
    "url": "/_next/static/chunks/commons.5486705af9edec3af0e0.js",
    "revision": "43b4b9d8d747dac0a39d"
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
    "url": "/_next/static\\Xq1WNDytJRv3cQy7NOB-_\\pages\\_app.js",
    "revision": "834ad54eb196b3c012b3"
  },
  {
    "url": "/_next/static\\Xq1WNDytJRv3cQy7NOB-_\\pages\\_error.js",
    "revision": "fccb941f8be7f3050710"
  },
  {
    "url": "/_next/static\\Xq1WNDytJRv3cQy7NOB-_\\pages\\admin-dashboard.js",
    "revision": "e6ae9bd2a562fe4d9c0d"
  },
  {
    "url": "/_next/static\\Xq1WNDytJRv3cQy7NOB-_\\pages\\admin-model.js",
    "revision": "9bf5b58422a58ccea7fb"
  },
  {
    "url": "/_next/static\\Xq1WNDytJRv3cQy7NOB-_\\pages\\admin-source.js",
    "revision": "1edc5218909cbb7db8d8"
  },
  {
    "url": "/_next/static\\Xq1WNDytJRv3cQy7NOB-_\\pages\\admin-user.js",
    "revision": "c7587db27489cbc58380"
  },
  {
    "url": "/_next/static\\Xq1WNDytJRv3cQy7NOB-_\\pages\\change-password.js",
    "revision": "a046fdce5998116773e5"
  },
  {
    "url": "/_next/static\\Xq1WNDytJRv3cQy7NOB-_\\pages\\confirm-account.js",
    "revision": "151b06b8fc0669f49d94"
  },
  {
    "url": "/_next/static\\Xq1WNDytJRv3cQy7NOB-_\\pages\\dashboard.js",
    "revision": "1d3fefb4f85b560dc71a"
  },
  {
    "url": "/_next/static\\Xq1WNDytJRv3cQy7NOB-_\\pages\\explore.js",
    "revision": "b7aa05d28097b9a4e275"
  },
  {
    "url": "/_next/static\\Xq1WNDytJRv3cQy7NOB-_\\pages\\forget-password.js",
    "revision": "3a0f26b6e15ce93e6f15"
  },
  {
    "url": "/_next/static\\Xq1WNDytJRv3cQy7NOB-_\\pages\\index.js",
    "revision": "4b3941c7cde0e0c51e58"
  },
  {
    "url": "/_next/static\\Xq1WNDytJRv3cQy7NOB-_\\pages\\login.js",
    "revision": "ea763ea0702e10a3568e"
  },
  {
    "url": "/_next/static\\Xq1WNDytJRv3cQy7NOB-_\\pages\\me-model-anno.js",
    "revision": "41e16b9ad79d6ec4fe55"
  },
  {
    "url": "/_next/static\\Xq1WNDytJRv3cQy7NOB-_\\pages\\me-model-info.js",
    "revision": "bc499193a37cfc4c7377"
  },
  {
    "url": "/_next/static\\Xq1WNDytJRv3cQy7NOB-_\\pages\\me-model-source.js",
    "revision": "af3c959994c42fab622c"
  },
  {
    "url": "/_next/static\\Xq1WNDytJRv3cQy7NOB-_\\pages\\me-model-stats.js",
    "revision": "ad894604630dbae4c49d"
  },
  {
    "url": "/_next/static\\Xq1WNDytJRv3cQy7NOB-_\\pages\\me-model-train.js",
    "revision": "ae16a2ec4d202afe017c"
  },
  {
    "url": "/_next/static\\Xq1WNDytJRv3cQy7NOB-_\\pages\\model-anno.js",
    "revision": "c98d5cee53912cd3deed"
  },
  {
    "url": "/_next/static\\Xq1WNDytJRv3cQy7NOB-_\\pages\\model-create.js",
    "revision": "443cf037096aa3297ae9"
  },
  {
    "url": "/_next/static\\Xq1WNDytJRv3cQy7NOB-_\\pages\\model-info.js",
    "revision": "d6ad7243c35e938b387d"
  },
  {
    "url": "/_next/static\\Xq1WNDytJRv3cQy7NOB-_\\pages\\model-stats.js",
    "revision": "e29e4ca963a3a0535e47"
  },
  {
    "url": "/_next/static\\Xq1WNDytJRv3cQy7NOB-_\\pages\\model-train.js",
    "revision": "6a466cc7e5f7accb07b4"
  },
  {
    "url": "/_next/static\\Xq1WNDytJRv3cQy7NOB-_\\pages\\register.js",
    "revision": "eea86d78e804f329dd6c"
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
