export default Ember.Route.extend({
	model: function() {
		return this.store.all('sniffy', { isActive: false });
	},
	templateName: 'sniffies'
});