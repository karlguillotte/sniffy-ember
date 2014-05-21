export default Ember.Route.extend({
	setupController: function(controller, model) {
		this._super(controller, model);

		this.controllerFor('new.who').set('invitees', []);
	},
	model: function() {
		return this.store.createRecord('sniffy', {
			when: new Date(),
			host: this.get('session.user')
		});
	},
	deactivate: function() {
		var model = this.get('controller.model');
		
		if (model.get('isDirty') && confirm('Are you sure?')) {
			model.rollback();
			model.deleteRecord();
		}
	},
	onSuccessfulCreation: function() {
		this.transitionTo('sniffies');
	},
	actions: {
		create: function() {
			var sniffy = this.get('controller.model');
			var onSuccess = this.onSuccessfulCreation.bind(this);

			if (!sniffy.get('isValid'))
				return;

			var all = sniffy.get('invitations').invoke('save');

			Ember.RSVP.all(all).then(function() {
				sniffy.save().then(onSuccess);
			});

		}
	}
});
