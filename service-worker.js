// Install service worker and cache files
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('hma-cache').then(cache => {
      return cache.addAll([
        '/',
        '/index.html',
        '/style.css',
        '/script.js'
      ]);
    })
  );
});

// Serve cached files when offline
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});