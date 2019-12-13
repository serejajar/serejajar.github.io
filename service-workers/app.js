if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js')
  .then((reg) => {
    console.log('Registration succeeded. Scope is ' + reg.scope);
  }).catch((error) => {
    console.log('Registration failed with ' + error);
  });
}

const inputs = document.querySelectorAll('input[type="checkbox"]');


caches.keys().then(function(list) {
  console.log('caches.keys()', list);
});


for (var i = 0; i < inputs.length; i++) {
  inputs[i].onclick = function() {
    const checkbox = this;
    const parent = checkbox.parentNode.parentNode;
    const messageEl = parent.querySelector('span');
    const dataImg = parent.getAttribute('data-image');
    const name = `./gallery/${dataImg}.jpg`;
    console.log(checkbox.checked, name);

    if (checkbox.checked) {
      caches.open('test-SW').then(function(cache) {
        cache.add(name).then(function() {
          messageEl.innerHTML = 'Saved';
        });;
      })
    } else {
      caches.open('test-SW').then(function(cache) {
        cache.delete(name).then(function(isDeleted) {
          console.log('cache.delete', isDeleted);
          if (isDeleted) {
            messageEl.innerHTML = 'Not saved';
          }
        });
      })
    }
  }
}
