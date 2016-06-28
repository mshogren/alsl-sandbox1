// From http://jaketrent.com/post/authenticated-supertest-tests/


'use strict';

var should = require('should');
var superagent = require('superagent');
var agent = superagent.agent();
var theAccount = {
  "username": "test1",
  "password": "P@ssword12"
};

exports.login = function (request, done) {
  request
    .post('/login')
    .set('Accept', 'application/json')
    .send(theAccount)
    .end(function (err, res) {
      if (err) {
        throw err;
      }
      agent._saveCookies(res);
      done(agent);
    });
};
