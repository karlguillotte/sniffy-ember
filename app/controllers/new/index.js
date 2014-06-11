/* global moment */

export default Ember.ObjectController.extend({
	needs: ['new', 'header'],
	invitees: Ember.computed.alias('controllers.new.invitees'),
	setIsDisabled: function() {
		var isValid = this.get('controllers.new.isValid');

		this.set('controllers.header.action.isDisabled', !isValid);
	}.property('controllers.new.isValid'),
	when: function(key, value) {
		var when;
		if (arguments.length > 1) {
			when = moment(value, 'YYYY-MM-DD').toDate();
			this.set('model.when', when);
		} else {
			when = this.get('model.when');
			value = moment(when).format('YYYY-MM-DD');
		}

		return value;
	}.property('model.when')
});