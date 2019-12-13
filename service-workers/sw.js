self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('v1').then((cache) => {
      return cache.addAll([
        './sw-test/',
        './sw-test/index.html',
        './sw-test/style.css',
        './sw-test/app.js',
        './sw-test/image-list.js',
        './sw-test/star-wars-logo.jpg',
        './sw-test/gallery/',
        './sw-test/gallery/bountyHunters.jpg',
        './sw-test/gallery/myLittleVader.jpg',
        './sw-test/gallery/snowTroopers.jpg'
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
