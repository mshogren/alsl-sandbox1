'use strict';

angular.module('dashboardApp')
  .factory('apiInterceptor', function(ENV) {
    return {
      'request': function(config) {
        if(config.url[0] === '/') {
          config.url = ENV.apiEndpoint + config.url;
        }
        return config;
      }
    };
  });

