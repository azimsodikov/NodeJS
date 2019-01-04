var mongoose = require('mongoose');

/**
 * Mongoose gives the schema object where we can create new instance of that object.
 */
var Schema = mongoose.Schema;

var todoSchema = new Schema({
    username: String,
    todo: String,
    isDone: Boolean,
    hasAttachment: Boolean
});

/**
 * We define the model here 
 */
var Todos = mongoose.model('Todos', todoSchema);

/**
 * We are exporting created data model here
 */
module.exports = Todos;