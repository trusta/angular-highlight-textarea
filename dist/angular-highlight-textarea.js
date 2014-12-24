'use strict';

angular.module('angularHighlightTextarea', [])
    .directive('fbHighlight', function() {
        return {
            restrict: 'A',
            link: function postLink(scope, element, attr) {
                $(element).highlightTextarea(scope.option);
                if (attr.ngModel)  {
                    scope.$watch(attr.ngModel, function() {
                        $(element).data('highlighter').highlight();
                    });
                }
            }
        };
    });
