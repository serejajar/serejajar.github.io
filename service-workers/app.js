if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js')
  .then((reg) => {
    console.log('Registration succeeded. Scope is ' + reg.scope);
  }).catch((error) => {
    console.log('Registration failed with ' + error);
  });
}

const inputs = document.querySelectorAll('input[type="checkbox"]');

cache.keys().then(function(keys) {
  const urls = keys.map(function(item) {
    return item.url;
  });

  for (var i = 0; i < inputs.length; i++) {
    const parent = inputs[i].parentNode.parentNode;
    const checkbox = inputs[i];
    const messageEl = parent.querySelector('span');
    const dataImg = parent.getAttribute('data-image');
    const name = `./gallery/${dataImg}.jpg`;

    urls.find(url => {
      console.log(url.indexOf(name));
    });

    if (urls.find(url => url.indexOf(name) !== -1)) {
      checkbox.checked = true;
      messageEl.innerHTML = 'Saved';
    } else {
      checkbox.checked = false;
      messageEl.innerHTML = 'Not saved';
    }

    checkbox.onclick = function() {
      if (checkbox.checked) {
        caches.open('test-SW').then(function(cache) {
          cache.add(name).then(function() {
            messageEl.innerHTML = 'Saved';

            cache.keys().then(function(keys) {
              console.log('keys', keys);
            });
          });;
        })
      } else {
        caches.open('test-SW').then(function(cache) {
          cache.delete(name).then(function(isDeleted) {
            if (isDeleted) {
              messageEl.innerHTML = 'Not saved';
            }

            cache.keys().then(function(keys) {
              console.log('keys', keys);
            });
          });
        })
      }
    }
  }
});
