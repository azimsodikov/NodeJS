var obj = {
	name: 'John Doe',
	greet: function(params) {
		console.log(`Hello ${ this.name }`);
	}
}

obj.greet();
/* Whatever passed through call is what this keyword will be, in this case this will refer to the object that is being passed */
obj.greet.call({ name: 'Jane Doe'}, 'params');
/* The only difference between call and apply is when you pass a parameters to the method, you pass one by one for the call, 
.. but pass array of parameters if you use apply */
obj.greet.apply({ name: 'Jane Doe'}, ['params', 'params']);