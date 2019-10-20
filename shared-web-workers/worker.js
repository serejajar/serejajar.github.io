onconnect = function(e) {
  const port = e.ports[0];

  port.onmessage = function(e) {
    console.log('onmessage', e);
    port.postMessage(e.data[0]);
  }

  setInterval(function() {
    port.postMessage('e.data ' + i);
  }, 3000);
}
