export default Ember.ArrayController.extend({
	needs: ['new'],
	invitees: Ember.computed.alias('controllers.new.invitees'),
	newUserName: null,
	actions: {
		submit: function() {
			var value = this.get('newUserName');
			var user = this.store.createRecord('user', {
				name: value,
				handle: value.w().map(function(part) { return part[0]; }).join('')
			});

			user.save().then(function() {
				this.set('newUserName', null);
				this.get('invitees').pushObject(user);
			}.bind(this));

		}
	}
});