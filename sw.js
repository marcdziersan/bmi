const CACHE_NAME = 'bmi-calculator-v1';
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/styles.css',
  '/app.js',
  '/icons/icon-72x72.png',
  '/icons/icon-96x96.png',
  '/icons/icon-128x128.png',
  '/icons/icon-144x144.png',
  '/icons/icon-152x152.png',
  '/icons/icon-192x192.png',
  '/icons/icon-384x384.png',
  '/icons/icon-512x512.png'
];

// Install Event
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(ASSETS_TO_CACHE);
      })
  );
});

// Activate Event
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

// Fetch Event
self.addEventListener('fetch', event => {
  if (!(event.request.url.indexOf('http') === 0)) return;
  
  event.respondWith(
    fetch(event.request)
      .then(response => {
        // Make copy of response
        const resClone = response.clone();
        // Open cache
        caches.open(CACHE_NAME)
          .then(cache => {
            // Add response to cache
            cache.put(event.request, resClone);
          });
        return response;
      })
      .catch(() => caches.match(event.request).then(response => response))
  );
});