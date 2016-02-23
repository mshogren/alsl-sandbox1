'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('dashboardApp'));

  var MainCtrl,
      scope,
      $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$httpBackend_, $controller, $rootScope, STORMPATH_CONFIG) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET(STORMPATH_CONFIG.ENDPOINT_PREFIX + '/me').respond({});
    $httpBackend.expectGET(STORMPATH_CONFIG.ENDPOINT_PREFIX + '/api/things')
      .respond(['HTML5 Boilerplate', 'AngularJS', 'Karma', 'Express']);
    $httpBackend.expectGET('app/main/main.html').respond(200, {});

    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of things to the scope', function () {
    $httpBackend.flush();
    expect(scope.awesomeThings.length).toBe(4);
  });
});
