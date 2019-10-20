const wrapper = document.querySelector('div');
const input = document.querySelector('input');
const btn = document.querySelector('button');
const result = document.getElementById('result')
const p = document.querySelector('p.error-msg');

if (window.SharedWorker) {
  const myWorker = new SharedWorker('worker.js');
  btn.onclick = function() {
    let {value} = input;
    myWorker.port.postMessage([ value ]);
    console.log('Message posted to worker.js', value);
  }

  myWorker.port.onmessage = function(e) {
    console.log('Message from worker.js', e.data)
    result.innerText = e.data;
  }
} else {
  wrapper.style.display = 'none';
  p.style.display = 'block';
}
