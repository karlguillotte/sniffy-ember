import Ember from 'ember';

export default {
	name: 'form',
	initialize: function() {
		Ember.TextSupport.reopen({
		    classNames: ['form-control']
		});
	}
};