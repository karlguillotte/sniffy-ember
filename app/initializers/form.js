export default {
	name: 'ember-easyForm',
	initialize: function() {
		
		Ember.TextSupport.reopen({
		    classNames: ['form-control']
		});
		
		// Ember.EasyForm.Config.registerWrapper('default', {
		//   fieldErrorClass: 'error',
		//   errorClass: 'help-inline',
		//   hintClass: 'help-block',
		//   labelClass: 'control-label hidden',
		//   inputClass: 'form-group'
		// });
	}
};