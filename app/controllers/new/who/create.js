import Ember from 'ember';
import Create from '../create';

export default Create.extend({
	needs: ['new'],
	invitees: Ember.computed.alias('controllers.new.invitees'),
	placeholder: 'New Invitee...'.loc(),
	actions: {
		create: function() {
			var value = this.get('value');
			var user = this.store.createRecord('user', {
				name: value
			});

			user.save().then(function() {
				this.set('value', null);
				this.get('invitees').pushObject(user);
			}.bind(this));

		}		
	}
});
