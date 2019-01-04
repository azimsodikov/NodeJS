var express = require('express');
var app = express();
var mongoose = require('mongoose');

/**
 * Make sure to put User details not the account details
 */
mongoose.connect('mongodb://azimsodikov:b1101180@ds243963.mlab.com:43963/addressbook');

/**
 * Mongo DB provides function constructor called Schema
 */
var Schema = mongoose.Schema;

/**
 * We define our data structure using this schema and type of the data 
 */
var personSchema = new Schema({
	firstname: String,
	lastname: String,
	address: String
});

/**
 * This would be mongoose object that is saveble to the database
 */
var Person = mongoose.model('Person', personSchema);

var john = Person({
  firstname: 'John',
  lastname: 'Doe',
  address: '555 Main St.'
});

// save the user
john.save(function(err) {
  if (err) throw err;

  console.log('person saved!');
});

var jane = Person({
  firstname: 'Jane',
  lastname: 'Doe',
  address: '555 Main St.'
});

// save the user
jane.save(function(err) {
  if (err) throw err;

  console.log('person saved!');
});

var apiController = require('./controllers/apiController');
var htmlController = require('./controllers/htmlController');

var port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.use('/', function (req, res, next) {
	console.log('Request Url:' + req.url);
	
	// get all the users
	// we can ask for the specific queries
	Person.find({}, function(err, users) {
		if (err) throw err;
		
		// object of all the users
		console.log(users);
	});
	
	next();
});

htmlController(app);

apiController(app);

app.listen(port);