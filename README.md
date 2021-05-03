# README #

### Introducción ###

Este repositorio sirve como prueba de concepto de servicios que se ejecutan para enviar eventos (mensajes) a distintos topics de Kafka como una prueba de concepto de AMQStreams 
Estos servcios son sumilaciones de sensores de temperatura, humedad, altitud, cuadal y presión para una prueba de concepto que permitiría el desarrollo de servicios IoT integrados mediante AMQStreams

### Cómo realizar el despliegue de la aplicación ###

Esta aplicación está pensada para poder usar las mejores prácticas en OCP (OpenShift Container Platform) lo que permite realizar el build y deploy de esta aplicación utilizando builder images.

Para ello alcanza con realizar, utilizando el cliente OC, la ejecución del siguiente comando:

`
oc new-app https://github.com/candelim/eventseicas.git#amqstreams
` 

### Configuraciones para la aplicación ###

Para el correcto funcionamiento de la aplicación, solo deben configurarse 2 variables de entornos que identificarán en endpoint y puerto correspondientes al cluster de Kafka (AMQStreams) al cual se deba realizar la conexión.

Lo único necesario es realizar la configuración de las variables de entorno según corresponda. Para hacerlo de una forma más segura, se puede hacer un pause y luego un resume del deployment

```
oc rollout pause deployment/eventseicas
oc set env deployment/eventseicas IP_HOST=<host-servicio-amqstreams> PORT_HOST=<9092>
oc rollout resume deployment/eventeicas
```
