module.exports = function(environment) {
  var ENV = {
    baseURL: '/',
    locationType: 'auto',
    FEATURES: {
      // Here you can enable experimental features on an ember canary build
      // e.g. 'with-controller': true
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.LOG_MODULE_RESOLVER = true;
    ENV.APP.LOG_RESOLVER = true;
    ENV.APP.LOG_ACTIVE_GENERATION = true;
    ENV.APP.LOG_MODULE_RESOLVER = true;
    ENV.APP.LOG_TRANSITIONS = true;
    ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'production') {

  }

  return ENV;
};
