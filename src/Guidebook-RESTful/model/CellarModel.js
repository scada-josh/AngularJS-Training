// Cellar.service('Wine', function($resource) {

// 	return $resource('api/wines/:wineId', {}, {
// 	        update: {method:'PUT'}
// 	    });

// });

//var services = angular.module('guthub.services', ['ngResource']);

Cellar.factory('Wine', ['$resource', function($resource) {
//return $resource('./api/wines/:wineId', {}); 
return $resource('./api/wines/:wineId', {}, {
        query:  {method: 'GET', isArray: true},
        get:    {method: 'GET'},
        remove: {method: 'DELETE'},
        edit:   {method: 'PUT'},
        add:    {method: 'POST'}
    });
}]);

// Cellar.service('Wine', function ($resource) {
//     return $resource('./api/wines/:wineId', {});
// });


// //Test
// Cellar.factory("Wine",function($resource){ 
// 	return $resource("./api/wines/:wineId");
// });


