onconnect = function(e) {
  const port = e.ports[0];

  port.onmessage = function(e) {
    port.postMessage(e.data[0]);
  }

  for (var i = 0; i < 100000000; i++) {
    port.postMessage('e.data ' + i);
  }
}
