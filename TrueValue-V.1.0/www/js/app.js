(function () {
    "use strict";

    var myApp = angular.module('trValueApp', ['ngRoute']),
        slideRight = function () {
            var element = $('#mainContent');

            element.toggleClass('slide-right');
        },
        mainCntrl = function ($scope) { 
            $scope.welcome = "working-6";

            $scope.slideRight = slideRight; 
        },
        initRoutes = function ($routeProvider) {
            $routeProvider
                .when('/home', {
                    templateUrl: 'views/pages/home/index.html',
                    controller: 'homeCntrl'
                })
                .when('/register', {
                    templateUrl: 'views/pages/register/index.html',
                    controller: 'registerCntrl'
                })
                .otherwise({
                    redirectTo: '/home'
                });
        }

    myApp.controller('mainCntrl', ['$scope', mainCntrl]);

    myApp.config(['$routeProvider', initRoutes]);
})();
