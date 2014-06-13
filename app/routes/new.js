import Ember from 'ember';

export default Ember.Route.extend({
	setupController: function(model, controller) {
		this._super.apply(this, arguments);

		controller.get('invitees').clear();
	},
	model: function() {
		return this.store.createRecord('sniffy', {
			host: this.get('session.user')
		});
	},
	deactivate: function() {
		var model = this.controller.get('model');
		
		if (model.get('isNew')) {
			model.rollback();
		}

		this.controllerFor('header').set('parent', null);
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

		sniffy.get('invitations').addObjects(invitations);
		
		return sniffy.save();
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
