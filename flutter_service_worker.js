'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "db26f83aa2dd81e17060183e016f3064",
"index.html": "62ad8a835fbcf578b6608d00944b403f",
"/": "62ad8a835fbcf578b6608d00944b403f",
"main.dart.js": "b75c8af0a5c56a63b2601d5e0329ea1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "3048593c2c43317ad1fff7af220d87fe",
"assets/AssetManifest.json": "dbeb7da9302ece998ce63acf0edd51ce",
"assets/NOTICES": "90cec802944237fbe551e562155614ab",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/assets/images/library_selected.svg": "70b712afd6b9478fd9978a2723cfa1d4",
"assets/assets/images/alert.svg": "22317d7abc5f869a1b44c389ffd02538",
"assets/assets/images/profile_unselected.svg": "ce28432af5732ca85156e825d72f09c5",
"assets/assets/images/empty.svg": "adc7bf5f88e15aa634b9342b5ef1e4a1",
"assets/assets/images/legend.svg": "44c49b065915fa552594304d6f362f09",
"assets/assets/images/link.svg": "b5f651a11fce219b45e89879764b67f4",
"assets/assets/images/team_unselected.svg": "6312dc1c003e62102a95331db03f183c",
"assets/assets/images/no.svg": "3700738ed46252cf33feed991905b7ab",
"assets/assets/images/clients_unselected.svg": "cf4261f9cd30da8c3a59bed43e3fb980",
"assets/assets/images/code.svg": "3e3685d95facff40d39e1dc92e120db6",
"assets/assets/images/helix.svg": "46598fd8741bc408214b337fb89b6d79",
"assets/assets/images/logo_grey.svg": "645b7ff587f7512e9587b7d71995a721",
"assets/assets/images/copy.svg": "91f2f345ea892457edaa0f2b9f89ae7f",
"assets/assets/images/1.svg": "0cdffa148828f678f0b76bb8e5438515",
"assets/assets/images/3.svg": "edc201e1132eb0f49d121bdc3ad75602",
"assets/assets/images/settings_unselected.svg": "311b834e4e62e21860f84f2a20443a09",
"assets/assets/images/2.svg": "8249391a135249358df35b95094a3510",
"assets/assets/images/6.svg": "273679a8e8736a44deb0581c274a9d69",
"assets/assets/images/clients_selected.svg": "8db16d3f0bc623047c6e8064c1d019fc",
"assets/assets/images/more.svg": "015d0ed582d78f75009b178e18f4633d",
"assets/assets/images/team_selected.svg": "2df24b383df63b01377fdd02ddbfe0b1",
"assets/assets/images/7.svg": "087f8e3f32612ba1ac51ddccd5cfd107",
"assets/assets/images/home_selected.svg": "8199d1a90bc9960c3da3360b9f079b84",
"assets/assets/images/5.svg": "8186844e393e23009108b6a7581086d8",
"assets/assets/images/unlink.svg": "982ead46f6ce508e4598f430b01aa213",
"assets/assets/images/4.svg": "07ad8af0ea61b87c8c8013cd66cf619d",
"assets/assets/images/settings_selected.svg": "3addf5e69e722e2396a4bdad6f6b0e51",
"assets/assets/images/phone.svg": "200aaaff1d3d1b92cc458abf268286c8",
"assets/assets/images/img1.svg": "22dde33f909f173a1da0eaa07962c0c9",
"assets/assets/images/best.svg": "85a882a41408fff47175dcaf3f6c3c5d",
"assets/assets/images/code_left.svg": "441b0a923bee698da900e439133e5f75",
"assets/assets/images/code_right.svg": "c23cc9bf7adaa12092ebc9155d52714c",
"assets/assets/images/green_check.svg": "c16f1b5c1cdfd3b3ffc5f17a5db9b063",
"assets/assets/images/filter.svg": "7344a1cb82d049c25c2ce234c8d44780",
"assets/assets/images/stats_unselected.svg": "18248f178c16044bdfb7b39b7f73de8c",
"assets/assets/images/stats_selected.svg": "9ff767b34d59b409a0098ca10f89e33d",
"assets/assets/images/img2.svg": "360b65e589f415bfdd6c761d4a98de28",
"assets/assets/images/img3.svg": "5343a7cb4b404ea52f8104e48e1c6d42",
"assets/assets/images/library_unselected.svg": "7f6919d6fae465429208fc4c3bade9ab",
"assets/assets/images/home_unselected.svg": "fdc67e5a5e21b10addc22df98c7f3ba2",
"assets/assets/images/logo.svg": "5aeb9ba25c1260a3ece398b05264534a",
"assets/assets/images/profile_selected.svg": "9e0080bc2989feb10c9d3bd50fbf6073",
"assets/assets/images/logout_unselected.svg": "93d2295ffaa88187555e91e126879df8",
"assets/assets/images/img4.svg": "bcbdcb39d77dc9faf376ca5cff94ab49",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
