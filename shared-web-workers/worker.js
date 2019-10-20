let label = '';
let i = 0;
onconnect = function(e) {
  const port = e.ports[0];

  port.onmessage = function(e) {
    label = e.data;
    port.postMessage(`WW saved script name: ${label}`);
  }

  setInterval(function() {
    port.postMessage(`${label} ${++i}`);
  }, 3000);
}
