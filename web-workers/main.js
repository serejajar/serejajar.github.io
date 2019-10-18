const input = document.querySelector('input');
const btn = document.querySelector('button');
const p = document.querySelector('p');

if (window.Worker) {
  const myWorker = new Worker("worker.js");
  btn.onclick = function() {
    myWorker.postMessage([ input.value ]);
    console.log('Message posted to worker.js');
  }

  myWorker.onmessage = function(e) {
    console.log('Message from worker.js', e);
  }
} else {
  input.style.display = btn.style.display = 'none';
  p.style.display = 'block';
}
