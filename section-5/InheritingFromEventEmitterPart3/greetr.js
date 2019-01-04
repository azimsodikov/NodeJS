'use strict';

var EventEmitter = require('events');

module.exports = class Greetr extends EventEmitter {
	/* extends is another way of writing inherit, by calling super we are calling the calling the constructor just like we 
	.. are doing with .call(this) on the object */
	constructor() {
		super();
		this.greeting = 'Hello world!';
	}
	
	greet(data) {
		console.log(`${ this.greeting }: ${ data }`);
		this.emit('greet', data);
	}
}