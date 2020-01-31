try{self["workbox:core:5.0.0"]&&_()}catch(e){}const e=(e,...t)=>{let s=e;return t.length>0&&(s+=` :: ${JSON.stringify(t)}`),s};class t extends Error{constructor(t,s){super(e(t,s)),this.name=t,this.details=s}}try{self["workbox:routing:5.0.0"]&&_()}catch(e){}const s=e=>e&&"object"==typeof e?e:{handle:e};class n{constructor(e,t,n="GET"){this.handler=s(t),this.match=e,this.method=n}}class i extends n{constructor(e,t,s){super(({url:t})=>{const s=e.exec(t.href);if(s&&(t.origin===location.origin||0===s.index))return s.slice(1)},t,s)}}const a=e=>{const t=new URL(String(e),location.href);return t.origin===location.origin?t.pathname:t.href};class r{constructor(){this.t=new Map}get routes(){return this.t}addFetchListener(){self.addEventListener("fetch",e=>{const{request:t}=e,s=this.handleRequest({request:t,event:e});s&&e.respondWith(s)})}addCacheListener(){self.addEventListener("message",e=>{if(e.data&&"CACHE_URLS"===e.data.type){const{payload:t}=e.data,s=Promise.all(t.urlsToCache.map(e=>{"string"==typeof e&&(e=[e]);const t=new Request(...e);return this.handleRequest({request:t})}));e.waitUntil(s),e.ports&&e.ports[0]&&s.then(()=>e.ports[0].postMessage(!0))}})}handleRequest({request:e,event:t}){const s=new URL(e.url,location.href);if(!s.protocol.startsWith("http"))return;let n,{params:i,route:a}=this.findMatchingRoute({url:s,request:e,event:t}),r=a&&a.handler;if(!r&&this.s&&(r=this.s),r){try{n=r.handle({url:s,request:e,event:t,params:i})}catch(e){n=Promise.reject(e)}return n instanceof Promise&&this.i&&(n=n.catch(n=>this.i.handle({url:s,request:e,event:t}))),n}}findMatchingRoute({url:e,request:t,event:s}){const n=this.t.get(t.method)||[];for(const i of n){let n,a=i.match({url:e,request:t,event:s});if(a)return n=a,Array.isArray(a)&&0===a.length?n=void 0:a.constructor===Object&&0===Object.keys(a).length?n=void 0:"boolean"==typeof a&&(n=void 0),{route:i,params:n}}return{}}setDefaultHandler(e){this.s=s(e)}setCatchHandler(e){this.i=s(e)}registerRoute(e){this.t.has(e.method)||this.t.set(e.method,[]),this.t.get(e.method).push(e)}unregisterRoute(e){if(!this.t.has(e.method))throw new t("unregister-route-but-not-found-with-method",{method:e.method});const s=this.t.get(e.method).indexOf(e);if(!(s>-1))throw new t("unregister-route-route-not-registered");this.t.get(e.method).splice(s,1)}}let c;const o=()=>(c||(c=new r,c.addFetchListener(),c.addCacheListener()),c);const h={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},u=e=>[h.prefix,e,h.suffix].filter(e=>e&&e.length>0).join("-"),l=e=>e||u(h.precache),f=e=>e||u(h.runtime);function d(e){e.then(()=>{})}const w=new Set;class g{constructor(e,t,{onupgradeneeded:s,onversionchange:n}={}){this.o=null,this.h=e,this.u=t,this.l=s,this.g=n||(()=>this.close())}get db(){return this.o}async open(){if(!this.o)return this.o=await new Promise((e,t)=>{let s=!1;setTimeout(()=>{s=!0,t(new Error("The open request was blocked and timed out"))},this.OPEN_TIMEOUT);const n=indexedDB.open(this.h,this.u);n.onerror=()=>t(n.error),n.onupgradeneeded=e=>{s?(n.transaction.abort(),n.result.close()):"function"==typeof this.l&&this.l(e)},n.onsuccess=()=>{const t=n.result;s?t.close():(t.onversionchange=this.g.bind(this),e(t))}}),this}async getKey(e,t){return(await this.getAllKeys(e,t,1))[0]}async getAll(e,t,s){return await this.getAllMatching(e,{query:t,count:s})}async getAllKeys(e,t,s){return(await this.getAllMatching(e,{query:t,count:s,includeKeys:!0})).map(e=>e.key)}async getAllMatching(e,{index:t,query:s=null,direction:n="next",count:i,includeKeys:a=!1}={}){return await this.transaction([e],"readonly",(r,c)=>{const o=r.objectStore(e),h=t?o.index(t):o,u=[],l=h.openCursor(s,n);l.onsuccess=()=>{const e=l.result;e?(u.push(a?e:e.value),i&&u.length>=i?c(u):e.continue()):c(u)}})}async transaction(e,t,s){return await this.open(),await new Promise((n,i)=>{const a=this.o.transaction(e,t);a.onabort=()=>i(a.error),a.oncomplete=()=>n(),s(a,e=>n(e))})}async p(e,t,s,...n){return await this.transaction([t],s,(s,i)=>{const a=s.objectStore(t),r=a[e].apply(a,n);r.onsuccess=()=>i(r.result)})}close(){this.o&&(this.o.close(),this.o=null)}}g.prototype.OPEN_TIMEOUT=2e3;const p={readonly:["get","count","getKey","getAll","getAllKeys"],readwrite:["add","put","clear","delete"]};for(const[e,t]of Object.entries(p))for(const s of t)s in IDBObjectStore.prototype&&(g.prototype[s]=async function(t,...n){return await this.p(s,t,e,...n)});try{self["workbox:expiration:5.0.0"]&&_()}catch(e){}const b=e=>{const t=new URL(e,location.href);return t.hash="",t.href};class m{constructor(e){this.m=e,this.o=new g("workbox-expiration",1,{onupgradeneeded:e=>this.v(e)})}v(e){const t=e.target.result.createObjectStore("cache-entries",{keyPath:"id"});t.createIndex("cacheName","cacheName",{unique:!1}),t.createIndex("timestamp","timestamp",{unique:!1}),(async e=>{await new Promise((t,s)=>{const n=indexedDB.deleteDatabase(e);n.onerror=()=>{s(n.error)},n.onblocked=()=>{s(new Error("Delete blocked"))},n.onsuccess=()=>{t()}})})(this.m)}async setTimestamp(e,t){const s={url:e=b(e),timestamp:t,cacheName:this.m,id:this._(e)};await this.o.put("cache-entries",s)}async getTimestamp(e){return(await this.o.get("cache-entries",this._(e))).timestamp}async expireEntries(e,t){const s=await this.o.transaction("cache-entries","readwrite",(s,n)=>{const i=s.objectStore("cache-entries").index("timestamp").openCursor(null,"prev"),a=[];let r=0;i.onsuccess=()=>{const s=i.result;if(s){const n=s.value;n.cacheName===this.m&&(e&&n.timestamp<e||t&&r>=t?a.push(s.value):r++),s.continue()}else n(a)}}),n=[];for(const e of s)await this.o.delete("cache-entries",e.id),n.push(e.url);return n}_(e){return this.m+"|"+b(e)}}class y{constructor(e,t={}){this.q=!1,this.U=!1,this.S=t.maxEntries,this.R=t.maxAgeSeconds,this.m=e,this.j=new m(e)}async expireEntries(){if(this.q)return void(this.U=!0);this.q=!0;const e=this.R?Date.now()-1e3*this.R:0,t=await this.j.expireEntries(e,this.S),s=await self.caches.open(this.m);for(const e of t)await s.delete(e);this.q=!1,this.U&&(this.U=!1,d(this.expireEntries()))}async updateTimestamp(e){await this.j.setTimestamp(e,Date.now())}async isURLExpired(e){if(this.R){return await this.j.getTimestamp(e)<Date.now()-1e3*this.R}return!1}async delete(){this.U=!1,await this.j.expireEntries(1/0)}}const v=(e,t)=>e.filter(e=>t in e),x=async({cacheName:e,request:t,event:s,matchOptions:n,plugins:i=[]})=>{const a=await self.caches.open(e),r=await U({plugins:i,request:t,mode:"read"});let c=await a.match(r,n);for(const t of i)if("cachedResponseWillBeUsed"in t){const i=t.cachedResponseWillBeUsed;c=await i.call(t,{cacheName:e,event:s,matchOptions:n,cachedResponse:c,request:r})}return c},q=async({request:e,response:t,event:s,plugins:n=[]})=>{let i=t,a=!1;for(let t of n)if("cacheWillUpdate"in t){a=!0;const n=t.cacheWillUpdate;if(i=await n.call(t,{request:e,response:i,event:s}),!i)break}return a||(i=i&&200===i.status?i:void 0),i||null},U=async({request:e,mode:t,plugins:s=[]})=>{const n=v(s,"cacheKeyWillBeUsed");let i=e;for(const e of n)i=await e.cacheKeyWillBeUsed.call(e,{mode:t,request:i}),"string"==typeof i&&(i=new Request(i));return i},S={put:async({cacheName:e,request:s,response:n,event:i,plugins:r=[],matchOptions:c})=>{const o=await U({plugins:r,request:s,mode:"write"});if(!n)throw new t("cache-put-with-no-response",{url:a(o.url)});let h=await q({event:i,plugins:r,response:n,request:o});if(!h)return;const u=await self.caches.open(e),l=v(r,"cacheDidUpdate");let f=l.length>0?await x({cacheName:e,matchOptions:c,request:o}):null;try{await u.put(o,h)}catch(e){throw"QuotaExceededError"===e.name&&await async function(){for(const e of w)await e()}(),e}for(let t of l)await t.cacheDidUpdate.call(t,{cacheName:e,event:i,oldResponse:f,newResponse:h,request:o})},match:x},R=async({request:e,fetchOptions:s,event:n,plugins:i=[]})=>{if("string"==typeof e&&(e=new Request(e)),n instanceof FetchEvent&&n.preloadResponse){const e=await n.preloadResponse;if(e)return e}const a=v(i,"fetchDidFail"),r=a.length>0?e.clone():null;try{for(let t of i)if("requestWillFetch"in t){const s=t.requestWillFetch,i=e.clone();e=await s.call(t,{request:i,event:n})}}catch(e){throw new t("plugin-error-request-will-fetch",{thrownError:e})}let c=e.clone();try{let t;t="navigate"===e.mode?await fetch(e):await fetch(e,s);for(const e of i)"fetchDidSucceed"in e&&(t=await e.fetchDidSucceed.call(e,{event:n,request:c,response:t}));return t}catch(e){for(const t of a)await t.fetchDidFail.call(t,{error:e,event:n,originalRequest:r.clone(),request:c.clone()});throw e}};try{self["workbox:strategies:5.0.0"]&&_()}catch(e){}const E={cacheWillUpdate:async({response:e})=>200===e.status||0===e.status?e:null};let j;async function L(e,t){const s=e.clone(),n={headers:new Headers(s.headers),status:s.status,statusText:s.statusText},i=t?t(n):n,a=function(){if(void 0===j){const e=new Response("");if("body"in e)try{new Response(e.body),j=!0}catch(e){j=!1}j=!1}return j}()?s.body:await s.blob();return new Response(a,i)}try{self["workbox:precaching:5.0.0"]&&_()}catch(e){}function B(e){if(!e)throw new t("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:s,url:n}=e;if(!n)throw new t("add-to-cache-list-unexpected-type",{entry:e});if(!s){const e=new URL(n,location.href);return{cacheKey:e.href,url:e.href}}const i=new URL(n,location.href),a=new URL(n,location.href);return i.searchParams.set("__WB_REVISION__",s),{cacheKey:i.href,url:a.href}}class H{constructor(e){this.m=l(e),this.L=new Map,this.B=new Map,this.H=new Map}addToCacheList(e){const s=[];for(const n of e){"string"==typeof n?s.push(n):n&&void 0===n.revision&&s.push(n.url);const{cacheKey:e,url:i}=B(n),a="string"!=typeof n&&n.revision?"reload":"default";if(this.L.has(i)&&this.L.get(i)!==e)throw new t("add-to-cache-list-conflicting-entries",{firstEntry:this.L.get(i),secondEntry:e});if("string"!=typeof n&&n.integrity){if(this.H.has(e)&&this.H.get(e)!==n.integrity)throw new t("add-to-cache-list-conflicting-integrities",{url:i});this.H.set(e,n.integrity)}if(this.L.set(i,e),this.B.set(i,a),s.length>0){const e="Workbox is precaching URLs without revision "+`info: ${s.join(", ")}\nThis is generally NOT safe. `+"Learn more at https://bit.ly/wb-precache";console.warn(e)}}}async install({event:e,plugins:t}={}){const s=[],n=[],i=await self.caches.open(this.m),a=await i.keys(),r=new Set(a.map(e=>e.url));for(const[e,t]of this.L)r.has(t)?n.push(e):s.push({cacheKey:t,url:e});const c=s.map(({cacheKey:s,url:n})=>{const i=this.H.get(s),a=this.B.get(n);return this.N({cacheKey:s,cacheMode:a,event:e,integrity:i,plugins:t,url:n})});return await Promise.all(c),{updatedURLs:s.map(e=>e.url),notUpdatedURLs:n}}async activate(){const e=await self.caches.open(this.m),t=await e.keys(),s=new Set(this.L.values()),n=[];for(const i of t)s.has(i.url)||(await e.delete(i),n.push(i.url));return{deletedURLs:n}}async N({cacheKey:e,url:s,cacheMode:n,event:i,plugins:a,integrity:r}){const c=new Request(s,{integrity:r,cache:n,credentials:"same-origin"});let o,h=await R({event:i,plugins:a,request:c});for(const e of a||[])"cacheWillUpdate"in e&&(o=e);if(!(o?await o.cacheWillUpdate({event:i,request:c,response:h}):h.status<400))throw new t("bad-precaching-response",{url:s,status:h.status});h.redirected&&(h=await L(h)),await S.put({event:i,plugins:a,response:h,request:e===s?c:new Request(e),cacheName:this.m,matchOptions:{ignoreSearch:!0}})}getURLsToCacheKeys(){return this.L}getCachedURLs(){return[...this.L.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this.L.get(t.href)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s){return(await self.caches.open(this.m)).match(s)}}createHandler(e=!0){return async({request:s})=>{try{const e=await this.matchPrecache(s);if(e)return e;throw new t("missing-precache-entry",{cacheName:this.m,url:s instanceof Request?s.url:s})}catch(t){if(e)return fetch(s);throw t}}}createHandlerBoundToURL(e,s=!0){if(!this.getCacheKeyForURL(e))throw new t("non-precached-url",{url:e});const n=this.createHandler(s),i=new Request(e);return()=>n({request:i})}}let N;const T=()=>(N||(N=new H),N);const K=(e,t)=>{const s=T().getURLsToCacheKeys();for(const n of function*(e,{ignoreURLParametersMatching:t,directoryIndex:s,cleanURLs:n,urlManipulation:i}={}){const a=new URL(e,location.href);a.hash="",yield a.href;const r=function(e,t=[]){for(const s of[...e.searchParams.keys()])t.some(e=>e.test(s))&&e.searchParams.delete(s);return e}(a,t);if(yield r.href,s&&r.pathname.endsWith("/")){const e=new URL(r.href);e.pathname+=s,yield e.href}if(n){const e=new URL(r.href);e.pathname+=".html",yield e.href}if(i){const e=i({url:a});for(const t of e)yield t.href}}(e,t)){const e=s.get(n);if(e)return e}};let M=!1;function P(e){M||((({ignoreURLParametersMatching:e=[/^utm_/],directoryIndex:t="index.html",cleanURLs:s=!0,urlManipulation:n}={})=>{const i=l();self.addEventListener("fetch",a=>{const r=K(a.request.url,{cleanURLs:s,directoryIndex:t,ignoreURLParametersMatching:e,urlManipulation:n});if(!r)return;let c=self.caches.open(i).then(e=>e.match(r)).then(e=>e||fetch(r));a.respondWith(c)})})(e),M=!0)}const O=[],D={get:()=>O,add(e){O.push(...e)}},C=e=>{const t=T(),s=D.get();e.waitUntil(t.install({event:e,plugins:s}).catch(e=>{throw e}))},I=e=>{const t=T();e.waitUntil(t.activate())};var k;self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),k={},function(e){T().addToCacheList(e),e.length>0&&(self.addEventListener("install",C),self.addEventListener("activate",I))}([{url:"_next/static/antd.min.css",revision:"b797173676fb17dfcafac16be24af22f"},{url:"_next/static/chunks/commons.a8086d05bbf2a8e60b0a.js",revision:"56274ad9bceca9641dda835ba57e7903"},{url:"_next/static/favicon.ico",revision:"22d06a256e29a645199d46298462c285"},{url:"_next/static/icon/classifier.png",revision:"31f64c139922dac2764996d3b14e2c9c"},{url:"_next/static/icon/extractor.png",revision:"0d438f13945c651f15d3a2a681c9b9eb"},{url:"_next/static/logo.png",revision:"47c0f269382b23eb9eeacd378d14e34f"},{url:"_next/static/logo_192.png",revision:"d496bd7255e15e86cc89922376b3620f"},{url:"_next/static/logo_512.png",revision:"c3730df66d9d6e3bf2a6bf7e1c2844f5"},{url:"_next/static/manifest.json",revision:"287fda4dd25fe4c6a4eea8eddcd59424"},{url:"_next/static/nbbUHg466SdSwBahg9Eft/pages/_app.js",revision:"cd70d078d0643bf93d5abc7feacea5d9"},{url:"_next/static/nbbUHg466SdSwBahg9Eft/pages/_error.js",revision:"612129acd3d440b4c1f56466c8831f7c"},{url:"_next/static/nbbUHg466SdSwBahg9Eft/pages/admin-dashboard.js",revision:"041aa088f1ca00862f1b3c6c819d139b"},{url:"_next/static/nbbUHg466SdSwBahg9Eft/pages/admin-model.js",revision:"2094744aa057dabb901cd20d9ee7b8c9"},{url:"_next/static/nbbUHg466SdSwBahg9Eft/pages/admin-source.js",revision:"596a7a99bac471826fec2ed6bcdea774"},{url:"_next/static/nbbUHg466SdSwBahg9Eft/pages/admin-user.js",revision:"308bab0cad9e1651191a3e4a62252faf"},{url:"_next/static/nbbUHg466SdSwBahg9Eft/pages/change-password.js",revision:"aca1c47a7f76c794b01664acfe3993a5"},{url:"_next/static/nbbUHg466SdSwBahg9Eft/pages/confirm-account.js",revision:"12c30ba0b829c8600bf18b4605aa7ae0"},{url:"_next/static/nbbUHg466SdSwBahg9Eft/pages/dashboard.js",revision:"2beaa642c8871770b79ca2a68081f93c"},{url:"_next/static/nbbUHg466SdSwBahg9Eft/pages/explore.js",revision:"abf12e4e1df54cfda321a29d6a9e807a"},{url:"_next/static/nbbUHg466SdSwBahg9Eft/pages/forget-password.js",revision:"ce4f994d501c4f8dae16bb1d6aead174"},{url:"_next/static/nbbUHg466SdSwBahg9Eft/pages/index.js",revision:"466527202f6505c777bf1f0c573f5da7"},{url:"_next/static/nbbUHg466SdSwBahg9Eft/pages/login.js",revision:"a053f2808e594d592f0034b0d246ee74"},{url:"_next/static/nbbUHg466SdSwBahg9Eft/pages/me-model-anno.js",revision:"c95264100f37f8218c12876b82b747f5"},{url:"_next/static/nbbUHg466SdSwBahg9Eft/pages/me-model-info.js",revision:"1bd2dbfc6bed37483c26573a73386731"},{url:"_next/static/nbbUHg466SdSwBahg9Eft/pages/me-model-source.js",revision:"5e3b3735dcc0796428fb9200055af30a"},{url:"_next/static/nbbUHg466SdSwBahg9Eft/pages/me-model-stats.js",revision:"d7fe434ec0ecc5cc1c2a78e0924153fe"},{url:"_next/static/nbbUHg466SdSwBahg9Eft/pages/me-model-train.js",revision:"589a79c7b6ac4dd2ea6c75394a8fe00d"},{url:"_next/static/nbbUHg466SdSwBahg9Eft/pages/model-anno.js",revision:"150dd93774969b9d22969c2c44803eec"},{url:"_next/static/nbbUHg466SdSwBahg9Eft/pages/model-create.js",revision:"3d481cb85fa7f5f423af39e05f8d3702"},{url:"_next/static/nbbUHg466SdSwBahg9Eft/pages/model-info.js",revision:"0ad4bf4b3532e9333110c4fc4ddd3ca0"},{url:"_next/static/nbbUHg466SdSwBahg9Eft/pages/model-stats.js",revision:"14f167ea84997679b09109e955684252"},{url:"_next/static/nbbUHg466SdSwBahg9Eft/pages/model-train.js",revision:"3d6a8ea57747e47d852069927b2082b2"},{url:"_next/static/nbbUHg466SdSwBahg9Eft/pages/register.js",revision:"c5d8f1a8373b1f51178142d4e18f76fc"},{url:"_next/static/nprogress.css",revision:"449eb3c7b9d065ccda64de41fb026918"},{url:"_next/static/runtime/main-56606831ec55c3cd7652.js",revision:"f2546c9d364fb79b344a49e97210aa39"},{url:"_next/static/runtime/webpack-f5e50b6b501ccea2a79b.js",revision:"83bc028c0a2efd8e4c3dcbd8b23289bb"},{url:"_next/static/sabin.less",revision:"afe62308c99161208a75e59851213808"},{url:"_next/static/vs2015.css",revision:"293fcff00fc03084f5a2d5b7cf0525a5"}]),P(k),function(e,s,a){let r;if("string"==typeof e){const t=new URL(e,location.href);r=new n(({url:e})=>e.href===t.href,s,a)}else if(e instanceof RegExp)r=new i(e,s,a);else if("function"==typeof e)r=new n(e,s,a);else{if(!(e instanceof n))throw new t("unsupported-route-type",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"});r=e}o().registerRoute(r)}(/^https?.*/,new class{constructor(e={}){if(this.m=f(e.cacheName),e.plugins){let t=e.plugins.some(e=>!!e.cacheWillUpdate);this.T=t?e.plugins:[E,...e.plugins]}else this.T=[E];this.K=e.networkTimeoutSeconds||0,this.M=e.fetchOptions,this.P=e.matchOptions}async handle({event:e,request:s}){const n=[];"string"==typeof s&&(s=new Request(s));const i=[];let a;if(this.K){const{id:t,promise:r}=this.O({request:s,event:e,logs:n});a=t,i.push(r)}const r=this.D({timeoutId:a,request:s,event:e,logs:n});i.push(r);let c=await Promise.race(i);if(c||(c=await r),!c)throw new t("no-response",{url:s.url});return c}O({request:e,logs:t,event:s}){let n;return{promise:new Promise(t=>{n=setTimeout(async()=>{t(await this.C({request:e,event:s}))},1e3*this.K)}),id:n}}async D({timeoutId:e,request:t,logs:s,event:n}){let i,a;try{a=await R({request:t,event:n,fetchOptions:this.M,plugins:this.T})}catch(e){i=e}if(e&&clearTimeout(e),i||!a)a=await this.C({request:t,event:n});else{const e=a.clone(),s=S.put({cacheName:this.m,request:t,response:e,event:n,plugins:this.T});if(n)try{n.waitUntil(s)}catch(e){}}return a}C({event:e,request:t}){return S.match({cacheName:this.m,request:t,event:e,matchOptions:this.P,plugins:this.T})}}({cacheName:"offlineCache",plugins:[new class{constructor(e={}){var t;this.cachedResponseWillBeUsed=async({event:e,request:t,cacheName:s,cachedResponse:n})=>{if(!n)return null;let i=this.I(n);const a=this.k(s);d(a.expireEntries());const r=a.updateTimestamp(t.url);if(e)try{e.waitUntil(r)}catch(e){}return i?n:null},this.cacheDidUpdate=async({cacheName:e,request:t})=>{const s=this.k(e);await s.updateTimestamp(t.url),await s.expireEntries()},this.A=e,this.R=e.maxAgeSeconds,this.W=new Map,e.purgeOnQuotaError&&(t=()=>this.deleteCacheAndMetadata(),w.add(t))}k(e){if(e===f())throw new t("expire-custom-caches-only");let s=this.W.get(e);return s||(s=new y(e,this.A),this.W.set(e,s)),s}I(e){if(!this.R)return!0;const t=this.F(e);return null===t||t>=Date.now()-1e3*this.R}F(e){if(!e.headers.has("date"))return null;const t=e.headers.get("date"),s=new Date(t).getTime();return isNaN(s)?null:s}async deleteCacheAndMetadata(){for(const[e,t]of this.W)await self.caches.delete(e),await t.delete();this.W=new Map}}({maxEntries:200,purgeOnQuotaError:!0})]}),"GET");
