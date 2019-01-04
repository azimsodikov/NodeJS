var a = 1;
var b = 2;
var c = a + b;

console.log(c);
/* You always gonna give node single file/entry point to execute */
/* Breakpoint
-- A spot in our code where we tell a debugging tool to pause the execution of our code */
/* Module : A reusable block of code whose existence does not accidently impact other code */
/* CommonJS Modules : an agreed upon standard for how code modules should be structured */

/* This is the way of telling NodeJS to get that module and made it available in this code */
var greet = require('./greet');
// greet(), you cant directly call greet function because it is the seperate module and unless you want it to call it intentionally;


/* Prototypal Inheritance */
/* Inheritance: One object gets access to the properties and methods of another object */
/* Every object has access to the property called proto{}, and other objects will have the access to the same property that way 
.. can share the properties of other properties of the proto{} ref5 */
/* Function Constructors: A normal function that is used to construct an object, 'this' variable points to  new empty object, and that object 
.. is returned from the function automatically when created using the new keyword */
/* There are several ways of creating objects in js, Object literals, Function Constructors, and using Class keyword to create objects */
/* When you create objects from the function constructor you will have a access to the prototype prototype which you can create objects which
.. then will be available to the objects that is being created from using this object */
/*
function Person(firstname, lastname) {
	
	this.firstname = firstname;
	this.lastname = lastname;
	
}

Person.prototype.greet = function() {
	console.log('Hello, ' + this.firstname + ' ' + this.lastname);
};

var john = new Person('John', 'Doe');
john.greet();

var jane = new Person('Jane', 'Doe');
jane.greet();

console.log(john.__proto__);
console.log(jane.__proto__);
console.log(john.__proto__ === jane.__proto__);
*/

/* Javasctript Aside : By reference and by value */
/* Primitive type of data that represents single value like number, string not a object, when a = b, a is a copy of the b in memory ref6 */
/* Objects unlike primitive types points to the same value, and passed by reference in the memory like a = b points to the same location in the memory ref7, when you change one 
.. you change the other  */
/* Pass by value  
function change(b) {
    b = 2;
}
var a = 1;
change(a);
console.log(a) //1;
Because a is a primitive value by changing it, it will not affect the var a, because it points to the different spot in the memory
*/

/* Pass by reference 
function changeObj(d) {
    d.prop1 = function() {}
    d.prop2 = {};
}
var c = {};
c.prop1 = {};
changeObj(c);
console.log(c); //The prop1 changed to the function because it points to the same location in the memory;
*/

/* Javascript Aside : IIFE */
/* Scope: Where in code you have access to the particular code you have access to particular variable or function  */

/* How do Node modules really work: module.exports and require() */
/* When we pass the our code through module.exports node.js does process the code and returns us the object that is modified ref8, ref9
.. require() function takes a file path as a params and returns what is passed through module.exports, it would not return just a code 
.. the code would be just a body and wrapped in the function */
/* The way require() works is it will look for the specific file name that you mention when you call the function, if it does not find that function 
.. it will look for the folder that is named as file and inside a folder will look for the index.js file */
/* Pattern 4. When you use require and give the same file location node.js saves (caches) the result so next time you call require using the same 
.. location it is cached and will be available right away. */
/* Pattern 5. Revealing Module Pattern: Exposing only the properties and methods you want via an returned object. A very common and clean way to structure,
and perfect code with modules. */