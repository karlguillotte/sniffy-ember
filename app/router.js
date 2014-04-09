var Router = Ember.Router.extend({
  rootURL: ENV.rootURL,
  location: 'auto'
});

Router.map(function() {
	this.resource('sniffies', function() {
		this.resource('new', function() {
			this.route('who');
			this.route('what');
			this.route('where');
		});
	});
	this.route('previous', { path: 'sniffies/previous' });
	this.route('settings');
});

export default Router;
