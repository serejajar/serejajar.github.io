onconnect = function(e) {
  const port = e.ports[0];
  console.log('e.ports', e.ports[0]);

  port.onmessage = function(e) {
    console.log('e', e);
    const workerResult = 'Result';
    port.postMessage(workerResult);
  }

  port.postMessage('e.data');
}
