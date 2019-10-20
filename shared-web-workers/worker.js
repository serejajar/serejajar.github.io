onconnect = function(e) {
  const port = e.ports[0];

  port.onmessage = function(e) {
    port.postMessage(e.data[0]);
  }

  setTimeout(function functionName() {
    port.postMessage('e.data ' + i);
  }, 3000);
}
