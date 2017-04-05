#!/bin/sh

DIR="/root/kafkaproducer"
COUNT=`ps -fea | grep "[n]ode ${DIR}/js/api.js" | wc -l`

if [ $COUNT -eq 1 ]
then
        echo 'Proceso: '`ps -fea | grep "[n]ode ${DIR}/js/api.js" | awk '{ print $2 }'`
        echo 'Ejecutando OK'
else
	echo 'Inicio API'
	/usr/local/bin/node $DIR/js/api.js > $DIR/logs/api.log &
fi
