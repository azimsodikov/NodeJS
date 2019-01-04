var http = require('http');
var fs = require('fs');

/**
 * * To improve the performance of this app, instead of reading the file sync we need to create streams to make it easier to deal with 
 * * larger files. So we do not have to wait for the fs to read the whole file, we can get he data in the chunks, so buffer will stay smaller to make it more faster
 */


http.createServer(function(req, res) {
    
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.createReadStream(__dirname + '/index.htm').pipe(res);
    
}).listen(1337, '127.0.0.1');
/**
 * * Conceptual Aside: APIs and Endpoints
 * * API:
 * * A set of tools for building a software application. Stands for 'Application Programming Interface'. On the web the tools are usually made 
 * * available via a set of URLs which accept and send only data via HTTP and TCP/IP protocol.
 * * Endpoints: 
 * * One url in a web API, Sometimes that endpoint (URL) does multiple thing by making choices based ont he HTTP request headers.
 */