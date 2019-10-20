const wrapper = document.querySelector('div');
const input = document.querySelector('input');
const btn = document.querySelector('button');
const result = document.getElementById('result')
const p = document.querySelector('p.error-msg');

if (window.Worker) {
  const myWorker = new Worker('worker.js');

  myWorker.onmessage = function(e) {
    console.log('Message from worker: ', e.data)
    result.innerText = e.data;
  }

  myWorker.onerror = function(e) {
    console.log('Error from worker: ', e)
  }

  myWorker.postMessage('main.js');
} else {
  wrapper.style.display = 'none';
  p.style.display = 'block';
}
