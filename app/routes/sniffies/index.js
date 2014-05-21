export default Ember.Route.extend({
	model: function() {
		return this.modelFor('sniffies').filterBy('isActive');
	} 
});