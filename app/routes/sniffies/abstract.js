import Ember from 'ember';

export default Ember.Route.extend({
	activate: function() {
		this.controllerFor('header').set('action', {
			text: 'New'.loc(),
			name: 'new'
		});
	}
});