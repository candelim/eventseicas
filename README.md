# README #

Configuracion inicial y ejecucion

A partir de una imagen de docker node:5, crear una imagen con el nombre appeicas

docker build -t appeicas .

Luego ejecutar, dependiendo del entorno

./startEventsDMO.sh o ./startEventsTST.sh

Para hacer stop y limpiar los contenedores que se hayan ejecutado ejecutar, dependiendo del entorno

./killEventsDMO.sh o ./killEventsTST.sh

La configuración de tiempo entre ejecuciones de cada servicio puede editarse en el script startEventsDMO.sh o startEventsTST (variable TIMER). La IP de cada entorno (DMO o TST está dada por la variable de entorno que se envía en el script IP_HOST)

### What is this repository for? ###

Estos son servicios que se ejecutan para enviar rafagas de eventos a EICAS para que sean procesados. 

### How do I get set up? ###

La configuración para el ambiente está en una variable de entorno IP_HOST que se está enviando en los scripts startEventsDMO.sh o startEventsTST.sh
El seteo de tiempo entre ejecuciones de cada servicio corriendo en cada contenedor se puede setear desde el script de inicio (startEventsDMO.sh o startEventsTST.sh) modificando la variable TIMER


### Contribution guidelines ###

* Writing tests
* Code review
* Other guidelines

### Who do I talk to? ###

* Repo owner or admin
* Other community or team contact