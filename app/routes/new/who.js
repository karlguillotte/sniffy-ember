export default Ember.Route.extend({
	templateName: 'list-group',
	model: function() {
		var user = this.get('session.user');
		
		return this.store.find('user').then(function(users) {
			return users.removeObject(user);
		});
	},
	createInvitation: function(invitee) {
		return this.store.createRecord('invitation', {
			sniffy: this.modelFor('new'),
			user: invitee
		});
	},
	deactivate: function() {
		var sniffy = this.modelFor('new');
		var invitees = this.get('controller.invitees');
		var invitations = invitees.map(this.createInvitation, this);

		sniffy.get('invitations').clear().pushObjects(invitations);
	}
});
