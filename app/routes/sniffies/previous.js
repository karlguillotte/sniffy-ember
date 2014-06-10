export default Ember.Route.extend({
	templateName: 'sniffies/index',
	model: function() {
		return this.modelFor('sniffies').filterBy('isActive', false);
	}
});