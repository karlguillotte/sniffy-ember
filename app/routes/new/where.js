export default Ember.Route.extend({
	templateName: 'list-group',
	model: function() {
		return this.modelFor('sniffies').getEach('where').compact().uniq();
	},
	setValue: function(value) {
		this.controllerFor('new').set('where', value);
		this.transitionTo('new');
	},
	actions: {
		toggle: function(where) {
			this.setValue(where);
		},
		createItem: function() {
			var controller = this.controller;
			var value = controller.get('newItemValue');

			controller.set('newItemValue', null);
			
			this.setValue(value);
		}
	}	
});
