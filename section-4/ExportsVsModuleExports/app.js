var greet = require('./greet');
var greet2 = require('./greet2');
greet2.greet();
/* In JS when varaible sets equal to the new object new spot in the memory will be created so exports vs module.exports pointing to 
.. the same object when equal is used it will create new spot and it is not the same object anymore */
/* Mutate: To change something */
/* exports object can be used if only it is being mutated and reassigned new variable that is why greet2 worked */
/* Node.js module is not gonna downloaded to the browser, it just sits in the server and communicated through http */