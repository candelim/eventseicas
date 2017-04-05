#!/bin/bash
docker run -e SCRIPTJS=recarga.js -e TIMER=2 --name eicas_apprec -d appeicas tail -d /dev/null
docker run -e SCRIPTJS=infraestructura.js -e TIMER=5 --name eicas_appinfra -d appeicas tail -d /dev/null
docker run -e SCRIPTJS=pressure.js -e TIMER=3 --name eicas_apppres -d appeicas tail -d /dev/null
docker run -e SCRIPTJS=humidity.js -e TIMER=3 --name eicas_apphum -d appeicas tail -d /dev/null
docker run -e SCRIPTJS=elevation.js -e TIMER=3 --name eicas_appelev -d appeicas tail -d /dev/null
docker run -e SCRIPTJS=temperature.js -e TIMER=3 --name eicas_apptemp -d appeicas tail -d /dev/null

