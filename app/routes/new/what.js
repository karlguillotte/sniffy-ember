export default Ember.Route.extend({
	templateName: 'list-group',
	model: function() {
		return this.modelFor('sniffies').getEach('what').compact().uniq();
	},
	setValue: function(value) {
		this.controllerFor('new').set('what', value);
		this.transitionTo('new');
	},
	actions: {
		toggle: function(what) {
			this.setValue(what);
		},
		submit: function() {
			var controller = this.controller;
			var value = controller.get('newItemValue');

			controller.set('newItemValue', null);
			
			this.setValue(value);
		}
	}	
});
