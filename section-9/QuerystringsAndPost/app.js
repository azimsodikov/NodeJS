var express = require('express');
var bodyParser = require('body-parser'); // To proccess the request body
var app = express();

/**
 * QueryString: 
 */

var port = process.env.PORT || 3000;

var urlencodedParser = bodyParser.urlencoded({ extended: false });
var jsonParser = bodyParser.json(); // This is available to us in the bodyParser function 

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
	// query string is parsed by express and made us available in req.query object
});

app.post('/person', urlencodedParser, function(req, res) {
	// urlencodedParser will be called before callback function is called, so it will proccess the data first
	// action in the form tag will match this url and submits it to this form
	res.send('Thank you!');
	console.log(req.body.firstname);
	console.log(req.body.lastname);
});

app.post('/personjson', jsonParser, function(req, res) {
	res.send('Thank you for the JSON data!');
	console.log(req.body.firstname);
	console.log(req.body.lastname);
});

app.get('/api', function(req, res) {
	res.json({ firstname: 'John', lastname: 'Doe' });
});

app.listen(port);