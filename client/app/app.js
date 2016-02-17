(function () {
    'use strict';

    angular.module('toolsApp', [
            'ngRoute',
            'toolsApp.tools',
            'toolsApp.resources'
        ])

        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider.otherwise({
                redirectTo: '/tools'
            });
        }]);
})();