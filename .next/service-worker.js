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
    "url": "/_next/static\\GP1R6WIvsCEwLpQOd2A-N\\pages\\_app.js",
    "revision": "ec22f73eab5bd0af0ed9"
  },
  {
    "url": "/_next/static\\GP1R6WIvsCEwLpQOd2A-N\\pages\\_error.js",
    "revision": "b5dc9a9ed8bf48482a73"
  },
  {
    "url": "/_next/static\\GP1R6WIvsCEwLpQOd2A-N\\pages\\admin-dashboard.js",
    "revision": "0bc2dbfd69fe0a20e676"
  },
  {
    "url": "/_next/static\\GP1R6WIvsCEwLpQOd2A-N\\pages\\admin-model.js",
    "revision": "bfb711f8cbb33c27a400"
  },
  {
    "url": "/_next/static\\GP1R6WIvsCEwLpQOd2A-N\\pages\\admin-source.js",
    "revision": "ba78b8d1a6ca86ef4736"
  },
  {
    "url": "/_next/static\\GP1R6WIvsCEwLpQOd2A-N\\pages\\admin-user.js",
    "revision": "a3d490edd64f20a168c3"
  },
  {
    "url": "/_next/static\\GP1R6WIvsCEwLpQOd2A-N\\pages\\change-password.js",
    "revision": "436491be4f5d73b1fcea"
  },
  {
    "url": "/_next/static\\GP1R6WIvsCEwLpQOd2A-N\\pages\\confirm-account.js",
    "revision": "fbab97915593f6cc6d17"
  },
  {
    "url": "/_next/static\\GP1R6WIvsCEwLpQOd2A-N\\pages\\dashboard.js",
    "revision": "37ef838274744e949a5b"
  },
  {
    "url": "/_next/static\\GP1R6WIvsCEwLpQOd2A-N\\pages\\explore.js",
    "revision": "2fa75ba6e8b5f30500b1"
  },
  {
    "url": "/_next/static\\GP1R6WIvsCEwLpQOd2A-N\\pages\\forget-password.js",
    "revision": "ab81c4457ff335c72d8f"
  },
  {
    "url": "/_next/static\\GP1R6WIvsCEwLpQOd2A-N\\pages\\index.js",
    "revision": "f7b795db719df842e8bd"
  },
  {
    "url": "/_next/static\\GP1R6WIvsCEwLpQOd2A-N\\pages\\login.js",
    "revision": "64b834e6b7d685cea747"
  },
  {
    "url": "/_next/static\\GP1R6WIvsCEwLpQOd2A-N\\pages\\me-model-anno.js",
    "revision": "0dd790da02e7ba60755d"
  },
  {
    "url": "/_next/static\\GP1R6WIvsCEwLpQOd2A-N\\pages\\me-model-info.js",
    "revision": "65a67cad89518bac4329"
  },
  {
    "url": "/_next/static\\GP1R6WIvsCEwLpQOd2A-N\\pages\\me-model-source.js",
    "revision": "e06e55f89503331a331b"
  },
  {
    "url": "/_next/static\\GP1R6WIvsCEwLpQOd2A-N\\pages\\me-model-stats.js",
    "revision": "ef2065678836a50bc212"
  },
  {
    "url": "/_next/static\\GP1R6WIvsCEwLpQOd2A-N\\pages\\me-model-train.js",
    "revision": "1e61d6cdf748b349f5fa"
  },
  {
    "url": "/_next/static\\GP1R6WIvsCEwLpQOd2A-N\\pages\\model-anno.js",
    "revision": "0c8798931c53e263e6f7"
  },
  {
    "url": "/_next/static\\GP1R6WIvsCEwLpQOd2A-N\\pages\\model-create.js",
    "revision": "d3948a3c1834dd5cbd8e"
  },
  {
    "url": "/_next/static\\GP1R6WIvsCEwLpQOd2A-N\\pages\\model-info.js",
    "revision": "9775d8142703bedeab29"
  },
  {
    "url": "/_next/static\\GP1R6WIvsCEwLpQOd2A-N\\pages\\model-stats.js",
    "revision": "5426ba94d351e94bf160"
  },
  {
    "url": "/_next/static\\GP1R6WIvsCEwLpQOd2A-N\\pages\\model-train.js",
    "revision": "6ccffb0a07e19cb28015"
  },
  {
    "url": "/_next/static\\GP1R6WIvsCEwLpQOd2A-N\\pages\\register.js",
    "revision": "9e7d66fd6897f645585b"
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
