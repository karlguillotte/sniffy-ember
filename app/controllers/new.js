export default Ember.ObjectController.extend(Ember.Validations.Mixin, {
	invitees: [],
	validations: {
		when: {
			presence: true
		},
		invitees: {
			presence: true
		},
		what: {
			presence: true
		}
	}
});