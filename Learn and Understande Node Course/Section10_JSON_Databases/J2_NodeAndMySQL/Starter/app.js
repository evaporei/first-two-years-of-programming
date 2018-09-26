var express = require('express');
var app = express();
var mysql = require("mysql")



var apiController = require('./controllers/apiController');
var htmlController = require('./controllers/htmlController');

var port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.use('/', function (req, res, next) {
	console.log('Request Url:' + req.url);

	var connection = mysql.createConnection({
		host: "localhost",
		user: "test",
		password: "test",
		database: "addressbook"
	})

	connection.query("SELECT People.ID, Firstname, Lastname, Address FROM People INNER JOIN PersonAddresses ON People.ID = PersonAddresses.PersonID INNER JOIN Addresses ON PersonAddresses.AddressID = Addresses.ID", (error, rows) => {
		//async func, -> when it is done this will execute
		if (error)
			throw error
		console.log(rows)//array of objects, each a row
		console.log(rows[0].Firstname)//Firstname, a column
	})

	next();
});


htmlController(app);

apiController(app);

app.listen(port);