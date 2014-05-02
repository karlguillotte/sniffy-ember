export default Ember.Route.extend({
	templateName: 'list',
	model: function() {
		return this.store.find('user');
	}
});
