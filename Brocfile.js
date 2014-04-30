/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');
var pickFiles = require('broccoli-static-compiler');
var mergeTrees  = require('broccoli-merge-trees');


var app = new EmberApp({
  name: require('./package.json').name,

  legacyFilesToAppend: [
    'jquery.js',
    'handlebars.js',
    'ember.js',
    'ic-ajax/dist/named-amd/main.js',
    'ember-data.js',
    'app-shims.js',
    'ember-resolver.js',
    'ember-load-initializers.js',
    'firebase.js',
    'emberfire/dist/emberfire.js',
    'momentjs/moment.js'
  ],

  // AKA whitelisted modules
  ignoredModules: [
    'ember',
    'ember/resolver',
    'ember/load-initializers',
    'ic-ajax'
  ],

  // hack we can hopefully remove as the addon system improves
  importWhitelist: {
    'ember': ['default'],
    'ember/resolver': ['default'],
    'ember/load-initializers': ['default']
  },

  // hack
  getEnvJSON: require('./config/environment')
});

var bootstrap = pickFiles('vendor', {
  srcDir: '/bootstrap/dist/css',
  files: [
    'bootstrap.css'
  ],
  destDir: '/assets/'
});

module.exports = mergeTrees([app.toTree(), bootstrap], {
  overwrite: true
});
