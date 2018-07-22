
var app = angular.module('app', ['ngRoute', 'appMain', 'appSecond', 'appError', 'ngIdle']);

app.controller("routerController", function ($scope, Idle) {
    $scope.name = "Demo";


    // $scope.events = [];
    $scope.idle = 5;
    $scope.timeout = 5;

    $scope.$on('IdleStart', function () {
        //addEvent({ event: 'IdleStart', date: new Date() });

        console.log('[Event] Idle Start .........')
    });

    //$scope.$on('IdleEnd', function () {
    //    addEvent({ event: 'IdleEnd', date: new Date() });
    //});

    //$scope.$on('IdleWarn', function (e, countdown) {
    //    addEvent({ event: 'IdleWarn', date: new Date(), countdown: countdown });
    //});

    $scope.$on('IdleTimeout', function () {
        //addEvent({ event: 'IdleTimeout', date: new Date() });

        console.log('relogin');

        alert('relogin');
    });

    //$scope.$on('Keepalive', function () {
    //    addEvent({ event: 'Keepalive', date: new Date() });
    //});

    //function addEvent(evt) {
    //    $scope.$evalAsync(function () {
    //        $scope.events.push(evt);
    //    })
    //}

    //$scope.reset = function () {
    //    Idle.watch();
    //}

    $scope.$watch('idle', function (value) {
        if (value !== null) Idle.setIdle(value);
    });

    $scope.$watch('timeout', function (value) {
        if (value !== null) Idle.setTimeout(value);
    });

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
});


app.run(function ($rootScope, Idle, $log, Keepalive) {
    Idle.watch();

    $log.debug('[Run] app started.');
});


//.config(function (IdleProvider, KeepaliveProvider) {
//    //KeepaliveProvider.interval(10);
//    //IdleProvider.windowInterrupt('focus');
//})
