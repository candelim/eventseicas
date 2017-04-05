#!/bin/sh

DIR="/root/kafkaproducer"
COUNT=`tail -1 $DIR/logs/api.log | grep 'Error' | wc -l`

if [ $COUNT -eq 0 ]
then
        echo 'Proceso: '`ps -fea | grep "[n]ode ${DIR}/js/api.js" | awk '{ print $2 }'`
        echo 'Ejecutando OK'
else
        echo 'Stop API'
        `ps -fea | grep "[n]ode ${DIR}/js/api.js" | awk '{ print $2 }' | xargs -r kill`
fi

