export default Ember.Route.extend({
	setupController: function(controller, model) {
		this._super(controller, model);

		controller.get('invitees').clear();
	},
	model: function() {
		return this.store.createRecord('sniffy', {
			host: this.store.get('session.user')
		});
	},
	deactivate: function() {
		var model = this.controller.get('model');
		
		if (model.get('isNew')) {
			model.rollback();
		}
	},
	createInvitation: function(invitee) {
		return this.store.createRecord('invitation', {
			sniffy: this.controller.get('model'),
			user: invitee
		});
	},
	save: function() {
		var sniffy = this.controller.get('model');
		var invitees = this.controller.get('invitees');
		var invitations = invitees.map(this.createInvitation, this);
		var saveSniffy = function() {
			return sniffy.save();
		};
		var saveInvitations = invitations.invoke('save');

		sniffy.get('invitations').clear().pushObjects(invitations);
		
		// TODO Not nice, there might be a better way to save
		return Ember.RSVP.all(saveInvitations).then(saveSniffy);
	},
	actions: {
		create: function() {
			var save = function() {
				return this.save();
			}.bind(this);
			var transition = function() {
				this.transitionTo('sniffies');
			}.bind(this);
			
			this.controller.validate().then(save).then(transition);
		}
	}
});
