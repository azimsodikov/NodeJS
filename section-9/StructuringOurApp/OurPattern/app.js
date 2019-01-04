var express = require('express');
var app = express();
/**
 * Controllers: Essentially controls what data html is getting 
 */
var apiController = require('./controllers/apiController');
var htmlController = require('./controllers/htmlController');

var port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.use('/', function (req, res, next) {
	console.log('Request Url:' + req.url);
	next();
});

htmlController(app);

apiController(app);
/**
 * We are passing the app to the apiController module and whenever it changes the app it will reflect in everywhere, since 
 * objects are passed bu reference.
 */

app.listen(port);