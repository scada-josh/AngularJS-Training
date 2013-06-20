
function mainCtrl($scope, $http) {
	console.log("this is the mainCtrl");
	$http.get("json/categories.json").success(function(data){
		//expression categories will now have the json.
		$scope.categories = data;
		console.log('this is the data ' + data);
	});
} //end of function


function categoryCtrl($scope, $http, $routeParams) {

	// Commented out is the correct http call. For demonstration purposes, I'm making
	// the ajax call to list.json

	$http.get('json/list.json').success(function(data){
		$scope.serieList = data;
	});

	/********************************************************************************/
	// $http.get('json/' + $routeParams.categoryId + '.json').success(function(data){
	// 	$scope.serieList = data;
	// });
	/********************************************************************************/

} //end of function

function detailsCtrl($scope, $http, $routeParams) {
	// Commented out is the correct http call. For demonstration purposes, I'm making
	// the ajax call to family-guy.json
	
	$http.get('json/family-guy.json').success(function(data){
		$scope.theshow = data;
	});

	$scope.about = function(){
		console.log("about");
		$http.get('json/fullepisodes.json').success(function(data){
			$scope.details = data;
			$scope.predicate = '-seasonEpisode';
		});
	};

	$scope.related = function(){
		console.log("related");
		$http.get('json/family-guy-related.json').success(function(data){
			$scope.details = data;
			$scope.predicate = '-seasonEpisode';
		});
	};

	


	/********************************************************************************/
	// $http.get('json/' + $routeParams.itemId + '.json').success(function(data){
	// 	$scope.item = data;
	// });
	/********************************************************************************/

} //end of function

