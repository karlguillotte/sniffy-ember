export default {
	name: 'session',
	after: 'store',
	initialize: function(container, application) {
		var store = container.lookup('store:main');
		// TODO Should be using a real session from a plugin
		var session = Ember.Object.create();
		
		application.register('session:main', session, { instantiate: false });
		application.inject('controller', 'session', 'session:main');
		application.inject('route', 'session', 'session:main');
		application.inject('store', 'session', 'session:main');
		application.deferReadiness();
		// TODO User ID should specified in html. 
		store.find('user', '-JO7EyRq1TB4t9fKVe9D').then(function(user) {
			session.set('user', user);
			application.advanceReadiness();
		});
	}
};