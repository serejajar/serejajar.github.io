console.log('Web Worker file');
onmessage = function(e) {
  console.log('Worker: Message received from main script', e);
  postMessage('works');
}
