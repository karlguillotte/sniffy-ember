import DS from 'ember-data';

var attr = DS.attr;
var hasMany = DS.hasMany;

export default DS.Model.extend({

	// Attributes
	handle: attr('string', {
		defaultValue: function(model) {
			return model.computeHandle();
		}
	}),
	firstName: attr('string'),
	lastName: attr('string'),

	// Relationships
	invitations: hasMany('invitation', { async: true }),
	hostedSniffies: hasMany('sniffy', { async: true }),

	// Computed properties
	name: function(key, value) {
		if (arguments.length > 1) {
			var names = value.w();
			
			this.setProperties({
				firstName: names[0],
				lastName: names[1]
			});
			
			return value;
		}

		var firstName = this.get('firstName');
		var lastName = this.get('lastName');

		return '%@ %@'.fmt(firstName, lastName);
	}.property('firstName', 'lastName'),

	// Methods
	computeHandle: function() {
		var firstName = this.getWithDefault('firstName', '');
		var lastName = this.getWithDefault('lastName', '');
		var name = firstName.charAt(0) + lastName.charAt(0);
		var handle = name ? name.toUpperCase() : null;

		return handle;
	},
	updateHandle: function() {
		this.set('handle', this.computeHandle());
	}

});