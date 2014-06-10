export default {
	name: 'ember-easyForm',
	initialize: function() {
		Ember.TextSupport.reopen({
		    classNames: ['form-control']
		});
	}
};