if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js')
  .then((reg) => {
    console.log('Registration succeeded. Scope is ' + reg.scope);
  }).catch((error) => {
    console.log('Registration failed with ' + error);
  });
}

const inputs = document.querySelectorAll('input[type="checkbox"]');

for (var i = 0; i < inputs.length; i++) {
  inputs[i].onclick = function() {
    const checkbox = this;
    const parent = checkbox.parentNode.parentNode;
    const messageEl = parent.querySelector('span');
    const dataImg = parent.getAttribute('data-image');
    const name = `./gallery/${dataImg}.jpg`;

    if (checkbox.checked) {
      caches.open('test-SW').then(function(cache) {
        cache.add(name).then(function() {
          messageEl.innerHTML = 'Saved';

          cache.keys().then(function(keys) {
            console.log('keys', keys);
            keys.forEach(function(request) {
              console.log('request', request);
            });
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
            keys.forEach(function(request) {
              console.log('request', request);
            });
          });
        });
      })
    }
  }
}
