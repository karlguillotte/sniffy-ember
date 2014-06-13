import Ember from 'ember';

export default Ember.Route.extend({
	activate: function() {
		this.controllerFor('header').setProperties({
			parent: 'sniffies',
			action: {
				name: 'create',
				text: 'Sniffy!'
			}
		});
	}
});