var express = require('express');
var bodyParser = require('body-parser');
var app = express();
/**
 * REST: An architectual style for building APIs.
 * Stands for 'Representational State Transfer'. When we build our APIs we decide that HTTP verbs and URLs mean something. 
 */
var port = process.env.PORT || 3000;

var urlencodedParser = bodyParser.urlencoded({ extended: false });
var jsonParser = bodyParser.json();

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.use('/', function (req, res, next) {
	console.log('Request Url:' + req.url);
	next();
});

app.get('/', function(req, res) {
	res.render('index');
});

app.get('/person/:id', function(req, res) {
	res.render('person', { ID: req.params.id, Qstr: req.query.qstr });
});

app.post('/person', urlencodedParser, function(req, res) {
	res.send('Thank you!');
	console.log(req.body.firstname);
	console.log(req.body.lastname);
});

/**
 * * Building RESTful API's means you build your API's in a way that, by just looking at the URL's and understand what
 * * what it is doing. Handling the calls seperatly. When we say build RESTful API's all it means is build API's
 * * in a way one would anticipate it.
 */
app.get('/api/person/:id', function(req, res) {
	// get that data from database
	res.json({ firstname: 'John', lastname: 'Doe' });
});

app.post('/api/person', jsonParser, function(req, res) {
	// save to the database
});

app.delete('/api/person/:id', function(req, res) {
	// delete from the database
});

app.listen(port);