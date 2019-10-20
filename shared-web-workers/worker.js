onconnect = function(e) {
  console.log('Onconnect works!', e);
  const [ port ] = e.ports[0];
  port.onmessage = function(e) {
    port.postMessage('workerResult');
  }

  let i = 0;
  setInterval(function() {
    port.postMessage('workerResult' + ++i);
  }, 2000)
}
