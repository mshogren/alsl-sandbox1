'use strict';

angular.module('dashboardApp')
  .controller('MainCtrl', function ($state) {
    $state.transitionTo('main.thing');
  });
