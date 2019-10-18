const input = document.querySelector('input');
const btn = document.querySelector('button');
const result = document.getElementById('result')
const p = document.querySelector('p');

if (window.Worker) {
  const myWorker = new Worker('worker.js');
  btn.onclick = function() {
    let {value} = input;
    myWorker.postMessage([ value ]);
    console.log('Message posted to worker.js', value);
  }

  myWorker.onmessage = function(e) {
    console.log('Message from worker.js', e.data)
    result.innerText = e.data;
  }
} else {
  input.style.display = btn.style.display = 'none';
  p.style.display = 'block';
}