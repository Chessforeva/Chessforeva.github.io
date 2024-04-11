'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "9947e3bd0fa34d598eb42ad568518813",
"assets/AssetManifest.bin.json": "000ca7b78cfddbe66b441013cb81f380",
"assets/AssetManifest.json": "0cd4890b563c8c911003d67c7d2b586c",
"assets/assets/images/about.png": "b29c2b5c36b074a15ef5335904e5bdc3",
"assets/assets/images/bbishop.png": "97e877ec86d17716eadbecd9ed9a09a4",
"assets/assets/images/bking.png": "f3c1673990d76f5c96d957f05da927e7",
"assets/assets/images/bknight.png": "f4a275079f0445aac97b3cc2f896c756",
"assets/assets/images/bpawn.png": "e119c35b40551554d0edc5f129e320dd",
"assets/assets/images/bqueen.png": "c217a8beea89610480468fc0d5305886",
"assets/assets/images/brook.png": "663af12252d6f6f62930d06db2593bfc",
"assets/assets/images/check.png": "b4226d14b91b7848f226ace0efd48a9e",
"assets/assets/images/checkmate_01.png": "72e5ee0cebbe08d8239b2f9d46e2fb02",
"assets/assets/images/checkmate_10.png": "5509790da8c858a891e459ff03c857d4",
"assets/assets/images/expl1.png": "db5642b01ceefeb8b1a1bc301e7915c6",
"assets/assets/images/expl2.png": "0095774df7971bac08b9fb58ce54d701",
"assets/assets/images/expl3.png": "3c29e814410d72374eff16b98bc4aa05",
"assets/assets/images/expl4.png": "ad184c276afd8323efff585b0085e84e",
"assets/assets/images/fruit.png": "4c0bfa8b68fe4a855bf5a8447fd95e62",
"assets/assets/images/lousy.png": "fcde57b7d02dea50b5bc1f8d441848a7",
"assets/assets/images/newgame.png": "7b6734c1cd455c3d31f4c21cfafe79ef",
"assets/assets/images/owl.png": "ddb70991c5ed4b933ef6d3036b6b106a",
"assets/assets/images/pgnview.png": "46d0fc9581be33a0ed481268a4537f06",
"assets/assets/images/red-off-16.png": "bb7559bc316668f42246c363a55b73e9",
"assets/assets/images/red-on-16.png": "ece624715402d0995b0a8ee60b63dd46",
"assets/assets/images/repeating.png": "f88796b8b2731fc3abb864bf2ff5859e",
"assets/assets/images/stalemate.png": "0654dee42ca5b2229d1062aa551804db",
"assets/assets/images/takeback.png": "788cea531b39d93d0820c689f47fd8f3",
"assets/assets/images/thinking.png": "938a08e1fb4e69db3b17bc6a0b5e39e5",
"assets/assets/images/wbishop.png": "1b1e4262ec60243884927a4a9f9e8514",
"assets/assets/images/wking.png": "cd44e27222e8d03abb08329d9d50ed9d",
"assets/assets/images/wknight.png": "2723771f9e1bd0522df8e6d725cdf3ab",
"assets/assets/images/wpawn.png": "8a771d29af9f88d78390d9da4626f3a1",
"assets/assets/images/wqueen.png": "a15efd396f22a261dff20d3f0e6a68d6",
"assets/assets/images/wrook.png": "9040a4c0facea51e41bc857c2bc2f9c0",
"assets/assets/images/yourmove.png": "f1836106307f07de3de10d8792169aed",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/NOTICES": "d8ecae7a566cda6b78f810aab455526d",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"fluti_chess.ico": "45ad8963df5013327945b4db0c230986",
"fluti_chess.png": "7a7faaefa9a227f4bdc8d7fc68b295a5",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/fluti_chess_192.png": "dda68221755d3ed58b3232a2915c8601",
"icons/fluti_chess_192_maskable.png": "714ef0ea9b6582b9af599dba307becca",
"icons/fluti_chess_512.png": "61ab4a291db831170b152b154730a031",
"icons/fluti_chess_512_maskable.png": "46da21e3c7e6c447ab4597c6d019d63b",
"index.html": "310c46d75d94255dfbfe936ecc691a07",
"/": "310c46d75d94255dfbfe936ecc691a07",
"main.dart.js": "19ba60aeaaa32764c846b1be8d31549b",
"manifest.json": "28d3968b065eaf353dfe0937bcf416eb",
"version.json": "caed76f7a233b7d9ebbc0b833efbd18a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
