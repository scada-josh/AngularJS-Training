Guidebook.controller('ChaptersController',function ($scope) {

      $scope.userEmail = "scada.josh@gmail.com";
      $scope.password = "1234";

      $scope.onDelete = function(){
      	alert('5555');
      }

});

// Guidebook.controller('ChaptersController', ['$scope', '$window', function($scope, $window) {
//     $scope.userEmail = "scada.josh@gmail.com";
//       $scope.password = "1234";

//       $scope.onDelete = function(){
//       	alert('5555');
//       }
// }]);



Guidebook.controller('MyController', ['$scope', '$window', function($scope, $window) {
    $scope.name="Vacation Labs";
    $scope.phone="99999 12345";
    
    $scope.save_name = function(new_value) {
        $window.alert('Asssume that we make an AJAX request to save the name, which succeeds');
        $scope.name=new_value;
        return true;
    };
    
    $scope.save_phone = function(new_value) {
        $window.alert('Assume that we make an AJAX request to save the phone, which fails due to some validation error. Which means we DONT update the model');
        return false;
    };
}]);




