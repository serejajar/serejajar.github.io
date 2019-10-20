onconnect = function(e) {
  const port = e.ports[0];
  let label = '';

  port.onmessage = function(e) {
    label = e.data;
    port.postMessage(`WW saved script name: ${label}`);
  }

  let i = 0;
  setInterval(function() {
    port.postMessage(`${label}: ${++i}`);
  }, 3000);
}
