export default Ember.ArrayController.extend({
	needs: 'new',
	actions: {
		select: function(what) {
			this.set('controllers.new.what', what);
			this.transitionToRoute('new');
		}
	}	
});