"use strict";

var appTutorial = angular.module('tutorialApp', []).
						config(['$routeProvider', function($routeProvider){
							$routeProvider.
								when('/', {templateUrl: 'partials/main.html', controller: mainCtrl}).
								when('/:categoryId', {templateUrl: 'partials/category.html', controller: categoryCtrl}).
								when('/details/:itemId', {templateUrl: 'partials/details.html', controller: detailsCtrl}).
								otherwise({
									redirectTo: '/' 
								})
						}]);

