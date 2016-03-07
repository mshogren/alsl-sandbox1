'use strict';

angular.module('dashboardApp')
  .controller('ThingCtrl', function ($scope, $state, thing) {
    $scope.thing = thing;

    $scope.save = function() {
      $scope.thing.$save(function() {
        $state.go('main', {}, {reload: true});
      });
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
      $scope.modal.title = thing.name;

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
