var kaf = require('../kafka.js');

var appRouter = function(app) {
	app.post("/temp", function(req, res) {
		if(!req.query.temp || !req.query.fecha || !req.query.idSens) {
			return res.send({"status": "error", "message": "missingargs"});
		} else {
			var temperature = req.query.temp,
			fecha = req.query.fecha,
			idSensor = req.query.idSens,
			topicName = 'temperature-topic',
			ms = '{"id":2023,"idSensor":"' + idSensor + '","tipoTerminal":"SENSOR","valor":"'+ temperature + '", "unidad":"C", "fechaUltMod":"' + fecha +'","tipoProducto":"Temperatura"}';
			kaf.insert(ms,topicName);
			return res.send("OK");
		}
	});
	
	app.get("/temp", function(req, res) {
		return res.send("La temperatura esta en los valores normales");
	});
}

module.exports = appRouter;

