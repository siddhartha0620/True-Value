(function () {
    "use strict";

    var myApp = angular.module('trValueApp'),
        trValueSlideNavDir = function () { 
            
            var link = function (scope) {
                scope.sanitized = {
                    data: {
                        menuList: [
                            {
                                listClass: "glyphicon glyphicon-home",
                                listItemName: "Home"
                            },
                            {
                                listClass: "glyphicon glyphicon-log-in",
                                listItemName: "Login"
                            },
                            {
                                listClass: "glyphicon glyphicon-user",
                                listItemName: "Register"
                            },
                            {
                                listClass: "glyphicon glyphicon-cutlery",
                                listItemName: "Search"
                            }
                        ]
                    }
                };
            }

            return {
                restrict: 'E',
                templateUrl: '../../../views/directives/Widgets/trValueSlideNavDir/trValueSlideNavDir.html',
                scope: {
                    data: '='
                },
                link: link
            }; 
        };

    myApp.directive('trValueSlideNavDir', trValueSlideNavDir);
})();