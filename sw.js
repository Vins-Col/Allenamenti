const CACHE_NAME = 'allenamenti-cache-v1';

const URLS_TO_CACHE = [
  '/Allenamenti/',
  '/Allenamenti/index.html',
  '/Allenamenti/manifest.webmanifest',
  '/Allenamenti/icons/icon-192.png',
  '/Allenamenti/icons/icon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(URLS_TO_CACHE))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
