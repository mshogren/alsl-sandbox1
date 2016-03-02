'use strict';

angular.module('dashboardApp')
  .factory('Things', function($resource) {
    return $resource('/api/things/:id'); // Note the full endpoint address
  })
  .controller('ThingCtrl', function ($scope, Things) {
    $scope.awesomeThings = Things.query();

    $scope.cancel = function() {
      console.log('Here');
      $scope.$dismiss();
    };
  });
