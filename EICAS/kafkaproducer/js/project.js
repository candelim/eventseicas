
'use strict';
const {Docker} = require('node-docker-api');
var kaf = require('./kafka.js');
var fec = require('./date.js');
var d = new Date,
    fecha = fec.formatDate(d);
const docker = new Docker({socketPath: '/var/run/docker.sock'});


exports.init = function () {
    setInterval(project, 5000);
}
function project() {
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
            var msj = [];
            msj[0] = '{"values":"' + list + '","tipoProducto":"proyecto" ,"fechaUltMod":\"' + fecha + '\"}';

            console.log(msj)
            kaf.insert(msj, 'proyect_topic');

        })


}


