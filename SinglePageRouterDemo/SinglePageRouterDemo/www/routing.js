
var app = angular.module('app', ['ngRoute', 'appMain', 'appSecond', 'appError']);

app.controller("routerController", function ($scope) {
    $scope.name = "Demo";

});

app.config(function ($routeProvider, $locationProvider) {


    $routeProvider
        .when('/', {
            redirectTo: function () {
                return 'main';
            }
        })

        .when('/main', {
            templateUrl: '/www/View/main.html',
            controller: 'mainController'
        })
        .when('/second', {
            templateUrl: '/www/View/second.html',
            controller: 'secondController'
        })
        .otherwise({    
            templateUrl: '/www/View/error.html',
            controller: 'errorController',
        })

   // debugger;
    //console.log($locationProvider.getPath());

    // $locationProvider.html5Mode(true);  // domain/main
    // $locationProvider.html5Mode(false).hashPrefix(true);
})



