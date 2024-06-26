'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "01b14c817aca9746e611f72b05bdc214",
"index.html": "75c6ad6dbd8d2cf49714e35d44fd587e",
"/": "75c6ad6dbd8d2cf49714e35d44fd587e",
"main.dart.js": "5b09a103fc980612e5298fa6425cd898",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"favicon.png": "9fe9f0e78d9eee9a2e2ec5700dd8eb32",
"icons/Icon-192.png": "f3782d20718cb39ee1261164e7e2d5c1",
"icons/Icon-maskable-192.png": "f3782d20718cb39ee1261164e7e2d5c1",
"icons/Icon-maskable-512.png": "c120aed344a176dc91adc570dd0a9483",
"icons/Icon-512.png": "c120aed344a176dc91adc570dd0a9483",
"manifest.json": "267ffdbff2062ff0978db901e2b44edd",
"assets/AssetManifest.json": "bd92b71d98fd70ce3fb14e1ce14a01b0",
"assets/NOTICES": "47b71f01847c83576b435d1686a8dda3",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "af8945bb045df84b8017420dd633cf84",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/fluttertoast/assets/toastify.js": "18cfdd77033aa55d215e8a78c090ba89",
"assets/packages/fluttertoast/assets/toastify.css": "910ddaaf9712a0b0392cf7975a3b7fb5",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "f7735c79fc307a232b80770de7a95b12",
"assets/fonts/MaterialIcons-Regular.otf": "e1aacfe8011590f302d49c3673e12c49",
"assets/assets/images/library_selected.svg": "70b712afd6b9478fd9978a2723cfa1d4",
"assets/assets/images/password_unselected.svg": "88c7be483d144efdb8c504e1935ce212",
"assets/assets/images/alert.svg": "22317d7abc5f869a1b44c389ffd02538",
"assets/assets/images/organisation_unselected.svg": "3a8b2479d42af7be66992eabd74be41d",
"assets/assets/images/grey_check.svg": "0505ef463e91cc600f95f84804eb628d",
"assets/assets/images/profile_unselected.svg": "ce28432af5732ca85156e825d72f09c5",
"assets/assets/images/delete_unselected.svg": "2263991ded735cd4d5ab0f4184d47e97",
"assets/assets/images/empty.svg": "adc7bf5f88e15aa634b9342b5ef1e4a1",
"assets/assets/images/ukca.svg": "a4e369a838755fd456a2a692c38f974f",
"assets/assets/images/legend.svg": "44c49b065915fa552594304d6f362f09",
"assets/assets/images/link.svg": "b5f651a11fce219b45e89879764b67f4",
"assets/assets/images/team_unselected.svg": "6312dc1c003e62102a95331db03f183c",
"assets/assets/images/no.svg": "3700738ed46252cf33feed991905b7ab",
"assets/assets/images/404.svg": "9e6e2da25e7721757f18cb07603c4f3e",
"assets/assets/images/clients_unselected.svg": "cf4261f9cd30da8c3a59bed43e3fb980",
"assets/assets/images/caution.svg": "4adb54eaf465f27c84b643fa564dfcb4",
"assets/assets/images/warning_unselected.svg": "49495734d1a046d1ad154a86babc88e5",
"assets/assets/images/code.svg": "3e3685d95facff40d39e1dc92e120db6",
"assets/assets/images/helix.svg": "46598fd8741bc408214b337fb89b6d79",
"assets/assets/images/info_unselected.svg": "652bdbc0b223c31959dbe86e25df3c40",
"assets/assets/images/logo_grey.svg": "645b7ff587f7512e9587b7d71995a721",
"assets/assets/images/copy.svg": "91f2f345ea892457edaa0f2b9f89ae7f",
"assets/assets/images/more_space.svg": "611136a33df103d0a1276b4615ecafad",
"assets/assets/images/1.svg": "0cdffa148828f678f0b76bb8e5438515",
"assets/assets/images/3.svg": "edc201e1132eb0f49d121bdc3ad75602",
"assets/assets/images/crown.svg": "2cd6892014f58f80b2a566253d6786a6",
"assets/assets/images/settings_unselected.svg": "311b834e4e62e21860f84f2a20443a09",
"assets/assets/images/2.svg": "8249391a135249358df35b95094a3510",
"assets/assets/images/6.svg": "273679a8e8736a44deb0581c274a9d69",
"assets/assets/images/clients_selected.svg": "8db16d3f0bc623047c6e8064c1d019fc",
"assets/assets/images/more.svg": "015d0ed582d78f75009b178e18f4633d",
"assets/assets/images/team_selected.svg": "2df24b383df63b01377fdd02ddbfe0b1",
"assets/assets/images/red_cross.svg": "1092a0206140937f59c59fab3aa3227e",
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
"assets/assets/images/profile.svg": "77907f85c9cd8b5d0bce617619c63d89",
"assets/assets/images/consult_instructions.svg": "d4cc2aa72d7d47f72879d1d084bcab09",
"assets/assets/images/green_check.svg": "c16f1b5c1cdfd3b3ffc5f17a5db9b063",
"assets/assets/images/filter.svg": "7344a1cb82d049c25c2ce234c8d44780",
"assets/assets/images/stats_unselected.svg": "18248f178c16044bdfb7b39b7f73de8c",
"assets/assets/images/manufacturer.svg": "70f38d65f9f773a5bcb090dfa8998fec",
"assets/assets/images/stats_selected.svg": "9ff767b34d59b409a0098ca10f89e33d",
"assets/assets/images/img2.svg": "360b65e589f415bfdd6c761d4a98de28",
"assets/assets/images/img3.svg": "5343a7cb4b404ea52f8104e48e1c6d42",
"assets/assets/images/library_unselected.svg": "7f6919d6fae465429208fc4c3bade9ab",
"assets/assets/images/home_unselected.svg": "fdc67e5a5e21b10addc22df98c7f3ba2",
"assets/assets/images/logo.svg": "5aeb9ba25c1260a3ece398b05264534a",
"assets/assets/images/profile_selected.svg": "9e0080bc2989feb10c9d3bd50fbf6073",
"assets/assets/images/logout_unselected.svg": "16fb5ab9349f4549243c1d666aba4cba",
"assets/assets/images/img4.svg": "bcbdcb39d77dc9faf376ca5cff94ab49",
"assets/assets/images/medical_device.svg": "fdb999d6459d965be5114e75686c4dc4",
"assets/assets/images/user_information_website.svg": "d1d2b70992c7a9d2c33c28113258b163",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "4124c42a73efa7eb886d3400a1ed7a06",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "f87e541501c96012c252942b6b75d1ea",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "64edb91684bdb3b879812ba2e48dd487",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
