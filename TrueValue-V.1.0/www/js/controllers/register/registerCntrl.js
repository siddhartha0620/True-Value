(function () {
    "use strict";

    var myApp = angular.module('trValueApp'),
        registerCntrl = function ($scope) { 
            $scope.test = "home controller is working - 3"; 
        }

    myApp.controller('registerCntrl', ['$scope', registerCntrl]);
})();
