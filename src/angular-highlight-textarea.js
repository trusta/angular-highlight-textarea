'use strict';

angular.module('angularHighlightTextarea')
    .directive('fbHighlight', function() {
        return {
            restrict: 'A',
            scope: {
                option: '=fbOption'
            },
            link: function postLink(scope, element) {
                element.highlightTextarea(scope.option);
            }
        };
    });
