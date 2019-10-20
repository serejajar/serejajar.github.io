onconnect = function(e) {
  const port = e.ports[0];
  console.log('e.ports', e.ports[0]);

  port.onmessage = function(e) {
    const workerResult = 'Result: ';
    port.postMessage(workerResult);
  }

  postMessage('e.data');
}

postMessage('postMessage for testing');
