import Ember from 'ember';

export default Ember.Route.extend({
	activate: function() {
		this.controllerFor('header').setProperties({
			parent: 'new',
			action: {
				name: 'select',
				text: 'Ok'.loc()
			}
		});
	},
	model: function() {
		var user = this.get('session.user');
		
		return this.store.find('user').then(function(users) {
			return users.removeObject(user);
		});
	},
	actions: {
		select: function() {
			this.transitionTo('new');
		}
	}
});
