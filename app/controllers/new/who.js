export default Ember.ArrayController.extend({
	invitees: [],
	actions: {
		toggle: Ember.K,
		createItem: function() {
			var value = this.get('newItemValue');
			var user = this.store.createRecord('user', {
				name: value,
				handle: value.w().map(function(part) { return part[0]; }).join('')
			});

			user.save().then(function() {
				this.set('newItemValue', null);
				this.invitees.pushObject(user);
			}.bind(this));

		}
	}
});