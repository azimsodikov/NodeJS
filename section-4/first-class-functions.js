/* Conseptual Aside */
/* Moduels, Exports, and Require */
/* Module:
-- A reusable block of code whose existence does not accidently impact other code (JS did not have this until ES2015) */
/* CommonJS Modules:
-- An agreed upon standard for how code modules should be structured */

/* Javascript Aside */
/* First-Class functions: everything you can do with other types you can do with functions
-- You can use functions like strings, numbers, etc, pass around, set varaibles equal to them, put them in arrays, and more (other languages does not have that feature) */

/* Function Expressions: A block of code that results ina value */
// function statement
function greet() {
    console.log('hi');
}
greet();
// functions are first-class

function logGreeting(fn) {
    fn();
}
// we are passing the function name without parenteses;
logGreeting(greet); 

// function expression 
var greetMe = function() {
    console.log('Hi Tony');
}
// its still first class
greetMe();

// use function expression on the fly 
logGreeting(function() {
    console.log('Hello Tony!');
});