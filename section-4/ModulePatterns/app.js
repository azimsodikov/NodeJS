// Pattern 1;
/* We can pass anonymus function and assign that function to the variable and call that variable as a function. */
var greet = require('./greet1');
greet();

// Pattern 2;
/* Instead of overriding the exports objects we can bind new property to it and access that object with dot notation when we need it. */
var greet2 = require('./greet2').greet;
greet2();

// Pattern 3;
/* When using this pattern node.js will cache the object and on the next require function it will return the same cached object */
var greet3 = require('./greet3');
greet3.greet();
greet3.greeting = 'Changed hello world!';
// Pattern 3.1;
var greet3b = require('./greet3');
greet3b.greet();

// Pattern 4;
/* When we leave creation of the object to the receiving side, we will get the different instance of the object every time */
var Greet4 = require('./greet4');
var grtr = new Greet4();
grtr.greet();

// Pattern 5;
/* This pattern helps to create private variables which are not exposed to the receiving side and can not be changed from this side */
var greet5 = require('./greet5').greet;
greet5();