export default DS.Model.extend({
	handle: DS.attr('string'),
	firstName: DS.attr('string'),
	lastName: DS.attr('string'),
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
	invitations: DS.hasMany('invitation', { async: true }),
	hostedSniffies: DS.hasMany('sniffy', { async: true })
});