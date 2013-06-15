Guidebook.controller('ChaptersController',function ($scope, $location, $routeParams, ChapterModel,NoteModel, $http) {

      ChapterModel.getChapters().then(function(d) {

        var chapters = d;

        for (var i=0; i<chapters.length; i++) {
             chapters[i].notes = NoteModel.getNotesForChapter(chapters[i].id);
        }

        $scope.chapters = chapters;
      });

   $scope.selectedChapterId = $routeParams.chapterId;
   
});