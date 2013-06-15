// function PhoneListCtrl($scope, $http) {
//   $http.get('Rest/phones.json').success(function(data) {
//     $scope.phones = data;

//     for (var i=0; i<data.length; i++) {
//      console.log("age : " + data[i].age);
//     }

//   });

//   $scope.orderProp = 'age';
// }
function PhoneListCtrl($scope, Phone) {
	//console.log(Phone.query());
	var chap = Phone.query();

  $scope.phones = chap;
  console.log(chap);
  $scope.orderProp = 'age';
}

