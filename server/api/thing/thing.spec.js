'use strict';

var should = require('should');
var app = require('../../app');
var request = require('supertest')(app);
var login = require('../login.spec');

describe('GET /api/things', function() {

  var agent;

  before(function(done) {
    this.timeout(10000);

    app.on('stormpath.ready', function() {
      login.login(request, function (loginAgent) {
        agent = loginAgent;
        done();
      });
    });
  });


  it('should respond with JSON array', function(done) {
    var req = request.get('/api/things');

    agent._attachCookies(req);

    req
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        if (err) return done(err);
        res.body.should.be.instanceof(Array);
	done();
      });
  });
});
