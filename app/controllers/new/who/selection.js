import Ember from 'ember';

export default Ember.ObjectController.extend({
	needs: ['new'],
	invitees: Ember.computed.alias('controllers.new.invitees'),
	isSelected: function() {
		return this.get('invitees').contains(this.get('content'));
	}.property('invitees.[]'),
	actions: {
		toggle: function(invitee) {
			var invitees = this.get('invitees');

			if (invitees.contains(invitee)) {
				invitees.removeObject(invitee);
			} else {
				invitees.pushObject(invitee);
			}
		}
	}
});
