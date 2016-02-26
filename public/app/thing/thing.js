'use strict';

angular.module('dashboardApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('thing', {
        url: '/thing',
        templateUrl: 'app/thing/thing.html',
        controller: 'ThingCtrl'
      });
  });