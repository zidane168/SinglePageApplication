/// <reference path="View/main.html" />
/// <reference path="Controller/mainController.js" />
/// <reference path="Controller/mainController.js" />
/// <reference path="Controller/mainController.js" />


var app = angular.module('app', ['ngRoute']);

app.controller("routerController", function ($scope) {
    $scope.name = "Demo";

});

app.config(function ($routeProvider, $locationProvider) {


    $routeProvider       
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


    // $locationProvider.html5Mode(true);  // domain/main
    // $locationProvider.html5Mode(false).hashPrefix(true);
})



//app.controller('mainController', ['$scope', '$log', '$location', function ($scope, $log, $location){
//    $log.info($location.path());
//}]);


app.controller('mainController', function ($scope) {
    $scope.firstName = "Zidane";
    $scope.lastName = "Lee"
});


app.controller('secondController', function ($scope) {
    $scope.mobilePhone = "0906 440 368";
    $scope.email = "huuvi168@gmail.com";
});


app.controller('errorController', function ($scope) {
    $scope.msg = "failed";
});



