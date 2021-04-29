exports.msgflow = function () {
  var fec = require('./date.js'),
	kaf = require('./kafka.js'),
	d = new Date,
	sensor = Array("SEMPERTI-0101","SEMPERTI-0102","SEMPERTI-0103"),
	fecha = fec.formatDate(d),
	topicName = 'flow-topic';
	
  for (var ms=[],i=0;i<3;++i)
	ms[i] = '{"id":2023,"idSensor":"' + sensor[Math.floor(Math.random()*sensor.length)] +'","tipoTerminal":"SENSOR","valor":"'+ Math.floor((Math.random() * 20)) + '", "unidad":"Lts", "fechaUltMod":"' + fecha +'","tipoProducto":"Caudal"}';

  kaf.insert(ms,topicName);

}
