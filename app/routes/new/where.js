export default Ember.Route.extend({
	templateName: 'new.list',
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
