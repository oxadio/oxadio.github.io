const CACHE_VERSION = "v8"; // Increment this version whenever there are changes
const CACHE_NAME = `oxa-pwa-cache-${CACHE_VERSION}`;

const ASSETS = [
    "/",
    "./index.html",
    "./games/underrun/assets/png/underrun.png",
    "./games/underrun/assets/png/q2.png",
    "./games/underrun/assets/js/underrun.compact.js",
    "./games/assets/css/style.css",
    "./games/captain-callisto/index.html",
    "./assets/fonts/Kode_Mono/static/KodeMono-Bold.ttf",
    "./games/underrun/index.html",
    "./assets/favicon/favicon-16x16.png",
    "./games/back-to-home/index.html",
    "./games/hit-the-space/assets/js/script.js",
    "./games/underrun/assets/css/style.css",
    "./games/underrun/assets/js/underrun.min.js",
    "./asset-list.js",
    "./assets/favicon/site.webmanifest",
    "./service-worker.js",
    "./assets/favicon/favicon-32x32.png",
    "./games/underrun/assets/png/l1.png",
    "./assets/favicon/apple-touch-icon.png",
    "./assets/fonts/Kode_Mono/KodeMono-VariableFont_wght.ttf",
    "./games/underrun/assets/js/underrun.min.beauty.js",
    "./assets/fonts/font.css",
    "./games/assets/images/underrun.png",
    "./assets/css/style.css",
    "./assets/favicon/favicon.ico",
    "./games/assets/images/captain-callisto.png",
    "./games/hit-the-space/assets/css/style.css",
    "./games/assets/images/hit-the-space.png",
    "./games/hit-the-space/index.html",
    "./assets/fonts/Kode_Mono/static/KodeMono-Regular.ttf",
    "./manifest.json",
    "./games/underrun/assets/js/underrun.js",
    "./assets/fonts/Kode_Mono/static/KodeMono-SemiBold.ttf",
    "./assets/fonts/Bruno_Ace_SC/BrunoAceSC-Regular.ttf",
    "./games/captain-callisto/index.js",
    "./assets/favicon/android-chrome-192x192.png",
    "./games/underrun/assets/png/l2.png",
    "./games/index.html",
    "./assets/fonts/Kode_Mono/static/KodeMono-Medium.ttf",
    "./games/assets/images/back-to-home.png",
    "./assets/fonts/Bruno_Ace/BrunoAce-Regular.ttf",
    "./games/back-to-home/app.js",
    "./games/captain-callisto/dist.zip",
    "./games/underrun/assets/png/l3.png",
    "./assets/favicon/android-chrome-512x512.png"
];

// Install event: cache all files in ASSETS
self.addEventListener("install", event => {
    // console.log("Installing Service Worker and caching files...");
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            // console.log("Caching app and game files...");
            return cache.addAll(ASSETS);
        })
    );
    self.skipWaiting(); // Activate the new Service Worker immediately
});

// Fetch event: serve files from cache or fetch from the network
self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request).then(cachedResponse => {
            if (cachedResponse) {
                return cachedResponse;
            }

            // console.log(`Fetching from network: ${event.request.url}`);
            return fetch(event.request).then(networkResponse => {
                return caches.open(CACHE_NAME).then(cache => {
                    cache.put(event.request, networkResponse.clone());
                    return networkResponse;
                }).catch(err => {
                    // console.log("Err:", err);
                }) ;
            }).catch(err => {
                // console.log("Err:", err);
            });
        })
    );
});

// Activate event: delete old caches and force new version
self.addEventListener("activate", event => {
    // console.log("Activating new Service Worker...");
    event.waitUntil(
        (async () => {
            const cacheNames = await caches.keys();
            await Promise.all(
                cacheNames
                    .filter(cacheName => cacheName !== CACHE_NAME)
                    .map(cacheName => {
                        // console.log(`Deleting old cache: ${cacheName}`);
                        return caches.delete(cacheName);
                    })
            );
            return self.clients.claim(); // Take control of any open clients
        })()
    );
});

// Notify users of new updates
self.addEventListener("message", event => {
    if (event.data.type === "SKIP_WAITING") {
        self.skipWaiting();
    }
});
