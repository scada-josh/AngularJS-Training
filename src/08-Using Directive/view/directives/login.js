Guidebook.directive('gbNoteList', function() {
  return {
    restrict: 'A',
    templateUrl: 'view/directives/login.html'
    ,
    scope: {
       userEmail: '=userEmail',
       pass_word: '=pass',
    // //   show: '=show',
    // //   notes: '=notes',
    // //   orderValue: '@orderBy',
       onDelete: '=deleteNoteHandler'
    }
  };
});


