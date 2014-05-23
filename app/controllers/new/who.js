export default Ember.ArrayController.extend({
	needs: ['new'],
	invitees: Ember.computed.alias('controllers.new.invitees'),
	newItemValue: null,
	actions: {
		toggle: Ember.K,  // TODO Could be removed > because using a common template
		createItem: function() {
			var value = this.get('newItemValue');
			var user = this.store.createRecord('user', {
				name: value,
				handle: value.w().map(function(part) { return part[0]; }).join('')
			});

			user.save().then(function() {
				this.set('newItemValue', null);
				this.get('invitees').pushObject(user);
			}.bind(this));

		}
	}
});