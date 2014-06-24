export default {
  name: 'moment',
  initialize: function(container, app) {
    app.inject('route', 'moment', 'service:moment');
  }
};
