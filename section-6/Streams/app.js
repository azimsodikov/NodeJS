var fs = require('fs');
/* Chunk: A piece of data being sent through a stream. */
/* Abstract (Base) class: A type of constructor you never work directly wuth, but inherit from. 
	(We create new custom objects which inherit from the abstract base class. )*/

var readable = fs.createReadStream(__dirname + '/greet.txt', { encoding: 'utf8', highWaterMark: 16 * 1024 });
/* Buffer size is by default 64kb, if data that we are trying to read is larger than that size it will give us only chunks of data
	.. if it is less than a buffer size, we will get the entire file in once */

var writable = fs.createWriteStream(__dirname + '/greetcopy.txt');

readable.on('data', function(chunk) {
	console.log(chunk);
	writable.write(chunk);
});
