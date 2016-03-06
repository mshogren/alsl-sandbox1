'use strict';

angular.module('dashboardApp')
  .factory('Things', function($resource) {
    return $resource('/api/things/:id',
                     { id: '@_id' },
                     {
                       update: {
                         method: 'PUT'
                       }
                     });
  })
  .controller('ThingCtrl', function ($scope, $state, Things) {
    $scope.awesomeThings = Things.query();

    $scope.thing = new Things();

    $scope.save = function() {
      $scope.thing.$save(function() {
        $state.go('main', {}, {reload: true});
      });
    };

    $scope.edit = function(thing) {
      $state.go('main.thing', { id: thing._id });
    };

    $scope.delete = function(thing) {
      thing.$delete(function() {
        $state.go('main', {}, {reload: true});
      });
    };

    $scope.cancel = function() {
      $scope.$dismiss();
    };

    $scope.modal = {
      title: 'New Feature',
      buttons: [{
        class: 'btn-primary',
        text: 'Save',
        click: function() {
          $scope.save();
        }
      }, {
        class: 'btn-warning',
        text: 'Cancel',
        click: function() {
          $scope.cancel();
        }
      }]
    };

    if($state.params && $state.params.id) {
      $scope.thing = Things.get({id: $state.params.id});

      $scope.save = function() {
        $scope.thing.$update(function() {
          $state.go('main', {}, {reload: true});
        });
      };

      $scope.modal.buttons.unshift({
        class: 'btn-danger',
        text: 'Delete',
        click: function() {
            $scope.delete($scope.thing);
        }
      });
    }
  });
