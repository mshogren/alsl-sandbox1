'use strict';

angular.module('dashboardApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl',
        sp: {
          //authenticate: true,
          waitForUser: true
        }
      })
      .state('main.thing', {
        templateUrl: 'app/thing/thing.html',
        controller: 'ThingCtrl'
      });
  });
