!function(){"use strict";var e=angular.module("initApp",["ngRoute"]),o=function(e){e.welcome="working-6"},n=function(e){e.when("/home",{templateUrl:"views/pages/home/index.html",controller:"homeCntrl"}).otherwise({redirectTo:"/home"})};e.controller("mainCntrl",["$scope",o]),e.config(["$routeProvider",n])}();
//# sourceMappingURL=maps/application.js.map