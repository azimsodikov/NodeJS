/* fs module deals with the files on the OS. */
var fs = require('fs');

var greet = fs.readFileSync(__dirname + '/greet.txt', 'utf8');
/* These function runs synchronously and other functions will wait for it to complete  */
/* When we use fs.readFileSync, it will store these values in the buffer then encodes it into the string */
console.log(greet);

var greet2 = fs.readFile(__dirname + '/greet.txt', 'utf8', function(err, data) {
/* These function will run async and other functions will not wait for it to complete, and also it will accept callback function
 	* which gets called when it finishes */
	console.log(data);
});

console.log('Done!');

/* Error-First callback: Callbacks take an error object as their first parameter. 
	(null if no error, otherwise will contain an object defining
	..the error. This is a standard so we know in what order to place our parameters for our callbacks. )
	* Wherever you can use async methods use them, instead of sync methods, it will make your application faster and more,
	* performant. 
	* Also, there is another issue, node.js stores these files in the Buffer, and uses 'hip' which is specific memory on the V8 engine
	* and when there is bigger size files, it may slow down the operation. There is a solution for that, which is using streams.
*/