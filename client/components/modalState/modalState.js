'use strict';

angular.module('dashboardApp')
  .provider('modalState', function($stateProvider) {
    var provider = this;

    this.$get = function() {
      return provider;
    };

    this.state = function(stateName, options) {
      var modalInstance;

      $stateProvider.state(stateName, {
        url: options.url,
        sp: options.sp,
        views: options.views,

        onEnter: function($uibModal, $state, $stateParams) {
          $state.params = $stateParams;
          modalInstance = $uibModal.open(options);
          modalInstance.result['finally'](function() {
            modalInstance = null;
            if ($state.$current.name === stateName) {
              $state.go('^');
            }
          });
        },

        onExit: function() {
          if (modalInstance) {
            modalInstance.close();
          }
        }
      });
    };
  });
