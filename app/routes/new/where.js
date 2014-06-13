import Ember from 'ember';

export default Ember.Route.extend({
	templateName: 'new.list',
	activate: function() {
		this.controllerFor('header').setProperties({
			parent: 'new',
			action: null
		});
	},
	model: function() {
		return this.modelFor('sniffies').getEach('where').compact().uniq();
	},
	actions: {
		select: function(where) {
			this.controllerFor('new').set('where', where);
			this.transitionTo('new');
		}
	}	
});
