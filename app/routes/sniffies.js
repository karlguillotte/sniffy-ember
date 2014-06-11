export default Ember.Route.extend({
	model: function() {
		return this.store.find('sniffy');
	},
	deactivate: function() {
		this.controllerFor('header').set('action', null);
	},
	actions: {
		new: function() {
			this.transitionTo('new');
		}
	}
});