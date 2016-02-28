'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('dashboardApp'));
  beforeEach(module('stateMock'));

  it('should transition to the main.thing state', function () {
    inject(function ($controller, $state, $rootScope) {
      var scope = $rootScope.$new();
      var state = $state;

      state.expectTransitionTo('main.thing');

      var MainCtrl = $controller('MainCtrl', {
        $scope: scope
      });

      state.ensureAllTransitionsHappened();
    });
  });
});
