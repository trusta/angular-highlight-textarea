'use strict';

angular.module('angularHighlightTextarea', [])
    .directive('fbHighlight', function() {
        return {
            restrict: 'A',
            scope: {
                fbOption: '='
            },
            link: function (scope, element, attr) {
                $(element).highlightTextarea(scope.fbOption);
                scope.$watch('fbOption',function() {
                    $(element).data('highlighter').setOptions(scope.fbOption);
                }, true);

                if (attr.ngModel)  {
                    scope.$watch(attr.ngModel, function() {
                        $(element).data('highlighter').highlight();
                    });
                }
                scope.$on('$destroy', function() {
                    $(element).data('highlighter').destroy();
                });
            }
        };
    });
