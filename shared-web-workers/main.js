const wrapper = document.querySelector('div');
const p = document.querySelector('p.error-msg');

if (window.SharedWorker) {
  const myWorker = new SharedWorker('worker.js');

  myWorker.port.postMessage(['value0', 'value1']);
  myWorker.port.onmessage = function(e) {
    console.log('Message received from worker', e);
  }
} else {
  wrapper.style.display = 'none';
  p.style.display = 'block';
}
