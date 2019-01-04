/**
 * Express:  is a library that is build to create servers with less code.
 * Environment Variables: Global variables specific to the environment (Server) our code is living in. Different servers
 * have different variables settings, and we can access those values in code.
 * 
 * HTTP Method: Specifies the type of action request wishes to make. GET, POST, DELETE, and others. ALso called verbs.
 */


var express = require('express');
var app = express();

var port = process.env.PORT || 3000; // This variable could be from env variable or default 3000

app.get('/', function(req, res) { // Content Type is set dynamically by the express server on the fly according to data we are sending
	res.send('<html><head></head><body><h1>Hello world!!!!!</h1></body></html>');
});

app.get('/api', function(req, res) { // Code inside a express will convert this to json and sets a content type on the fly
	res.json({ firstname: 'John', lastname: 'Doe' });
});

app.listen(port);