exports.insert = function (mess,topicName) {


    var kafka = require('kafka-node'),
        Producer = kafka.Producer,
        ip = process.env.IP_HOST,
        client = new kafka.KafkaClient(ip +':2181'),
        producer = new Producer(client);
    console.log("IP_HOST:" + ip);

    var payloads = [
        { topic: topicName, messages: mess, partition: 0 }
    ];

    producer.on('ready', function () {
        producer.send(payloads, function (err, data) {
            console.log("Producer:" + data);
            process.exit();
        });
    });

    producer.on('error', function (err) {
        console.log('Error');
        process.exit();
    });

}

