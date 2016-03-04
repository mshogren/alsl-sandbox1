'use strict';

angular.module('dashboardApp')
  .config(function ($stateProvider, modalStateProvider) {
    $stateProvider
      .state('thing', {
        url: '/thing',
        templateUrl: 'app/thing/thing.html',
        controller: 'ThingCtrl'
      });
    modalStateProvider
      .state('main.newThing', {
        templateUrl: 'components/modalState/modal.html',
        controller: 'ThingCtrl',
        views: {
          'modal@': {
            templateUrl: 'app/thing/thing-form.html'
          }
        },
        sp: {
          authenticate: true
        }
      });
  });
