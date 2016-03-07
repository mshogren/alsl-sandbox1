'use strict';

angular.module('dashboardApp')
  .controller('ThingsCtrl', function ($scope, $state, awesomeThings) {
    $scope.awesomeThings = awesomeThings;

    $scope.edit = function(thing) {
      $state.go('main.thing', { id: thing._id });
    };
  });
