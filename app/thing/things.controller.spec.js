'use strict';

describe('Controller: ThingsCtrl', function () {

  // load the controller's module
  beforeEach(module('dashboardApp'));
  beforeEach(module('stateMock'));

  var ThingsCtrl,
      scope,
      $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$httpBackend_, $controller, $rootScope) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('/me').respond({});

    scope = $rootScope.$new();
    ThingsCtrl = $controller('ThingsCtrl', {
      $scope: scope,
      awesomeThings: ['HTML5 Boilerplate', 'AngularJS', 'Karma', 'Express']
    });
  }));

  it('should attach a list of things to the scope', function () {
    $httpBackend.flush();
    expect(scope.awesomeThings.length).toBe(4);
  });
});
