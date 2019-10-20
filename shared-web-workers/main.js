// const btn = document.querySelector('button');

if (window.SharedWorker) {
  const myWorker = new SharedWorker('worker.js');

  // btn.onclick = function() {
  //   myWorker.port.postMessage(['value0', 'value1']);
  //   console.log('Message posted to worker');
  // }

  myWorker.port.onmessage = function(e) {
    console.log('Message received from worker', e.data[0]);
  }
} else {
  console.log('WW not works');
}
