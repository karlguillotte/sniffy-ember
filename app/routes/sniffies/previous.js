export default Ember.Route.extend({
	templateName: 'sniffies/index',
	headerTemplateName: 'sniffies/header',
	model: function() {
		return this.modelFor('sniffies').filterBy('isActive', false);
	}
});