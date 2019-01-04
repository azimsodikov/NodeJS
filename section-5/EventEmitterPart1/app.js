/* Conceptual Aside: 
Events: Something that has happened in our app that we can respond to. In node we actually talk about two different kinds of events */
/* 
There are two kinds of events in js one is System events and Custom events, 
system events are the library of C++ code that's part of Node.js that deals with events coming 
from the computer system. Like, I finished reading a file, the file is open, I've received data from the Internet, and so on.

Custom events, 'Event Emitter' are core js events ref11. NodeJS Event Emitter is faking it by wrapping c++ code. Because it does not have real
.. Event object.
*/
var Emitter = require('./emitter');

var emtr = new Emitter();

emtr.on('greet', function() {
	console.log('Somewhere, someone said hello.');
});

emtr.on('greet', function() {
	console.log('A greeting occurred!');
});

console.log('Hello!');
/* When we run event 'greet()' above two functions will run */
/* Essentially emit means run this event */
emtr.emit('greet');