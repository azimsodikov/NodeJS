/* We create a object using function constructor */
function Emitter() {
	this.events = {};
}
/* We build our methods to the prototype property of the function so every object that is created using this constructor
.. will have access to it. */
/* This on method will accept two params type of the event and listener. */
/* Event Listener: The code that responds to an event, in case of a JS, the listener will be a function */
Emitter.prototype.on = function(type, listener) {
	// when this code runs check whether property exists, if not create a new array;
	this.events[type] = this.events[type] || [];
	// on that new array push the listener (functions), that is gonna listen for the event
	this.events[type].push(listener);
}

Emitter.prototype.emit = function(type) {
	// When emit runs I will just check whether that event type exists in the events object, if it does, it will just execute
	// the functions inside that array;
	if (this.events[type]) {
		this.events[type].forEach(function(listener) {
			listener();
		});
	}
}
/* Function constructor is returned from the export so we can create as many emitters as we want */
module.exports = Emitter;