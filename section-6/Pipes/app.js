/* Pipes:  Connecting two streams by writing to one stream what is being read from another. (In Bode you pipe from a Readable stream to a Writable stream. ) */
var fs = require('fs');
var zlib = require('zlib');

/* Duplex: Stream which is both readable and writable */

/* Source text where text can be retrived  */
var readable = fs.createReadStream(__dirname + '/greet.txt');

/* Destination file where text could be written (Basically program will copy all the content from readable to writable)*/
var writable = fs.createWriteStream(__dirname + '/greetcopy.txt');

var compressed = fs.createWriteStream(__dirname + '/greet.txt.gz');

var gzip = zlib.createGzip();

readable.pipe(writable);

/* When you write stream to the writeable, that stream also becomes readable and can be piped to read again. Because 
    .. when function completes writing it returns that file location an make ir readable */
/* Method Chaining: A method returns an object so we can keep calling more methods. (Sometimes it returns the parent object (called 'cascadung') 
    ..and simetimes some other objects ) */
readable.pipe(gzip).pipe(compressed);
