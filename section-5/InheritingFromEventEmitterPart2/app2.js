var util = require('util');

function Person() {
	this.firstname = 'John';
	this.lastname = 'Doe';
}

Person.prototype.greet = function() {
	console.log('Hello ' + this.firstname + ' ' + this.lastname, this.badgenumber);
}

function Policeman() {
	// By calling .call(this); we are getting Persons properties and assigning them to the Policemen;
	Person.call(this);
	/* If we run without above call method, we will get firstname and lastname undefined, because util.injerits only
	.. connects prototypes, and when we call Person.call(this), we are giving Policeman an access to the properties of
	.. Person() function constructor. */
	this.badgenumber = '1234';
}

util.inherits(Policeman, Person);
var officer = new Policeman();
officer.greet();