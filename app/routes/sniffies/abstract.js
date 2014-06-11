export default Ember.Route.extend({
	activate: function() {
		this.controllerFor('header').set('action', {
			name: 'new'
		});
	}
});