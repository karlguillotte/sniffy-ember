export default Ember.Route.extend({
	templateName: 'list',
	model: function() {
		return this.store.all('sniffy').getEach('where');
	}
});
