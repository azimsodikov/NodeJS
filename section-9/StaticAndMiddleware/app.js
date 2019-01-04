var express = require('express');
var app = express();
/**
 * Middleware: Code that sits between two laters of software. In the case of Express, sitting between the request and the response
 * Static: Not Dynamic. In other words, not processed bu code in any way. For example HTML, CSS, and image files are 'static' files.
 */

var port = process.env.PORT || 3000;

/**
 * This is the example of middleware in express and serving the static files that browser requests. Whenever browser requests styles through
 * href tag, it makes another http request for that file and express serves that file from public directory
 */
app.use('/assets', express.static(__dirname + '/public')); // This is the location where node looks for that static files

app.use('/', function (req, res, next) {
	// This is our custom middleware that will happen every time request is made to this url and next() will make the node to keep on going
	console.log('Request Url:' + req.url);
	next();
});

app.get('/', function(req, res) {
	res.send('<html><head><link href=assets/style.css type=text/css rel=stylesheet /></head><body><h1>Hello world!</h1></body></html>');
});

app.get('/person/:id', function(req, res) {
	res.send('<html><head></head><body><h1>Person: ' + req.params.id + '</h1></body></html>');
});

app.get('/api', function(req, res) {
	res.json({ firstname: 'John', lastname: 'Doe' });
});

app.listen(port);