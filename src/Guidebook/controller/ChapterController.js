Guidebook.controller('ChaptersController',function ($scope, $location, $routeParams, ChapterModel,NoteModel) {

  alert('ChaptersController, chapterId is ' + $routeParams.chapterId);

   var chapters = ChapterModel.getChapters();

   for (var i=0; i<chapters.length; i++) {
     //chapters[i].notes = NoteModel.getNotesForChapter(chapters[i].id);
     console.log("ID : " + chapters[i].id +", Title : " + chapters[i].title);
     NoteModel.getNotesForChapter(chapters[i].title);
   }
   
   // $scope.chapters = chapters;
   // $scope.selectedChapterId = $routeParams.chapterId;

   // $scope.onDelete = function(noteId) {
   //   var confirmDelete = confirm('Are you sure you want to delete this note?');
   //   if (confirmDelete) {
   //     $location.path('/deleteNote/' + $routeParams.chapterId + '/' + noteId);
   //   } 
   // };

});