let label = '';
onmessage = function(e) {
  label = e.data;
  postMessage('WW saved script name: ' + label);
}

let i = 0;
setInterval(function() {
  postMessage(`${label} ${++i}`);
}, 3000);
