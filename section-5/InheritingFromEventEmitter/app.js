/* Inheriting from EventEmitter ref14 */
/* Essentially when we want some objects to have other object as a part of it we can use util.inherits which will connect 
 those objects through prototype chain like shown in ref14. Also it shows it in the example below. Event emitter gets Greetr and
 EvenEmitter and connects those objects so when we add methods or properties to it emitter will have access to it. ref15 */
/* Many features in node js has used this and is part of other features */
var EventEmitter = require('events');
var util = require('util');

function Greetr() {
	this.greeting = 'Hello world!';
}

util.inherits(Greetr, EventEmitter);

Greetr.prototype.greet = function(data) {
	console.log(this.greeting + ': ' + data);
	this.emit('greet', data);
}

var greeter1 = new Greetr();

greeter1.on('greet', function(data) {
	data = data || 'Azim';
	console.log('Someone greeted!: ' + data);
});

greeter1.greet('Tony');