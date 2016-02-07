'use strict'

var app = angular.module('app', []);

app.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.when('/tools', {
            templateUrl: 'partials/tools/tools.html',
            controller: 'ToolsListCtrl'
        }).when('/resources', {
            templateUrl: 'partials/resources/resources.html',
            controller: 'ResourcesCtrl'
        }).otherwise({
            redirectTo: '/tools'
        });
    }]);