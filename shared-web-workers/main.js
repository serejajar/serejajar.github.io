const wrapper = document.querySelector('div');
const p = document.querySelector('p.error-msg');

if (window.SharedWorker) {
  const myWorker = new SharedWorker('worker.js');

  document.body.onclick = function() {
    myWorker.port.postMessage(['value0', 'value1']);
    console.log('Message posted to worker.js');
  }

  myWorker.port.onmessage = function(e) {
    console.log('Message received from worker', e);
  }
  myWorker.port.onerror = function(e) {
    console.log('Error received from worker', e);
  }
} else {
  wrapper.style.display = 'none';
  p.style.display = 'block';
}
