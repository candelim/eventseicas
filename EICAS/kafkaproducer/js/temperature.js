var fec = require('./date.js'),
	kaf = require('./kafka.js'),
	d = new Date,
	sensor = Array("UTN0101","UTN0102","UTN0103"),
	fecha = fec.formatDate(d),
	topicName = 'temperature_topic';
	
for (var ms=[],i=0;i<3;++i)
	ms[i] = '{"id":2023,"idSensor":"' + sensor[Math.floor(Math.random()*sensor.length)] +'","tipoTerminal":"SENSOR","valor":"'+ Math.floor((Math.random() * 20)) + '", "unidad":"C", "fechaUltMod":"' + fecha +'","tipoProducto":"Temperatura"}';

kaf.insert(ms,topicName);

