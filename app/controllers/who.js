export default Ember.ArrayController.extend({
	needs: 'new',
	actions: {
		select: function(who) {
			this.set('controllers.new.who', who);
			this.transitionToRoute('new');
		}
	}	
});