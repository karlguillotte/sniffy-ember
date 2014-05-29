export default Ember.ObjectController.extend(Ember.Validations.Mixin, {
	invitees: [],
	validations: {
		what: {
			presence: true
		},
		when: {
			presence: true
		},
		invitees: {
			// length: { minimum: 1 }
		}
	}
});