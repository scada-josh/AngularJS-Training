Guidebook.directive('gbNoteList', function() {
  return {
    restrict: 'A',
    templateUrl: 'view/directives/login.html',
    scope: {
      //show: '=show',
      //notes: '=notes',
      //orderValue: '@orderBy',
      //onDelete: '=deleteNoteHandler'
    }
  };
});


angular.module('ng').directive('testElem', function () {
    return {
        restrict: 'A',
        scope: 'isolate',
        template: '<div class="mydirectiveclass"><h3>hello...</h3>{{arr}}<p ng-repeat="obj in arr">{{obj}}</p></div>',
        link: function (scope, iterStartElement, attr) {
            $(".mydirectiveclass").css({'background-color' : 'yellow'});
            scope.arr = ["mikhail", "is", "the", "best"];
        }
    };
});


angular.module('ng').directive('testElemTemplate', function () {
    return {
        restrict: 'A',
        templateUrl: 'view/directives/template.html',
        scope: 'isolate',
        link: function (scope, iterStartElement, attr) {
            scope.obj = [{name:"john", age:"12"},{name:"jing hua shi", age:"123"},{name:"pu naw kim", age:"124"}];
        }
    };
});

angular.module('ng').directive('testElemTransclude', function () {
    return {
        restrict: 'EA',
        transclude: true,
        scope: 'isolate',
        template: '<h3>heading 3</h3><p>preface... blah blah</p><div ng-transclude></div>',
    };
});

function my_custom_parsing(text) {
    var result = "";
    for (var i = 0; i < text.length; i++) {
        result += text[i] + "*";
    }
    return result;
}

angular.module('ng').directive('testElemCompile', function () {
    return {
        restrict: 'A',
        transclude: true,
        scope: 'isolate',
        template: '<div>gonna parse this: {{orig}} <br/>... and get this: {{obj}}</div>',
        //templateUrl: 'template.html',
        compile:function (element, attr, transclusionFunc) {
            return function (scope, iterStartElement, attr) {
                var origElem = transclusionFunc(scope);
                var content = origElem.text();
                scope.orig = content;
                scope.obj = my_custom_parsing(content);
            };
        }
    };
});


Guidebook.directive('inPlaceEdit', function() {
    return {
        'restrict' : 'A',
        'scope' : {
            'model' : '=inPlaceEdit',
            'on_save' : '&onSave'
        },
        // This can probably be abstracted out into a templateUrl
        ////'templateUrl' : 'in-place-edit.html',
        'templateUrl' : 'view/directives/in-place-edit.html',
        ////'replace' : true,
        'link' : function(scope, element, attrs) {
            scope.ui = {'mode' : 'view'};
            scope.save = function() {
                scope.on_save({'new_value' : scope.new_model});
                scope.ui.mode='view';
            }
            scope.$watch('model', function(m) {
                scope.new_model = angular.copy(m);
            });
        }
    }
});


