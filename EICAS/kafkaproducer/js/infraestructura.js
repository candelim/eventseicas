var fec = require('./date.js'),
        kaf = require('./kafka.js'),
        d = new Date,
        fecha = fec.formatDate(d),
        topicName = 'infrastructure_topic';

for (var ms=[],i=0;i<3;++i)
        ms[i] = '{"id" : 2023, "fechaUltMod":"' + fecha +'","tipoProducto" : "Monitoreo infraestructura", "tipoTerminal" : "HOST", "unidad": "%", "idSensor" : 32,"valorCPU" : "' + Math.floor((Math.random() * 50)) + '", "valorMEM" : "' + Math.floor((Math.random() * 50)) + '", "valorFS" : "' + Math.floor((Math.random() * 50)) + '"}';

kaf.insert(ms,topicName);

