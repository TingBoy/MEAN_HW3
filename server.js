var express = require('express');
var app = express();

app.get('/', function (req, res) {
	res.send("Hellow World from server")
});

app.listen(8080);
console.log("Server running on port 3000");