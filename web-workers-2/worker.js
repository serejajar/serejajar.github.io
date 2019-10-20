onmessage = function(e) {
  port.postMessage(e.data);

}

let i = 0;
setInterval(function() {
  port.postMessage('e.data ' + ++i);
}, 3000);
