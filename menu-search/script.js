const input = document.getElementById('filter');
const selector = document.getElementById('filter-type');
const list = document.querySelectorAll('#list > li');

let filtering = false;

input.oninput = function() {
  if (filtering) {
    return;
  }
  filtering = true;

  const filterType = selector.options[selector.selectedIndex].value;

  setTimeout(function() {
    const { value } = input;
    const regExpValue = filterType === 'start' ? `(^|\\s)${value}` : value;
    const regexp = new RegExp(regExpValue, 'gi');

    console.time('Filtering with forEach');
    [].forEach.call(list, function(li, i, arr) {
      const { innerText:label } = li;
      li.style.display = regexp.test(label) ? '' : 'none';
    });
    console.timeEnd('Filtering with forEach');
    filtering = false;
  }, 500);

}
