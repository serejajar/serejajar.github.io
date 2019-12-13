self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('v1').then((cache) => {
      return cache.addAll([
        './index.html',
        './app.js',
        './gallery/tower-clock.jpg',
      ]);
    })
  );
});

self.addEventListener('activate', (event) => {
  console.log('activate', event);
});

self.addEventListener('message', (event) => {
  console.log('message', event);
});



self.addEventListener('fetch', (event) => {
  console.log('fetch', event);
});

self.addEventListener('sync', (event) => {
  console.log('sync', event);
});

self.addEventListener('push', (event) => {
  console.log('push', event);
});
