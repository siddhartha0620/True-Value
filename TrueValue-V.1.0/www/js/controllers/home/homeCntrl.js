(function () {
    "use strict";

    var myApp = angular.module('trValueApp'),
        homeCntrl = function ($scope) { 
            $scope.test = "home controller is working - 3"; 
        }

    myApp.controller('homeCntrl', ['$scope', homeCntrl]);
})();
