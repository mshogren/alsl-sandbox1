'use strict';

describe('Controller: ThingCtrl', function () {

  // load the controller's module
  beforeEach(module('dashboardApp'));
  beforeEach(module('stateMock'));

  var ThingCtrl,
      scope,
      $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$httpBackend_, $controller, $rootScope, STORMPATH_CONFIG) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET(STORMPATH_CONFIG.ENDPOINT_PREFIX + '/me').respond({});
    $httpBackend.expectGET(STORMPATH_CONFIG.ENDPOINT_PREFIX + '/api/things')
      .respond(['HTML5 Boilerplate', 'AngularJS', 'Karma', 'Express']);

    scope = $rootScope.$new();
    ThingCtrl = $controller('ThingCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of things to the scope', function () {
    $httpBackend.flush();
    expect(scope.awesomeThings.length).toBe(4);
  });
});
