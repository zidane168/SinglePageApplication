﻿var app = angular.module('appIdle', ['ngIdle']);
app.controller('EventsCtrl', function ($scope, Idle) {
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
})
.config(function (IdleProvider, KeepaliveProvider) {
    //KeepaliveProvider.interval(10);
    //IdleProvider.windowInterrupt('focus');
})
.run(function ($rootScope, Idle, $log, Keepalive) {
    Idle.watch();

    $log.debug('[Run] app started.');
});