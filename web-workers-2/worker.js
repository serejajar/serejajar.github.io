let label = '';
let i = 0;
onmessage = function(e) {
  label = e.data;
  postMessage('WW saved script name: ' + label);
}

setInterval(function() {
  postMessage(`${label} ${++i}`);
}, 3000);
