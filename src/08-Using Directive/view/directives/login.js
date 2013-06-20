Guidebook.directive('gbNoteList', function($http) {
  return {
    restrict: 'A',
    templateUrl: 'view/directives/login.html'
    ,
    scope: {
       userEmail: '=userEmail',
       pass_word: '=pass',
       checkValue: '=checkValue',
    // //   show: '=show',
    // //   notes: '=notes',
    // //   orderValue: '@orderBy',
       onDelete: '=deleteNoteHandler'
    },
    compile: function compile(tElement, tAttrs, transclude) { 
        return {
            pre: function preLink(scope, iElement, iAttrs, controller) { 
              console.log("preLink");
              console.log(scope);
            },
            post: function postLink(scope, iElement, iAttrs, controller) { 
              console.log("postLink");
              console.log(scope);
            } 
        }
    },
    link: function ($scope, iterStartElement, attr) {
            // $(".mydirectiveclass").css({'background-color' : 'yellow'});
            // scope.arr = ["mikhail", "is", "the", "best"];

            console.log($scope.userEmail);
            console.log(attr);
        }
  };
});


