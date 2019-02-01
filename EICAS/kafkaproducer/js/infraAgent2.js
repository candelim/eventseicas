var monitor = require('os-monitor'),
    disk = require('diskusage'),
    hostname = require('os-hostname'),
    sleep = require('sleep'),
    array = [],
    ms,
    fec = require('./date.js'),
    kaf = require('./kafka.js'),
    topicName = 'infra_topic';



exports.init = function () {
    monitor.start();
    setInterval(infraAgent2, 5000);
}
function infraAgent2() {

    hostname(function (err, hname) {
        array[0] = hname;
    });

    monitor.on('monitor', function (event) {

        var d = new Date,
            fecha = fec.formatDate(d);

        array[1] = event.loadavg[0] * 100;
        array[2] = ((event.totalmem - event.freemem) / event.totalmem) * 100;

        disk.check('/', function (err, info) {
            array[3] = ((info.total - info.available) / info.total) * 100;
        });


        ms = '{"id" : 2023, "fechaUltMod":"' + fecha + '","tipoProducto" : "Monitoreo infraestructura", "tipoTerminal" : "' + array[0] + '", "unidad": "%", "idSensor" : 32,"valorCPU" : "' + Math.round(array[1]) + '", "valorMEM" : "' + Math.round(array[2]) + '", "valorFS" : "' + Math.round(array[3]) + '"}';
        console.log(ms)
        kaf.insert(ms, topicName);
    });

}