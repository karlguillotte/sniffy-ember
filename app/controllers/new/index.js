export default Ember.ObjectController.extend({
	when: function(key, value) {
		if (arguments.length > 1) {
			this.set('model.when', moment(value, 'YYYY-MM-DD').toDate());
		} else {
			value = moment(this.get('model.when')).format('YYYY-MM-DD');
		}

		return value;
	}.property('model.when')
});