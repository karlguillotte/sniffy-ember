var Router = Ember.Router.extend({
  rootURL: ENV.rootURL,
  location: 'auto'
});

Router.map(function() {
	this.route('sniffies');
	this.route('previous', { path: 'sniffies/previous' });
	this.route('new', { path: 'sniffies/new' });
	this.route('who', { path: 'sniffies/new/who' });
	this.route('what', { path: 'sniffies/new/what' });
	this.route('where', { path: 'sniffies/new/where' });
	this.route('settings');
});

export default Router;
