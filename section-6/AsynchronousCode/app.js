/* Javascripy Aside: Javascript is Synchronius */
/* Asynchronous: More than one process running simultaniosly: Node does things asynchronously. V8 does not! */
/* Synchronous: One process executing at a time: Javascript is synchronous. Think of it as only one line of code executing at a time.
NodeJS is asynchronous */
/* Callbacks:  A function passes to some other function, which we assume will be involed at some point, THe function 'calls back' onvoking
.. the function you give it when it is done doing its work */

/* LIBUV, the event loop, and non-blocking asynchronous code. ref16*/
/* ref18, ref17 explains how libuv works and how js is synchronous but node.js is asynchronous */
/* Node.js is event drieven non-blocking I/O in V8 Javascript */
/* Non-blocking: Doing other things without stopping your programming from running, this is made possible by Node's doing things asynchronously. */


/* Conceptual Aside: Sreams and Buffers 
    * Buffer: A temporary holding spot for data being moved from one place to another. (Intentionally limited in size)
    * Stream: A sequence of data made available overtime. (Pieces of data that eventually combine into a whole, just like a straming the video)
.. How it usually works is shown in ref19 */

/* Conceptual Aside: Binary Data, Character Sets, and Encoding 
    * Binary Data: Data Stored in Binary (Sets of 1s and 0s) (The core of the math that computers are based on. Each one or zero is called
    * is called a 'bit' or 'binary digit') Binary is based on the Base2 numbers which means it only needs 0 ans 1s, ref20, 
    * 
    * Character Set: A representation of characters as numbers (Each character gets a number. Unicode and ASCII are character sets) ref21 an ref22.
    * 
    * Character Encoding: How characters are stored in Binary (The numbers (or code points) are converted and stored in binary) There number of ways to encode characters
    * really popular one is UTF-8, it allows using 8 digits to encode the number representaion of the characters. Javascript is not really good with dealing with binaries,
    * thats why node.js added some other features to let javascript deal with binary data. */

// Learn how to deploy node.js applications on the server
// Learn what kind of servers avaliable to use
