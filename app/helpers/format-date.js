/* global moment */

var get = Ember.get;

export default Ember.Handlebars.makeBoundHelper(function(date) {
	var format = get(arguments[1], 'hash.format') || 'LL';

	return moment(date).format(format);
});
