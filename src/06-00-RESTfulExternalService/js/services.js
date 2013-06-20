// 'use strict';

// /* Services */

// angular.module('phonecatServices', ['ngResource'])
// 	   .factory('Phone', function($resource){
	   	

// 	   	// var xx = $resource('Rest/phones.json', {}, {
// 	   	// 	query: {method:'GET', isArray:true}
// 	   	// });
// 	   	// console.log(xx);

// 		  var xx =  $resource('Rest/phones.json', {}, {
// 						    query: {
// 						    	method:'GET', isArray:true
// 						    }
// 		  });

// 		  return xx;

// 	    });

var app=angular.module('phonecatServices',['ngResource']);

	app.factory("Post",function($resource){ 
		return $resource("api/wines/:id");
	});
