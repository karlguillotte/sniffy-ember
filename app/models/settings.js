import DS from 'ember-data';

export default DS.Model.extend({

	// Attributes
	calendar: DS.attr('string'),

	// Relationships
	friends: DS.hasMany('user')
});