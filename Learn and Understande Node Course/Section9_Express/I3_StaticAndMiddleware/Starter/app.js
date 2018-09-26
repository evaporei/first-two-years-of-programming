"use strict"
let express = require('express');
let app = express();

let port = process.env.PORT || 3000;

app.use("/assets", express.static(__dirname + "/public"))

app.use("/", (request, response, next) => {
	console.log("Request Url: " + request.url)
	next()//this one will be empty
})

app.get('/', function(req, res) {
	res.send('<html><head><link href="assets/style.css" type="text/css" rel="stylesheet" /></head><body><h1>Hello world!</h1></body></html>');
});

app.get('/person/:id', function(req, res) {
	res.send('<html><head></head><body><h1>Person: ' + req.param.id + '</h1></body></html>'); 
});

app.get('/api', function(req, res) {
	res.json({ firstname: 'John', lastname: 'Doe' });
});

app.listen(port);