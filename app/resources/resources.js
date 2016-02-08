(function () {

    'use strict';

    angular
        .module('toolsApp.resources', [
            'ngRoute'
        ])

        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider.when('/resources', {
                templateUrl: 'resources/resources.tpl.html',
                controller: 'ResourcesCtrl'
            });
        }])

        .controller('ResourcesCtrl', ResourcesCtrl);

    function ResourcesCtrl(){}
})();