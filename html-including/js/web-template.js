(function() {
  const elements = document.querySelectorAll('[web-template]');

  for (let i = 0; i < elements.length; i++) {
    const wrapper = elements[i];
    const file = wrapper.getAttribute('web-template');
    // let data = wrapper.innerHTML;

    if (file) {
      let xhr = new XMLHttpRequest();
      const url = `components/${file}`;
      xhr.onload = function() {
        if (xhr.status != 200) {
          console.log(`Ошибка ${xhr.status}: ${xhr.statusText}`);
        } else {
          wrapper.innerHTML = xhr.response;
        }
      };
      xhr.open('GET', url, true);
      xhr.send();
    }
  }
})();
