var http = require('http');
var fs = require('fs');
/**
 * * Since we are dealing with html, we need to use fs module to access the file that we want to use
 */
/**
 * * Since the machine code is running the node, code that we written has been compiled to that code, so whenever you make 
 * * changes to the code, make sure you recompile the code by restarting the server
 */
/**
 * * Template: Text designed to be the basis for final text or content after being processed. There's usually some specific template 
 * * language, so the template system knows how to replace placeholders with real values.
 */
http.createServer(function(req, res) {
    
    res.writeHead(200, { 'Content-Type': 'text/html' });
    var html = fs.readFileSync(__dirname + '/index.htm', 'utf8');
    var message = 'Hello world...';
    html = html.replace('{Message}', message);
    res.end(html);
    
}).listen(1337, '127.0.0.1');