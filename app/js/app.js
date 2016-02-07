'use strict'

angular.module('pentoolsApp', ['ngRoute']).config([
    function ($routeProvider) {
        $routeProvider
            .when('./tools', {
                templateUrl: '',
                controller: ''
            })
            .when('./resources', {
                templateUrl: '',
                controller: ''
            })
            .otherwise({
                redirectTo: '/tools'
            })
    }
]);