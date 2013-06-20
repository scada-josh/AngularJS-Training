var cellarConfig = function($routeProvider) {
	$routeProvider
	.when('/wines', {
		controller: 'WineListCtrl',
		templateUrl: 'View/welcome.html'
	})
	.when('/wines/:wineId', {
		controller: 'WineDetailCtrl',
		templateUrl: 'View/wine-details.html'
	})
	.otherwise({redirectTo:'/wines'});
};

// Define an AngularJS namespace : module
var Cellar = angular.module('Cellar', ['ngResource'])
					   .config(cellarConfig);

