'use strict';

angular.module('dashboardApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        views: {
          '@': {
            templateUrl: 'app/main/main.html'
          },
          'things@main': {
            templateUrl: 'app/thing/thing.html',
            controller: 'ThingCtrl'
          }
        },
        sp: {
          waitForUser: true
        }
      });
  });
