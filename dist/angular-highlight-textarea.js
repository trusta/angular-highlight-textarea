'use strict';

angular.module('angularHighlightTextarea')
    .directive('fbHighlight', function($log) {
        return {
            template: '<div></div>',
            restrict: 'E',
            link: function postLink(scope, element, attrs) {
                element.text('this is the fb-highlight directive');
                $log.debug(attrs);
            }
        };
    });
