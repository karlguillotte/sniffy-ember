export default Ember.ObjectController.extend({
	needs: ['new'],
	invitees: Ember.computed.alias('controllers.new.invitees'),
	isSelected: function() {
		return this.get('invitees').contains(this.get('content'));
	}.property('invitees.[]'),
	actions: {
		toggle: function(user) {
			var invitees = this.get('invitees');

			if (invitees.contains(user))
				invitees.removeObject(user);
			else
				invitees.pushObject(user);
		}
	}
});
