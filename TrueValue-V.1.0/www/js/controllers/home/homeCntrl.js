(function () {
    "use strict";

    var myApp = angular.module('initApp'),
        homeCntrl = function ($scope) { 
            $scope.test = "home controller is working"; 
        }

    myApp.controller('homeCntrl', ['$scope', homeCntrl]);
})();
