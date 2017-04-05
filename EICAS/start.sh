#!/bin/sh
if [ $# -eq 2 ]
then
        echo "============    Inicio    ============" > logs/log$1.log
        while true
        do
                        node js/$1 >> logs/log$1.log
                        sleep $2
        done
        echo "============     Fin      ============" >> logs/log$1.log
else
        echo "Cantidad de parametros incorrecta: ./start.sh script 3"
        echo "    script nombre del js a ejecutar [test2.js]"
        echo "    3 son los segundos del sleep [3]"
fi

