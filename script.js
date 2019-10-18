const input = document.getElementById('search');
const list = document.querySelectorAll('#list > li');

let filtering = false;
input.oninput = function() {
  if (filtering) {
    return;
  }
  filtering = true;

  setTimeout(function() {
    const { value } = input;
    const regexp = new RegExp(`(^|\\s)${value}`, 'gi');

    console.time('Filtering with forEach');
    [].forEach.call(list, function(li, i, arr) {
      const { innerText:label } = li;
      li.style.display = regexp.test(label) ? '' : 'none';
    });
    console.timeEnd('Filtering with forEach');
    filtering = false;
  }, 500);

}
