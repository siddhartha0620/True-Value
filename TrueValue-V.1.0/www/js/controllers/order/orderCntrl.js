(function () {
    "use strict";

    var myApp = angular.module('trValueApp'),
        orderCntrl = function ($scope) { 
            $scope.test = "order controller is working - 3"; 
        }

    myApp.controller('orderCntrl', ['$scope', orderCntrl]);
})();
