'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "009c9e65172e010890f7f65fde438006",
"index.html": "d41d8cd98f00b204e9800998ecf8427e",
"/": "d41d8cd98f00b204e9800998ecf8427e",
"main.dart.js": "aeea8bdbb0258ad0bcd1bc4450f7416f",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
".git/config": "94dd7d64a2e26a4e599ab582a0f82070",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/4d/56baf984958d8af6143cf5b967c9ac65866fad": "d3a78d014952429f6c6c9fb26fb8908f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/e0/383700de23bb5589abd23597ab23a25ec6e29c": "2a0ef468327fa5f9e8a9c74fa36ddf24",
".git/objects/2d/b7279d5db9067aca4bc3c4e6613dc780eb0980": "a0f16bce976965a08453255e9ffeb083",
".git/objects/70/6d96c2c1080d1f06dc1c3f28769a10e79aaeca": "7cd3255dce291d72c8afb1278c5b8ded",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b0f8ff252ba0fba6cf172f1f92b2e0cf",
".git/logs/refs/heads/main": "ead408086eab39c9054b3a9fcb76750a",
".git/logs/refs/remotes/origin/main": "b0a32226b9d5e422dd8d95da34b47145",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "6e283596e81485e974eacc6edea36270",
".git/refs/remotes/origin/main": "6e283596e81485e974eacc6edea36270",
".git/index": "c0a9a490733152177ec3ee3e7d6e3003",
".git/COMMIT_EDITMSG": "d778d8b1f42d0dd1bb284e5ca9549187",
"assets/AssetManifest.json": "4b5a70d4d81787b22c53ee64cf490b68",
"assets/NOTICES": "cce4d1709019320800e564aa753e16db",
"assets/FontManifest.json": "bec10ddea8efcc8e9fd0c516a72218e1",
"assets/AssetManifest.bin.json": "6a9b9a23c678942bf712ad2684bae003",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b93248a553f9e8bc17f1065929d5934b",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "4f57fd236e6bbb4f451a577f4a3ed01b",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/jsons/projects/sweetHome.json": "bc177a852eb7b822aad1e573101230a6",
"assets/assets/jsons/projects/mobisales.json": "f755d0f4650211cc2bdb015156b1eb06",
"assets/assets/jsons/projects/alqaaidahAlNooraniyah.json": "c705a8bec7d31760cb584c79b57d6e90",
"assets/assets/jsons/projects/paquik.json": "c150377e0dfe1c550a55336ea23808b6",
"assets/assets/jsons/projects/soccorApp.json": "f0404d60160fc0f0085d093ca4232b12",
"assets/assets/jsons/projects/tahsildar.json": "2aa97cd83626bb9693111f9e9a82f0ea",
"assets/assets/jsons/projects/tamayouz.json": "934e289cf5636a010e01fbdc63e6046a",
"assets/assets/jsons/projects/nadrus.json": "3e2b28bbf913f1a5e343c123ea847e9b",
"assets/assets/jsons/projects/liteposAdmin.json": "80b8b6190aa64285ebc4c1439c02036f",
"assets/assets/jsons/projects/entreparents.json": "c28b5f67149288c3fcc3143a6d03ea41",
"assets/assets/jsons/projects/teeplus.json": "12c95e0bd9912822d02ca01db74b2cc4",
"assets/assets/jsons/projects/patientMonitoringSystem.json": "48b377966f972cab1ccdae025e6e29f8",
"assets/assets/jsons/projects/attendanceLogging.json": "e2cfc333996eb9fc5bb3f9cc5c726399",
"assets/assets/jsons/projects/mygym.json": "b0743af3c7ccb7aa5c316c3c7000bfe9",
"assets/assets/jsons/projects/arison.json": "6bf085a55a06810ebdf1168b4a16580a",
"assets/assets/jsons/projects/litepos.json": "336f6a5a5d43e9cbd683cf7b03753b49",
"assets/assets/images/mypicture.jpg": "c188083a0874ed910b7aeb0d536e410e",
"assets/assets/images/projects/paquik/1.jpeg": "d0b03991f6d5a15e21e92269e1eb40b5",
"assets/assets/images/projects/paquik/6.jpeg": "c4b0443244210aa036f7813e20890f4c",
"assets/assets/images/projects/paquik/7.jpeg": "bf0766866b810331b4115d1ef43be122",
"assets/assets/images/projects/paquik/8.jpeg": "093a6bc457a5d5d1e5fe7516100065b4",
"assets/assets/images/projects/paquik/4.jpeg": "d386a8a4bacbc4afe30f814df4571743",
"assets/assets/images/projects/paquik/5.jpeg": "8a1592d97dd28674ffe8cff10c2c30f7",
"assets/assets/images/projects/paquik/2.jpeg": "66679c215e475ea642abf5126f86e218",
"assets/assets/images/projects/paquik/3.jpeg": "662e80d3c146ec7e09095793c3d794d8",
"assets/assets/images/projects/arison/Video.mp4": "e0dc1b785850202d2c67ddd60f3de9f8",
"assets/assets/images/projects/mobisales/8.jpg": "2e28bce25ed63d0db14fa86e12e71b34",
"assets/assets/images/projects/mobisales/4.jpg": "7fc1bf3ced2c647f4843c4b21cdf8426",
"assets/assets/images/projects/mobisales/5.jpg": "6f8e6c992bc4d0d01d3c5d4e68ba0f4b",
"assets/assets/images/projects/mobisales/7.jpg": "2d3732f501ff6731b52884f3bee74941",
"assets/assets/images/projects/mobisales/6.jpg": "a7a5a748404e27f8dbf3af64c717df05",
"assets/assets/images/projects/mobisales/2.jpg": "4e964ff4d68e4438acca60a44c7ff17b",
"assets/assets/images/projects/mobisales/3.jpg": "addebf5ec114223189e3bfd602ee1e73",
"assets/assets/images/projects/mobisales/1.jpg": "5985559fc74b6e238a51cc8824898e82",
"assets/assets/images/projects/teeplus/5.webp": "df075978c2476f2827733ca1b945ef2d",
"assets/assets/images/projects/teeplus/4.webp": "7814e3367c344bdc11b0b6603f773971",
"assets/assets/images/projects/teeplus/3.webp": "551eec4be968ff20c23d67a6d4165e58",
"assets/assets/images/projects/teeplus/2.webp": "b8d43f834e8e517d800c6d198f476cc5",
"assets/assets/images/projects/teeplus/1.webp": "b6f8a654003f86c250b8158ba131e60a",
"assets/assets/images/projects/teeplus/6.webp": "1e7ed1e216933ad0749d46056d9bb455",
"assets/assets/images/projects/entreparents/1.jpeg": "69a5a28210adcc0cc381f3c318f2cf4b",
"assets/assets/images/projects/entreparents/6.jpeg": "bb0b23f4aefc05f9209ccc26aea1c6df",
"assets/assets/images/projects/entreparents/7.jpeg": "7af455b89cc59ef5bae1137c8cc5f60d",
"assets/assets/images/projects/entreparents/8.jpeg": "382e6841f73c1d61287edfa84bff39ee",
"assets/assets/images/projects/entreparents/4.jpeg": "27e868bfd24ce3a6aad327e52360eda1",
"assets/assets/images/projects/entreparents/5.jpeg": "8b7c4a05189a7d8ef11b50cb1bd3b9f6",
"assets/assets/images/projects/entreparents/2.jpeg": "3b37b5abaa6ab9c2f1fe71d381eee52e",
"assets/assets/images/projects/entreparents/3.jpeg": "2d04e36e94040d0e8d59739664106a51",
"assets/assets/images/projects_logos/paquik.png": "e7cb99ef802fc6d565630a2d1bddafec",
"assets/assets/images/projects_logos/mygym.png": "3186f70c1957a7f6c3e2a5912ba77ac3",
"assets/assets/images/projects_logos/entreparents.png": "0e8dd5c559c0ebeb85367378759c9246",
"assets/assets/svgs/smartphone.svg": "9ad4a6de3147d4d1e54927fd1305446b",
"assets/assets/svgs/flutter.svg": "749737f954a8acaae1b3d389b3fc857f",
"assets/assets/svgs/instagram.svg": "c446446eee93fa31d5c90d66a3113dfa",
"assets/assets/svgs/outsideWork.svg": "43e0ba652782425e01dca06a0f6ad5a1",
"assets/assets/svgs/live.svg": "f7cf4afb0df2a7424a2eaf6577e6c960",
"assets/assets/svgs/app_store.svg": "2928664fe1fc6aca88583a6f606d60ba",
"assets/assets/svgs/google_play.svg": "17615144cc51f86b469385d0a302141f",
"assets/assets/svgs/linkedin.svg": "0c821bba9132a6f55d18aa7bd4105e97",
"assets/assets/svgs/react.svg": "f0340143227cc3546b667fd9c4d1e1d8",
"assets/assets/svgs/university.svg": "f77fedeb2d5e598afc7cb8cdb24ac2b4",
"assets/assets/svgs/kernelSoft.svg": "d5e21fd7ea11b5f8e8574ed19c66705c",
"assets/assets/svgs/tradinos.svg": "728cee6975445cac092a0840ec3a3294",
"assets/assets/svgs/teeplus.svg": "5aded662435b312e1ed734fce2c72a84",
"assets/assets/sounds/click2.wav": "af519cbe48b2271eb973f53de33afbe9",
"assets/assets/sounds/click1.wav": "965e2df2d07559fad039df0973ade730",
"assets/assets/fonts/Epilogue/Epilogue-Medium.ttf": "ef359a4ec353f824d81223f3ed510ab4",
"assets/assets/fonts/Epilogue/Epilogue-ExtraBold.ttf": "87b909ffd2d2d62186a01abd14b51f12",
"assets/assets/fonts/Epilogue/Epilogue-SemiBold.ttf": "2dd53218fd21040933195f2fe0896703",
"assets/assets/fonts/Epilogue/Epilogue-Regular.ttf": "f546312a3011bd04c5d3833522f42046",
"assets/assets/fonts/Epilogue/Epilogue-Light.ttf": "4b80975e9bf4c2ab70a77db1783634c3",
"assets/assets/fonts/Epilogue/Epilogue-Bold.ttf": "1e4aa6f11ceffffd7739bbb4f64b2cd0",
"assets/assets/fonts/Sublima-ExtraBold/Sublima-ExtraBold.otf": "dd45f0024e36dd589d8aab2a0f3c91e9",
"assets/assets/fonts/Prigille-Hands/Prigille-Hands-Regular.ttf": "371f0b9f796405ff16aaed4f42daa005",
"assets/assets/fonts/Prigille-Hands/Prigille-Hands-Italic.ttf": "fc6cecf68ee0d178834e9b79f00a28c5",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
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
