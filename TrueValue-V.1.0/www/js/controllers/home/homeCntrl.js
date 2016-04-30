(function () {
    "use strict";

    var myApp = angular.module('initApp'),
        homeCntrl = function ($scope) { 
            $scope.test = "home controller is working - 3"; 
        }

    myApp.controller('homeCntrl', ['$scope', homeCntrl]);
})();
