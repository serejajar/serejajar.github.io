onconnect = function(e) {
  const [ port ] = e.ports[0];
  port.onmessage = function(e) {
    console.log('port.onmessage', e);
    port.postMessage('workerResult');
  }
}
