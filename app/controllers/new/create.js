export default Ember.Controller.extend(Ember.Validations.Mixin, {
	validations: {
		value: {
			presence: true
		}
	},
	value: null,
	actions: {
		create: function() {
			var select = function() {
				this.send('select', this.get('value'));
				this.set('value', null);
			}.bind(this);

			this.validate().then(select);
		}		
	}
});