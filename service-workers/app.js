if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js')
  .then((reg) => {
    console.log('Registration succeeded. Scope is ' + reg.scope);
  }).catch((error) => {
    console.log('Registration failed with ' + error);
  });
}

const inputs = document.querySelectorAll('input[type="checkbox"]');

caches.open('test-SW').then(function(cache) {
  cache.keys().then(function(keys) {
    console.log('KEYS', keys);
    const urls = keys.map(function(item) {
      return item.url;
    });

    for (var i = 0; i < inputs.length; i++) {
      const parent = inputs[i].parentNode.parentNode;
      const checkbox = inputs[i];
      const messageEl = parent.querySelector('span');
      const dataImg = parent.getAttribute('data-image');
      const name = `./gallery/${dataImg}.jpg`;

      console.log(urls.find(url => url.indexOf(name) !== -1));

      if (urls.find(url => url.indexOf(name) !== -1)) {
        checkbox.checked = true;
        messageEl.innerHTML = 'Saved';
      } else {
        checkbox.checked = false;
        messageEl.innerHTML = 'Not saved';
      }

      checkbox.onclick = function() {
        if (checkbox.checked) {
          cache.add(name).then(function() {
            messageEl.innerHTML = 'Saved';

            cache.keys().then(function(keys) {
              console.log('keys', keys);
            });
          });
        } else {
          cache.delete(name).then(function(isDeleted) {
            if (isDeleted) {
              messageEl.innerHTML = 'Not saved';
            }

            cache.keys().then(function(keys) {
              console.log('keys', keys);
            });
          });
        }
      }
    }
  });
});
