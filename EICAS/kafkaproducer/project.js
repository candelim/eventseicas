
'use strict';
const {Docker} = require('node-docker-api');
var kaf = require('./kafka.js');
var fec = require('./date.js');
var d = new Date,
    fecha = fec.formatDate(d);
const docker = new Docker({socketPath: '/var/run/docker.sock'});

var list = "";
// List
docker.container.list()
// Inspect
    .then(function (containers) {
        for (var i = 0; i < containers.length; i++) {
            var name = containers[i].data.Names[0] + "";
            console.log(name.substring(1, name.length));
            list = list + " " + name.substring(1, name.length)

        }
        var tst = [];
        var dmo= [];
        tst[0] = '{"value":' + list + ',"tipoProducto":"Proyecto" ,"fecha":\'' + fecha + '\'"level1":"tst"}';
        dmo[0] = '{"value":' + list + ',"tipoProducto":"Proyecto" ,"fecha":\'' + fecha + '\'"level1":"dmo"}';

        console.log(tst)
        console.log(dmo);
        kaf.insert(tst, 'proyect_topic');
        kaf.insert(dmo, 'proyect_topic','192.168.3.12');

    })






