(function() {
  const elements = document.querySelectorAll('[web-template]');

  for (let i = 0; i < elements.length; i++) {
    const file = elements[i].getAttribute('web-template');
    if (file) {
      let xhr = new XMLHttpRequest();
      const url = `components/${file}`;
      xhr.onload = function() {
        if (xhr.status != 200) {
          console.log(`Ошибка ${xhr.status}: ${xhr.statusText}`);
        } else {
          console.log(`Готово, получили ${xhr.response.length} байт`);
        }
      };
      xhr.open('GET', url, false);
      xhr.send();
    }
  }
})();
