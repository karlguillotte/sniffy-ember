import Ember from 'ember';

export default Ember.ObjectController.extend(Ember.Validations.Mixin, {
	invitees: [],
	title: 'New'.loc(),
	validations: {
		what: {
			presence: true
		},
		when: {
			presence: true
		},
		invitees: {
			// length: {
			// 	tokenizer: function(value) { 
			// 		return value.slice(); 
			// 	},
			// 	minimum: 1
			// }		
		}
	}
});