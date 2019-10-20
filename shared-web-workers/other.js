if (window.SharedWorker) {
  const myWorker = new SharedWorker('worker.js');

  myWorker.port.onmessage = function(e) {
    console.log('Message received from worker', e.data[0]);
  }
} else {
  console.log('WW not works');
}
