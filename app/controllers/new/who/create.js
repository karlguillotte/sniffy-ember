import Create from '../create';

export default Create.extend({
	placeholder: 'New Invitee...'.loc(),
	actions: {
		create: function() {
			var value = this.get('value');
			var user = this.store.createRecord('user', {
				name: value,
				handle: value.w().map(function(part) { return part[0]; }).join('')
			});

			user.save().then(function() {
				this.set('value', null);
				this.get('invitees').pushObject(user);
			}.bind(this));

		}		
	}
});
