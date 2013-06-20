
Guidebook.directive('gbNoteList', function() {
  return {
    restrict: 'A',
    templateUrl: 'view/directives/noteList.html',
    scope: {
      show: '=show',
      notes: '=notes',
      orderValue: '@orderBy',
      onDelete: '=deleteNoteHandler',
      onTest: '=testNoteHandler'
    },
    compile: function compile(tElement, tAttrs, transclude) { 
        return {
            pre: function preLink(scope, iElement, iAttrs, controller) { 
              console.log("preLink");
            },
            post: function postLink(scope, iElement, iAttrs, controller) { 
              console.log("postLink");
              //console.log(scope);
            } 
        }
    },
    link: function ($scope, iterStartElement, attr) {
            // $(".mydirectiveclass").css({'background-color' : 'yellow'});
            // scope.arr = ["mikhail", "is", "the", "best"];

            //console.log($scope.userEmail);
            console.log($scope.notes.length);
        }
  };
});
