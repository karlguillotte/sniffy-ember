/* global moment */

import DS from 'ember-data';

var attr = DS.attr;
var belongsTo = DS.belongsTo;

export default DS.Model.extend({

	// Attributes
	body: attr('string'),
	createdOn: attr('date', {
		defaultValue: function() {
			return moment.utc().toDate();
		}
	}),

	// Relationship
	sniffy: belongsTo('sniffy', { async: true }),
	user: belongsTo('user', { async: true })
});