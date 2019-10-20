onconnect = function(e) {
  const port = e.ports[0];

  port.onmessage = function(e) {
    const workerResult = 'Result: ';
    port.postMessage(workerResult);
  }

  postMessage('e.data');

}

// onmessage = function(e) {
//   console.log('Worker: Message received from main script', e.data);
//   postMessage(e.data);
// }
