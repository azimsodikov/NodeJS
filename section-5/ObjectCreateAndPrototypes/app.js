/* In JS object has a property called proto{} and proto{} has another proto{} and each proto{} has properties, other objects that is created
 might have an access to that properties. ref12 */

var person = {
	firstname: '',
	lastname: '',
	greet: function() {
		return this.firstname + ' ' + this.lastname;
	}
}
/* This way we can create objects based on the another object as a prototype. */
/* Both of these objects has access to greet() method through prototypal inheritance. ref13 */
var john = Object.create(person);
john.firstname = 'John';
john.lastname = 'Doe';

var jane = Object.create(person);
jane.firstname = 'Jane';
jane.lastname = 'Doe';

console.log(john.greet());
console.log(jane.greet());