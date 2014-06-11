/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');
var mergeTrees = require('broccoli-merge-trees');
var pickFiles = require('broccoli-static-compiler');

var app = new EmberApp({
  name: require('./package.json').name,

  // for some large projects, you may want to uncomment this (for now)
  es3Safe: true,

  minifyCSS: {
    enabled: true,
    options: {}
  },

  getEnvJSON: require('./config/environment')
});

// Use `app.import` to add additional libraries to the generated
// output files.
//
// If you need to use different assets in different
// environments, specify an object as the first parameter. That
// object's keys should be the environment name and the values
// should be the asset to use in that environment.
//
// If the library that you are including contains AMD or ES6
// modules that you would like to import into your application
// please specify an object with the list of modules as keys
// along with the exports of each module as its value.

app.import({
  development: 'vendor/ember-data/ember-data.js',
  production:  'vendor/ember-data/ember-data.prod.js'
}, {
  'ember-data': [
    'default'
  ]
});

app.import('vendor/ic-ajax/dist/named-amd/main.js', {
  'ic-ajax': [
    'default',
    'defineFixture',
    'lookupFixture',
    'raw',
    'request',
  ]
});

app.import('vendor/ember-data/ember-data.js');
app.import('vendor/firebase/firebase.js');
app.import('vendor/emberfire/dist/emberfire.js');
app.import('vendor/momentjs/moment.js');
app.import('vendor/ember-validations/index.js');
// app.import('vendor/ember-simple-auth/ember-simple-auth.js');
// app.import('vendor/bootstrap/dist/css/bootstrap.css');


var bootstrapAssets = pickFiles('vendor/bootstrap/dist', {
  srcDir: '/',
  files: ['**/*.eot', '**/*.svg', '**/*.ttf', '**/*.woff', '**/bootstrap.css'],
  destDir: '/assets/bootstrap'
});

module.exports = mergeTrees([app.toTree(), bootstrapAssets]); 
