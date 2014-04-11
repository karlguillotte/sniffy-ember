var Router = Ember.Router.extend({
  rootURL: ENV.rootURL,
  location: 'auto'
});

Router.map(function() {
	var sniffies = 'sniffies';
	var newSniffy = sniffies + '/new';

	this.route(sniffies);
	this.route('previous', { path: sniffies + '/previous' });
	this.route('new', { path: newSniffy });
	this.route('who', { path: newSniffy + '/who' });
	this.route('what', { path: newSniffy + '/what' });
	this.route('where', { path: newSniffy + '/where' });
	this.route('settings');
});

export default Router;
