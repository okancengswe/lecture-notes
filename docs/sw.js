const CACHE_NAME = 'okan-v1';
// Önbelleğe alınacak dosyalar ana dizine göredir
const assets = [
  './',
  './index.html',
  './manifest.json',
  './assets/icon.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(assets))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
