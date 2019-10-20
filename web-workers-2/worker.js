onmessage = function(e) {
  postMessage(e.data);

}

let i = 0;
setInterval(function() {
  postMessage('e.data ' + ++i);
}, 3000);
