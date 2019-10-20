onconnect = function(e) {
  const [ port ] = e.ports[0];
  port.onmessage = function(e) {
    console.log('port.onmessage', e);
    port.postMessage('workerResult');
  }

  port.postMessage('Start setInterval');

  let i = 0;
  setInterval(function() {
    console.log('Interval ' + i);
    port.postMessage('workerResult ' + ++i);
  }, 2000)
}
