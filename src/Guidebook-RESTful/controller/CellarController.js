Cellar.controller('RouteCtrl',function ($scope, $location, $routeParams, Wine) {

	//$scope.wines;

	$scope.WineListCtrl = function(Wine) {
		$scope.wines = Wine.query();
	}

    $scope.addWine = function () {
        window.location = "#/wines/add";
    };

   
});

// //Test
// Cellar.controller("RouteCtrl",function($scope, $location, $routeParams,Wine){ 
//   //   Wine.query(function(data) {
//   //   $scope.posts = data;
//   // });

//     $scope.WineListCtrl = function(Wine) {
//         $scope.wines = Wine.query();
//     }

//     $scope.addWine = function () {
//         window.location = "#/wines/add";
//     };

// });


Cellar.controller('WineDetailCtrl',function ($scope, $location, $routeParams, Wine) {

    //console.log($routeParams.wineId);
	$scope.wine = Wine.get({wineId:$routeParams.wineId});
    //$scope.wine = Wine.get({wineId:$routeParams.wineId});

    //console.log($routeParams.wineId);

    //console.log(Wine.get({wineId: 1}));
    
    $scope.wine.id = $routeParams.wineId;
	//console.log($scope.wine.id);

    $scope.saveWine = function () {
        if ($scope.wine.id > 0){
             console.log($scope.wine.id);
             console.log($scope.wine);
             //$scope.wine.$update({wineId:$scope.wine.id});
             $scope.wine.$edit({wineId:$scope.wine.id});
        }else{
            //console.log($routeParams.wineId);
            //console.log($scope.wine);
            //Wine.$save({}, $scope.wine);
            //Wine.save({}, $scope.wine);
            $scope.wine.$save();
            console.log($scope.wine);
        }
        window.location = "#/wines";
    }

    $scope.deleteWine = function () {
        $scope.wine.$delete({wineId:$scope.wine.id}, function() {
            alert('Wine ' + $scope.wine.name + ' deleted')
            window.location = "#/wines";
        });
        // this.wine.$delete({wineId:this.wine.id}, function() {
        //     alert('Wine ' + wine.name + ' deleted')
        //     window.location = "#/wines";
        // });
    }

   
});




// Cellar.controller("WineDetailCtrl",function($scope, $location, $routeParams, Wine){ 

//     $scope.wine = Wine.get({wineId:$routeParams.wineId});

//     // Wine.get({wineId:$routeParams.wineId}, function(data) {
//     //     $scope.wine = data;
//     // });

//     $scope.wine.id = $routeParams.wineId;

//     $scope.saveWine = function () {
//         if ($scope.wine.id > 0){
//              console.log($scope.wine);
//              $scope.wine.$update({wineId:$scope.wine.id});
//         }else{
//             //Wine.$save();
//             //$scope.wine.save();
//             Wine.$save({}, $scope.wine, function (data) {
//                 //$location.path('/');
//             });
//         }
//         window.location = "#/wines";
//     }





// });
