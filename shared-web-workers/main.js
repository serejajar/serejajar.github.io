const wrapper = document.querySelector('div');
const input = document.querySelector('input');
const btn = document.querySelector('button');
const result = document.getElementById('result')
const p = document.querySelector('p.error-msg');

if (window.SharedWorker) {
  const myWorker = new SharedWorker('worker.js');

  myWorker.port.onmessage = function(e) {
    console.log('Message from worker.js', e.data)
    result.innerText = e.data;
  }

  myWorker.port.onerror = function(e) {
    console.log('Error from worker.js', e)
  }

  myWorker.port.postMessage([ 'start message' ]);
} else {
  wrapper.style.display = 'none';
  p.style.display = 'block';
}
