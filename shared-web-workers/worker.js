onconnect = function(e) {
  const [ port ] = e.ports[0];
  console.log('e.ports', e.ports);
  port.onmessage = function(e) {
    console.log('port.onmessage', e);
    port.postMessage('workerResult');
  }
}

port.postMessage('Message from worker');
