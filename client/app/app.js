'use strict';

angular.module('dashboardApp', [
  'config',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap',
  'stormpath',
  'stormpath.templates'
])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  })
  .config(function(STORMPATH_CONFIG, ENV) {
    STORMPATH_CONFIG.ENDPOINT_PREFIX = ENV.apiEndpoint;
  })
  .factory('ApiInterceptor', function(ENV) {
    return {
      'request': function(config) {
        if(config.url[0] === '/') {
          config.url = ENV.apiEndpoint + config.url;
        }
        return config;
      }
    };
  })
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('ApiInterceptor');
  })
  .run(function($stormpath){
    $stormpath.uiRouter({
      loginState: 'login',
      defaultPostLoginState: 'main'
    });
  });
