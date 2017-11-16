var msgrec = require('./js/recarga.js');
var msghum = require('./js/humidity.js);
var msgele = require('./js/elevation.js);
setInterval(msgrec.msgrecarga, 5000);
setInterval(msghum.msghumidity,5000);
setInterval(msgele.msgelevation,5000);
