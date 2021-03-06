exports.insert = function (mess,topicName) {


    var kafka = require('kafka-node'),
        Producer = kafka.Producer,
        ip = process.env.IP_HOST,
        client = new kafka.Client(ip +':2181'),
        producer = new Producer(client);

    var payloads = [
        { topic: topicName, messages: mess, partition: 0 }
    ];

    producer.on('ready', function () {
        producer.send(payloads, function (err, data) {
            console.log(data);
            process.exit();
        });
    });

    producer.on('error', function (err) {
        console.log('Error');
        process.exit();
    });

}

