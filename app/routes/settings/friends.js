import Ember from 'ember';

export default Ember.Route.extend({
	activate: function() {
		this.controllerFor('header').set('parent', 'settings');
	},
	deactivate: function() {
		this.controllerFor('header').set('parent', null);
	}
});