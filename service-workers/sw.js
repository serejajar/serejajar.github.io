self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('name').then((cache) => {
      return cache.addAll([
        './index.html',
        './app.js',
        './gallery/tower-clock.jpg',
      ]);
    })
  );
});

self.addEventListener('activate', (event) => {
  console.log('activate', event.request);
});

self.addEventListener('message', (event) => {
  console.log('message', event.request);
});



self.addEventListener('fetch', (event) => {
  console.log('fetch', event.request);
  new Response('<p>Hello from your friendly neighbourhood service worker!</p>', {
    headers: { 'Content-Type': 'text/html' }
  });
});

self.addEventListener('sync', (event) => {
  console.log('sync', event.request);
});

self.addEventListener('push', (event) => {
  console.log('push', event.request);
});
