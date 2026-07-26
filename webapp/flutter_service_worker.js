'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"favicon-16x16.png": "223decb4adccf669729d3990c8a40095",
"flutter_bootstrap.js": "431ab75a1359165c8423a2345c6fb152",
"version.json": "f8330449115b5a683c53ca59b4b0afb9",
"splash/img/light-2x.png": "ee96fe3a76341755cd1957234d7b633a",
"splash/img/dark-4x.png": "3edf0c85383db4fc7209eaa10567f9d9",
"splash/img/light-3x.png": "1773c804327beaaf3a4213e69dcbb44c",
"splash/img/dark-3x.png": "1773c804327beaaf3a4213e69dcbb44c",
"splash/img/light-4x.png": "3edf0c85383db4fc7209eaa10567f9d9",
"splash/img/dark-2x.png": "ee96fe3a76341755cd1957234d7b633a",
"splash/img/dark-1x.png": "fe2d296ea72d07f26579712cbd6c06cd",
"splash/img/light-1x.png": "fe2d296ea72d07f26579712cbd6c06cd",
"favicon.ico": "4c0312800bf7828e6a1d950e2bc3b78a",
"apple-touch-icon-120x120.png": "829ad2aec2acdada14e8feedb34740bc",
"index.html": "55428610ef5dd86f6ee83a92602ec99c",
"/": "55428610ef5dd86f6ee83a92602ec99c",
"android-chrome-192x192.png": "1eb2daaf58f74a44a5d283ba43a62e29",
"apple-touch-icon.png": "829ad2aec2acdada14e8feedb34740bc",
"main.dart.js": "459d3b2be3eabde036b9608ad089ba01",
"sqlite3.wasm": "fa7637a49a0e434f2a98f9981856d118",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"android-chrome-512x512.png": "9f4dc5ac1350c17184dbb968a833f28e",
"site.webmanifest": "f0a310b4a002572963db3a89b1ef5c6f",
"index.html.bak": "b443c8abf7122654e073964898fc4980",
"sqflite_sw.js": "b33d5d23a10fb2afb682e01d36f59ead",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"apple-touch-icon-precomposed.png": "829ad2aec2acdada14e8feedb34740bc",
"manifest.json": "86cbf44c539d3e7625ddd5dae4cd9d7b",
"radio_database.db": "bcf2a148ee8aed5a59781854f75fbf50",
"assets/AssetManifest.json": "b37973f2b19bde8023f55dcfacab6af1",
"assets/NOTICES": "b1e4d692d0aef2e7dd47999862c5c99e",
"assets/FontManifest.json": "20cf0466612f37c56bf5834ecab01362",
"assets/AssetManifest.bin.json": "962841aafae873b986a83b6378aab59b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "1a4a14472dd25f9243d3748960f6e3a1",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3cf72f5a50c0cb271b49bf1ced2c8a34",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "5006dca194ba1eadc436ca94ff0c75b0",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "dacaa55593734809da1819ca3f7f715b",
"assets/fonts/MaterialIcons-Regular.ttf": "38abab02f30eb6623d0b5a4ca788cff3",
"assets/fonts/MaterialIcons-Regular.otf": "5bd538cc9a6d82cdd5d4d86109866fec",
"assets/assets/maps_database.db": "4d47c9e6dabdd77c1d3ae4d3eb5aaa00",
"assets/assets/images/not-yet.png": "d6374253c2d524dbe764f8a7448c0a9f",
"assets/assets/images/congrats.gif": "eb71e16f0504b834f63fd1850d664d87",
"assets/assets/images/no_connection.png": "4ff220a254e05f343971a7066d9a21cf",
"assets/assets/images/register.png": "d80030e8326510fb4353cd9d3ea60e50",
"assets/assets/images/einstein.png": "d931d34b845562bc85f61f6fdf9d0ec8",
"assets/assets/images/operator8.jpg": "799c67ef459e76a75bd11cfb32b3cf91",
"assets/assets/images/operator9.jpg": "2bd76ece446c96e65ebf9d839cbb6895",
"assets/assets/images/operator4.jpg": "56f3f8b39f7f8e82319764e92c1c721f",
"assets/assets/images/operator5.jpg": "5c16b42c8aaa76757de803ab58fd8672",
"assets/assets/images/operator.jpg": "bda1ccd4b4e1d316d7b9d4b5760dfbdf",
"assets/assets/images/operator7.jpg": "04059532bbd21f152a58ec5befdcb09a",
"assets/assets/images/operator6.jpg": "5a3dd27d8396230d399976fe048534ce",
"assets/assets/images/error.png": "1b9c248b7d5d3704a8bd2fc7ca7ec13a",
"assets/assets/images/logo.png": "37196faf0f5df18ce927acd7c0069a89",
"assets/assets/images/operator2.jpg": "71533ee5d5a8831c2aedbfa4c7801635",
"assets/assets/images/operator3.jpg": "5beecccc6a78eac0817a5f30e271644e",
"assets/assets/images/foxhunt.gif": "89c5688caf457cb70af979bd6e42c65b",
"assets/assets/images/operator1.jpg": "95658b2892159b86cdb532f63589b339",
"assets/assets/images/easteregg.gif": "1459e4d6b26c66bbfd22873ed82ee9ad",
"assets/assets/images/winners.jpg": "4fcc8b50fe588024da1e4bdc3d5693fe",
"assets/assets/images/radiooperator.png": "45ae213c4b27d7710544fa1f824fd3f5",
"assets/assets/audio/applause.mp3": "2a8b413ffcc94f28351b8925eef45169",
"assets/assets/radio_database.db": "bcf2a148ee8aed5a59781854f75fbf50",
"favicon.png.bak": "5dcef449791fa27946b3d35ad8803796",
"favicon-32x32.png": "386eb90d9421bf1e2f29890a4703b7bd",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
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
