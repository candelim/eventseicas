var express = require("express");
var bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var temp =  require("./routes/api-kafka.js")(app);

var server = app.listen(3003, function () {
    console.log("Listening on port %s...", server.address().port);
});

