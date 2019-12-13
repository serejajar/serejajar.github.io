self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('test-SW').then((cache) => {
      return cache.addAll([
        './index.html',
        './app.js',
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  console.log('fetch 222', event.request.url);
  event.respondWith(caches.match(event.request).then(function(response) {
    console.log('caches.match', response);
    if (response !== undefined) {
      return response;
    } else {
      return fetch(event.request).then(function (response) {
        console.log('fetch response', response);
        if (response.status != 404) {
          let responseClone = response.clone();

          caches.open('test-SW').then(function (cache) {
            cache.put(event.request, responseClone);
          })
        }

        return response;
      }).catch(function () {
        console.log('CATCH !!!');
        return caches.match('./gallery/default.jpg');
      });
    }
  }));
});
