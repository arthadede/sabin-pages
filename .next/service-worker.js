self.__precacheManifest = [
  {
    "url": "/_next/static/chunks/commons.ee903b4a1511cc33fde5.js",
    "revision": "3121be0a0c8fa2a59d6b"
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
    "revision": "a3076f118c4193cbf896"
  },
  {
    "url": "/_next/static\\sabin-pages-1\\pages\\admin-model.js",
    "revision": "5ed42ed85804077cb091"
  },
  {
    "url": "/_next/static\\sabin-pages-1\\pages\\admin-source.js",
    "revision": "a215513effc597446434"
  },
  {
    "url": "/_next/static\\sabin-pages-1\\pages\\admin-user.js",
    "revision": "1a3e27e43a0b841e8a00"
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
    "revision": "c31043e4eaaf6a6605d7"
  },
  {
    "url": "/_next/static\\sabin-pages-1\\pages\\me-model-info.js",
    "revision": "2cfcf1ebaaae4177457d"
  },
  {
    "url": "/_next/static\\sabin-pages-1\\pages\\me-model-source.js",
    "revision": "4c8596542f0733852b05"
  },
  {
    "url": "/_next/static\\sabin-pages-1\\pages\\me-model-stats.js",
    "revision": "f6081a4c602ba68177b0"
  },
  {
    "url": "/_next/static\\sabin-pages-1\\pages\\me-model-train.js",
    "revision": "7302f138ed1bf8543c9c"
  },
  {
    "url": "/_next/static\\sabin-pages-1\\pages\\model-anno.js",
    "revision": "43a212aca62c39c14638"
  },
  {
    "url": "/_next/static\\sabin-pages-1\\pages\\model-create.js",
    "revision": "e402b31d19244c94ead8"
  },
  {
    "url": "/_next/static\\sabin-pages-1\\pages\\model-info.js",
    "revision": "653e1a7643c67e572b71"
  },
  {
    "url": "/_next/static\\sabin-pages-1\\pages\\model-stats.js",
    "revision": "8a0ead61ef4688996418"
  },
  {
    "url": "/_next/static\\sabin-pages-1\\pages\\model-train.js",
    "revision": "5db9da27608d5c2c89a8"
  },
  {
    "url": "/_next/static\\sabin-pages-1\\pages\\register.js",
    "revision": "6165590c7081036a38af"
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
    "revision": "8e8ba4a3712bdaac9de8da86a9550d01"
  },
  {
    "url": "static/vs2015.css",
    "revision": "163911e35ea1c131dc4ce4ffd0388e35"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^https?.*/, new workbox.strategies.NetworkFirst({ "cacheName":"offlineCache", plugins: [new workbox.expiration.Plugin({ maxEntries: 200, purgeOnQuotaError: false })] }), 'GET');
