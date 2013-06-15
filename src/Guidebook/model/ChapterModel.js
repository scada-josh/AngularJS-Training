Guidebook.service('ChapterModel', function($http) {

     this.getChapters = function() {

     	 var xx = $http.get('./model/Rest/chapters.json')
                  .then(function(response) {
                 		   return response.data;
                 	});

      return xx;
    };


});

