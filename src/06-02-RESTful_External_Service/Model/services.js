Cellar.factory('Wine', ['$resource', function($resource) {
//return $resource('./api/wines/:wineId', {}); 
return $resource('./api/wines/:wineId', {}, {
        query:  {method: 'GET', isArray: true},
        get:    {method: 'GET'},
        remove: {method: 'DELETE'},
        edit:   {method: 'PUT'},
        add:    {method: 'POST'}
    });
}]);