Guidebook.controller('ChaptersController',function ($scope) {

      $scope.userEmail = "scada.josh@gmail.com";
      $scope.pass_word = "123455";
      $scope.checkValue = true;

      $scope.onDelete = function(user){
      	alert(user);
      	alert($scope.checkValue);
      	//$scope.checkValue = true;
      }

});