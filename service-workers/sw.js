self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('v1').then((cache) => {
      return cache.addAll([
        './index.html',
        './app.js',
        './gallery/tower-clock.jpg',
        './gallery/default.jpg',
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



self.addEventListener('fetch', function(event) {
  console.log('fetch 123', event.request.url);
  event.respondWith(caches.match(event.request).then(function(response) {
    if (response !== undefined) {
      return response;
    } else {
      return fetch(event.request).then(function (response) {
        console.log('response', response);
        let responseClone = response.clone();

        caches.open('v1').then(function (cache) {
          cache.put(event.request, responseClone);
        });
        return response;
      }).catch(function () {
        console.log('CATCH !!!');
        return caches.match('./gallery/default.jpg');
      });
    }
  }));
});

self.addEventListener('sync', (event) => {
  console.log('sync', event.request);
});

self.addEventListener('push', (event) => {
  console.log('push', event.request);
});
