(function () {
    var myApp = angular.module('initApp', []);
    myApp.controller('mainCntrl', ['$scope', function ($scope) { $scope.welcome = "working-4"; }]);
})();
    