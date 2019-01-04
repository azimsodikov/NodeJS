var EventEmitter = require('events');
var util = require('util');

function Greetr() {
	/* What it does is calls function constructor of the event emitter and sets this object as the same object inside a 
	.. event emitter, so it will have the same object to reference, then it can add properties and methods to it
	.. it is similar as calling super() on other programming languages */
	EventEmitter.call(this);
	this.greeting = 'Hello world!';
}

util.inherits(Greetr, EventEmitter);

Greetr.prototype.greet = function(data) {
	console.log(this.greeting + ': ' + data);
	this.emit('greet', data);
}

var greeter1 = new Greetr();

greeter1.on('greet', function(data) {
	console.log('Someone greeted!: ' + data);
});

greeter1.greet('Tony');