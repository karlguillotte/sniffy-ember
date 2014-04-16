export default Ember.Route.extend({
	templateName: 'list',
	model: function() {
		var who = new Ember.Set();

		this.store.all('sniffy').forEach(function(sniffy) {
			who.addObjects(sniffy.get('invitees'));
		});

		return who.toArray();
	}
});
