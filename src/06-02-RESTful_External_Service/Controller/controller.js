Cellar.controller('RouteCtrl',function ($scope, $location, $routeParams, Wine) {

    $scope.WineListCtrl = function(Wine) {
        $scope.wines = Wine.query();
    }

    $scope.addWine = function () {
        window.location = "#/wines/add";
    };

});

Cellar.controller('WineDetailCtrl',function ($scope, $location, $routeParams, Wine) {

    $scope.wine = Wine.get({wineId:$routeParams.wineId});
    
    $scope.wine.id = $routeParams.wineId;

    $scope.saveWine = function () {
        if ($scope.wine.id > 0){
             $scope.wine.$edit({wineId:$scope.wine.id});
        }else{
            $scope.wine.$save();
        }
        window.location = "#/wines";
    }

    $scope.deleteWine = function () {
        $scope.wine.$delete({wineId:$scope.wine.id}, function() {
            alert('Wine ' + $scope.wine.name + ' deleted')
            window.location = "#/wines";
        });
    }

   
});
