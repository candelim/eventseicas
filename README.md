# README #

Configuracion inicial y ejecucion

A partir de una imagen de docker node:5, crear una imagen con el nombre appeicas

docker build -t appeicas .

Luego ejecutar

./startEvents.sh

Para hacer stop y limpiar los contenedores que se hayan ejecutado ejecutar

./killEvents.sh

La configuración de tiempo entre ejecuciones de cada servicio puede editarse en el script startEvents.sh (variable TIMER)

### What is this repository for? ###

Estos son servicios que se ejecutan para enviar rafagas de eventos a EICAS para que sean procesados. 

### How do I get set up? ###

La configuración para el ambiente de DMO esta en el uso de kafka.js.
El seteo de tiempo entre ejecuciones de cada servicio corriendo en cada contenedor se puede setear desde el script de inicio (startEvents.sh) modificando la variable TIMER


### Contribution guidelines ###

* Writing tests
* Code review
* Other guidelines

### Who do I talk to? ###

* Repo owner or admin
* Other community or team contact