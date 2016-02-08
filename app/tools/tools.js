(function () {
    'use strict';

    angular
        .module('toolsApp.tools', [
            'ngRoute'
        ])

        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider.when('/tools', {
                templateUrl: 'tools/tools.tpl.html',
                controller: 'ToolsCtrl'
            });
        }])

        .controller('ToolsCtrl', ToolsCtrl);

    function ToolsCtrl () {}
})();
