'use strict';

angular.module('toolsApp', [
        'ngRoute'
    ])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.otherwise({
            redirectTo: '/tools'
        });
    }]);