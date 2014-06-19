import DS from 'ember-data';

var attr = DS.attr;
var hasMany = DS.hasMany;

export default DS.Model.extend({

	// Attributes
	handle: attr('string'),
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
});