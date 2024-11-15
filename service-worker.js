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
]

const CACHE_NAME = "oxa-pwa-cache-v1";

// Install event: cache all files in ASSETS
self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            console.log("Caching app and game files...");
            return cache.addAll(ASSETS);  // Use ASSETS from asset-list.js
        })
    );
});

self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request).then(cachedResponse => {
            // If the file is in the cache, serve it
            if (cachedResponse) {
                return cachedResponse;
            }

            // Otherwise, fetch it from the network and cache it
            console.log(`REQ: ${event.request}`);
            return fetch(event.request).then(networkResponse => {
                return caches.open(CACHE_NAME).then(cache => {
                    cache.put(event.request, networkResponse.clone());
                    return networkResponse;
                });
            });
        })
    );
});


// Activate event: clear old caches
self.addEventListener("activate", event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames
                    .filter(cacheName => cacheName !== CACHE_NAME)
                    .map(cacheName => caches.delete(cacheName))
            );
        })
    );
});
