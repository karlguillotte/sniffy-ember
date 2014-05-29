export default Ember.Route.extend({
	templateName: 'new.list',
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
