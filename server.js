var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('resume', ['resume']);
var bodyParser = require('body-parser');

app.get('/', function (req, res) {
	res.send("Hello World from server")
});

app.listen(8080);
console.log("Server running on port 8080");