/* global moment */

import Ember from 'ember';

export default Ember.Handlebars.makeBoundHelper(function(date) {
	var format = Ember.get(arguments[1], 'hash.format') || 'LL';

	return moment(date).format(format);
});
