'use strict';

angular.module('dashboardApp')
  .config(function ($stateProvider, modalStateProvider) {
    modalStateProvider
      .state('main.thing', {
        url: '/thing/:id',
        templateUrl: 'components/modalState/modal.html',
        controller: 'ThingCtrl',
        views: {
          'modal@': {
            templateUrl: 'app/thing/thing-form.html'
          }
        },
        resolve: {
          initialThing: function($state, Things) {
            return ($state.params && $state.params.id) ? Things.get({id: $state.params.id}) : new Things();
          }
        },
        sp: {
          authenticate: true
        }
      });
  });
