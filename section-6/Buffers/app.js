/* Buffers:  Buffer holds raw binary data */
var buf = new Buffer('Hello', 'utf8');
console.log(buf);
console.log(buf.toString());
console.log(buf.toJSON());
console.log(buf[2]);

buf.write('wo');
console.log(buf.toString());

var buff = Buffer.from('hello');
console.log(buff);