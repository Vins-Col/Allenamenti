const CACHE_NAME = 'jarvis-hud-cache-v1';
const URLS_TO_CACHE = [
  '/jarvis-dashboard-pwa/',
  '/jarvis-dashboard-pwa/index.html'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(URLS_TO_CACHE))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(resp => resp || fetch(event.request))
  );
});
