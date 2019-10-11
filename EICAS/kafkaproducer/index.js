//var msgrec = require('./js/recarga.js');
//var msghum = require('./js/humidity.js');
//var msgele = require('./js/elevation.js');
//var msgpre = require('./js/pressure.js');

var msgtem = require('./js/temperature.js');

//var msginf = require('./js/infraestructura.js');
//var msgflo = require('./js/flow.js');
//setInterval(msgrec.msgrecarga, 5000);
//setInterval(msghum.msghumidity,5000);
//setInterval(msgele.msgelevation,5000);
//setInterval(msgpre.msgpressure, 5000);

var interval = process.env.INTERVAL,
    stopinterval = process.env.STOPINTERVAL;

var start = new Date();
console.log(start);
var tempInterval = setInterval(msgtem.msgtemperature,interval);

//setInterval(msginf.msginfraestructura,5000);
//setInterval(msgflo.msgflow, 5000);

setTimeout(stop, stopinterval);

function stop() {
  var stop = new Date();
  console.log(stop);
  clearInterval(tempInterval);
}
