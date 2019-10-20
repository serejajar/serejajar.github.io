onconnect = function(e) {
  const [ port ] = e.ports[0];
  port.onmessage = function(e) {
    port.postMessage('workerResult');
  }

  port.postMessage('Start setInterval');
  
  let i = 0;
  setInterval(function() {
    port.postMessage('workerResult' + ++i);
  }, 2000)
}
