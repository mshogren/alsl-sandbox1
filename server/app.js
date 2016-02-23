/**
 * Main application file
 */

'use strict';

// Set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express = require('express');
var cors = require('cors');
var mongoose = require('mongoose');
var config = require('./config/environment');
var ExpressStormpath = require('express-stormpath');
var path = require('path');

// Connect to database
mongoose.connect(config.mongo.uri, config.mongo.options);
mongoose.connection.on('error', function(err) {
	console.error('MongoDB connection error: ' + err);
	process.exit(-1);
	}
);
// Populate DB with sample data
if(config.seedDB) { require('./config/seed'); }

// Setup server
var app = express();

app.use(cors({
  origin: 'http://alsl-sandbox1.michael-shogren.com/',
  credentials: true
}));

app.use(ExpressStormpath.init(app,{
  website: true,
  expand: {
    groups: true
  },
  web: {
    spaRoot: path.join(__dirname, '..','client','index.html'),
    register: {
      fields: {
        username: {
          enabled: true
        }
      }
    }
  }
}));

var server = require('http').createServer(app);
require('./config/express')(app);
require('./routes')(app);

app.on('stormpath.ready', function() {
  // Start server
  server.listen(config.port, config.ip, function () {
    console.log('Express server listening on %d, in %s mode', config.port, app.get('env'));
  });
});

// Expose app
exports = module.exports = app;
