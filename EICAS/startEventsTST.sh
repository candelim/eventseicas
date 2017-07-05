#!/bin/bash
docker run -e SCRIPTJS=recarga.js -e TIMER=2 -e IP_HOST=192.168.3.15 --name eicas_tst_apprec -d appeicas tail -d /dev/null
docker run -e SCRIPTJS=infraestructura.js -e TIMER=5 -e IP_HOST=192.168.3.15 --name eicas_tst_appinfra -d appeicas tail -d /dev/null
docker run -e SCRIPTJS=pressure.js -e TIMER=3 -e IP_HOST=192.168.3.15 --name eicas_tst_apppres -d appeicas tail -d /dev/null
docker run -e SCRIPTJS=humidity.js -e TIMER=3 -e IP_HOST=192.168.3.15 --name eicas_tst_apphum -d appeicas tail -d /dev/null
docker run -e SCRIPTJS=elevation.js -e TIMER=3 -e IP_HOST=192.168.3.15 --name eicas_tst_appelev -d appeicas tail -d /dev/null
docker run -e SCRIPTJS=temperature.js -e TIMER=3 -e IP_HOST=192.168.3.15 --name eicas_tst_apptemp -d appeicas tail -d /dev/null
