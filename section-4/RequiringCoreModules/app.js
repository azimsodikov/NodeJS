var util = require('util');
/* As a starter we should read node.js documantation which is available to us on the node.js website */
/* We can require and use code node.js modules that is available to us. we can just require it just like we did with require module */
var name = 'Tony';
var greeting = util.format('Hello, %s', name);
util.log(greeting);

/* 
node.js modules
module.exports = somefunction() {

}
require();
*/

/*
//ES6 modules 
export function greet() {
    //...
}

import * as greetr from 'someFile';
greetr.greet();

*/