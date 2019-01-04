var http = require('http');
/**
 * * Http Module which is available in NodeJs
 */

http.createServer(function (req, res) {
  /**
   * * In the http module create server method expects call back function which it executes with event emitter
   */

  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');

}).listen(1337, '127.0.0.1');
/**
 * * Port: which port nodeJs application should listen to, in this case it is 1337, that means any request which hits this port should come here
 * * Host Name: Internal IP address, and also localhost. That means if you make request to this port with this address, this application will receive that
 */
/**
 * * When node runs this application, it will wait for request untill you exit out of application. Internally node runs and waits for the requests 
 */