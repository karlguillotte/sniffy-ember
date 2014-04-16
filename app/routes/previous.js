export default Ember.Route.extend({
	templateName: 'sniffies',
	model: function() {
		return this.store.all('sniffy').filterBy('isActive', false);
	}
});