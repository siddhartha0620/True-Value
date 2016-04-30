(function () {
    "use strict";

    var myApp = angular.module('initApp', ['ngRoute']),
        mainCntrl = function ($scope) { 
            $scope.welcome = "working-6"; 
        },
        initRoutes = function ($routeProvider) {
            $routeProvider
                .when('/home', {
                    templateUrl: 'views/pages/home/index.html',
                    controller: 'homeCntrl'
                })
                .otherwise({
                    redirectTo: '/home'
                });
        }

    myApp.controller('mainCntrl', ['$scope', mainCntrl]);

    myApp.config(['$routeProvider', initRoutes]);
})();
