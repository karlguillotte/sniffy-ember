export default {
	name: 'session',
	after: 'store',
	initialize: function(container, application) {
		var store = container.lookup('store:main');
		// TODO Should be using a real session object
		var session = Ember.Object.create();
		
		application.register('session:main', session, { instantiate: false });
		application.inject('controller', 'session', 'session:main');
		application.inject('route', 'session', 'session:main');
		application.deferReadiness();
		// TODO User ID should specified in html. 
		store.find('user', '-JLv-VAuLcu_azRKv4iF').then(function(user) {
			session.set('user', user);
			application.advanceReadiness();
		});
	}
};