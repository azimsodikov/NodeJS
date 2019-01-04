'use strict';
/* Syntactic Sugar: A feature that only changes how you type something, but nithing changes under the hood */
/* It's important to understand what is happening under the hood, so we dont make decisions based on flawed assumptions */
/* Classes are syntactic sugar for the prototypal inheritance */

class Person {
	constructor(firstname, lastname) {
		this.firstname = firstname;
		this.lastname = lastname;
	}
	
	greet() {
		console.log('Hello, ' + this.firstname + ' ' + this.lastname);
	}
}

var john = new Person('John', 'Doe');
john.greet();

var jane = new Person('Jane', 'Doe');
jane.greet();

console.log(john.__proto__);
console.log(jane.__proto__);
console.log(john.__proto__ === jane.__proto__);
