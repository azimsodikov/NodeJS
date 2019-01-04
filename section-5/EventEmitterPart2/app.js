/* Node.js has a node event emitter and node.js has a documantation that explains what it does and it does not */
/* It has a same kind of implementation and as we did in part one but it has more features and error handling than ours, 
we used node.js event emitter below */

/* Magic String: A string that has some special meaning in our code. (This is bad because it makes it easy for a typo to cause a bug, and hard
	for tools to help us find it). There is a pattern to solve this issue, we create a module config and create a object that will hold 
	the string values as a properties of the object. */

var Emitter = require('events');
var eventConfig = require('./config').events;

var emtr = new Emitter();

emtr.on(eventConfig.GREET, function() {
	console.log('Somewhere, someone said hello.');
});

emtr.on(eventConfig.GREET, function() {
	console.log('A greeting occurred!');
});

console.log('Hello!');
emtr.emit(eventConfig.GREET);