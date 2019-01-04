var http = require('http');
var fs = require('fs');

/**
 * * Serialize: 
 * * Translating an object into a format that can be stored or transferred. JSON, CSV, XML, and others are popular. 'Deserialize' is the 
 * * opposite (converting the format back into an object)
 */

http.createServer(function(req, res) {
    
    res.writeHead(200, { 'Content-Type': 'application/json' });
    var obj = {
        firstname: 'John',
        lastname: 'Doe'
    };
    res.end(JSON.stringify(obj)); // Serializing it here
    
}).listen(1337, '127.0.0.1');