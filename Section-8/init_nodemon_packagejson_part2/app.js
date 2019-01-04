/**
 * * Each module will have its own dependencies and most probably will have node_modules inside it
 * * nodemon (Node Monitor) will watch for the files in the app and wait for them to change, if any of the files change it will 
 * * recompile it again
 */
var moment = require('moment');
console.log(moment().format("ddd, hA"));