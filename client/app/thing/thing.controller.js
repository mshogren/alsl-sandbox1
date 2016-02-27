'use strict';

angular.module('dashboardApp')
  .controller('ThingCtrl', function ($scope, $http, STORMPATH_CONFIG) {
    $scope.awesomeThings = [];

    $http.get(STORMPATH_CONFIG.ENDPOINT_PREFIX + '/api/things').success(function(awesomeThings) {
      awesomeThings.pop();
      $scope.awesomeThings = awesomeThings;
    });

    $scope.addThing = function() {
      if($scope.newThing === '') {
        return;
      }
      $http.post(STORMPATH_CONFIG.ENDPOINT_PREFIX + '/api/things', { name: $scope.newThing });
      $scope.newThing = '';
    };

    $scope.deleteThing = function(thing) {
      $http.delete(STORMPATH_CONFIG.ENDPOINT_PREFIX + '/api/things/' + thing._id);
    };
  });
