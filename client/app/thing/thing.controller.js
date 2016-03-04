'use strict';

angular.module('dashboardApp')
  .factory('Things', function($resource) {
    return $resource('/api/things/:id', { id: '@_id' });
  })
  .controller('ThingCtrl', function ($scope, $state, Things) {
    $scope.awesomeThings = Things.query();

    $scope.cancel = function() {
      console.log('Here');
      $scope.$dismiss();
    };

    $scope.thing = new Things();

    $scope.ok = function() {
      $scope.thing.$save(function() {
        $state.go('main', {}, {reload: true});
      });
    };

    $scope.delete = function(thing) {
      thing.$delete(function() {
        $state.go('main', {}, {reload: true});
      });
    };
  });
