function PhoneListCtrl($scope, $http) {
  $http.get('Rest/phones.json').success(function(data) {
    $scope.phones = data;

    for (var i=0; i<data.length; i++) {
     console.log("age : " + data[i].age);
    }

  });

  $scope.orderProp = 'age';
}

