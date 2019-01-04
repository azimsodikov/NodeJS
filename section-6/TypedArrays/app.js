/* Buffers exist in the node.js because javascript does not deal well with binary data */
/* BYTE: Consists of 8 bits, 00101100 */
/* New version of javascript has the ability to deal with the binary */

var buffer = new ArrayBuffer(8);
var view = new Int32Array(buffer);
view[0] = 5;
view[1] = 15;
console.log(view);