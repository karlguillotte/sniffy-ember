export default Ember.Route.extend({
	templateName: 'new.list',
	activate: function() {
		this.controllerFor('header').setProperties({
			parent: 'new',
			action: null
		});
	},
	model: function() {
		return this.modelFor('sniffies').getEach('what').compact().uniq();
	},
	actions: {
		select: function(what) {
			this.controllerFor('new').set('what', what);
			this.transitionTo('new');
		}
	}	
});
