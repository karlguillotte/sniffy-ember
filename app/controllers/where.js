export default Ember.ArrayController.extend({
	needs: 'new',
	actions: {
		select: function(where) {
			this.set('controllers.new.where', where);
			this.transitionToRoute('new');
		}
	}	
});