'use strict';
const {Docker} = require('node-docker-api');
var Q = require('q');

const docker = new Docker({socketPath: '/var/run/docker.sock'});

// List
Q(docker.container.list()).then(function (containers) {
    containers[1].status().then(function (container) {
        container.top()
            .then(function (processes) {
                console.log(processes)
            })
    })

})

