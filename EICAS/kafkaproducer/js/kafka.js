exports.insert = function (mess,topicName) {

	
	const kafka = require('kafka-node'),
		Producer = kafka.Producer,
		KeyedMessage = kafka.KeyedMessage,
		ip = process.env.IP_HOST,
	    	Client = kafka.KafkaClient,
    		client = new Client({
        			autoConnect: false,
        			kafkaHost: ip +':9092'
    			}),
		producer = new Producer(client);

	var payloads = [
	   { topic: topicName, messages: mess, partition: 0 }
	];

	producer.on('ready', function () {
		producer.send(payloads, function (err, data) {
			console.log(data);
			producer.close();
			//process.exit();
		});
	});

	producer.on('error', function (err) {
		console.log('Error');
		producer.close();
		//process.exit();
	});

}

