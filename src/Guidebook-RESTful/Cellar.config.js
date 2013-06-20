var cellarConfig = function($routeProvider) {
	$routeProvider
	.when('/wines', {
		//controller: 'ChaptersController',
		templateUrl: 'tpl/welcome.html'
	})
	.when('/wines/:wineId', {
		controller: 'WineDetailCtrl',
		templateUrl: 'tpl/wine-details.html'
	})
	.otherwise({redirectTo:'/wines'});
	// .when('/addNote/:chapterId', {
	// 	controller: 'AddNoteController',
	// 	templateUrl: 'view/addNote.html'
	// })
	// .when('/deleteNote/:chapterId/:noteId', {
	// 	controller: 'DeleteNoteController',
	// 	templateUrl: 'view/addNote.html'
	// }); 

	
};

// Define an AngularJS namespace : module
var Cellar = angular.module('Cellar', ['ngResource'])
					   .config(cellarConfig);

