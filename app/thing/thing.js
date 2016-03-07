'use strict';

angular.module('dashboardApp')
  .factory('Thing', function($resource) {
    return $resource('/api/things/:id',
                     { id: '@_id' },
                     {
                       update: {
                         method: 'PUT'
                       }
                     });
  })
  .config(function ($stateProvider, modalStateProvider) {
    modalStateProvider
      .state('main.thing', {
        url: 'thing/:id',
        templateUrl: 'components/modalState/modal.html',
        controller: 'ThingCtrl',
        views: {
          'modal@': {
            templateUrl: 'app/thing/thing-form.html'
          }
        },
        resolve: {
          thing: function($state, Thing) {
            return ($state.params && $state.params.id) ?
              Thing.get({id: $state.params.id}).$promise :
              new Thing();
          }
        },
        sp: {
          authenticate: true
        }
      });
  });
