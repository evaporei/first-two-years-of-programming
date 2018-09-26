var express = require('express');
var app = express();
var mongoose = require("mongoose")

mongoose.connect("mongodb://test:test@ds111798.mlab.com:11798/addressbook")
//mongoose.connect("localhost:27017")

var Schema = mongoose.Schema

var personSchema = new Schema({
	firstName: String,
	lastName: String,
	address: String
})

var Person = mongoose.model("Person", personSchema)

var john = Person({
	firstName: "John",
	lastName: "Doe",
	address: "555 Main St."
})

john.save((error) => {
	if (error)
		throw error
	console.log("Person saved!")
})

var jane = Person({
	firstName: "Jane",
	lastName: "Doe",
	address: "555 Main St."
})

jane.save((error) => {
	if (error)
		throw error
	console.log("Person saved!")
})
var apiController = require('./controllers/apiController');
var htmlController = require('./controllers/htmlController');

var port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.use('/', function (req, res, next) {
	console.log('Request Url:' + req.url);

	//get all the users
	Person.find({}, (error, users) => {
		if (error)
			throw error
		console.log(users)
	})
	next();
});

htmlController(app);

apiController(app);

app.listen(port);