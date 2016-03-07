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
            controller: 'ThingsCtrl'
          }
        },
        resolve: {
          awesomeThings: function(Thing) {
            return Thing.query().$promise;
          }
        },
        sp: {
          waitForUser: true
        }
      });
  });
