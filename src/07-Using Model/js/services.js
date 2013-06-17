function Greeter(salutation) { 
	this.greet = function(name) {
		return salutation + ' ' + name; 
	};
}

myApp.factory('greeter', function(salut) { 
	return new Greeter(salut);
});

var myGreeter = greeter('Halo');
