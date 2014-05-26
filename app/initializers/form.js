export default {
	name: 'form',
	initialize: function(container, application) {
		Ember.EasyForm.Config.registerWrapper('twitter-bootstrap', {
		  // Define the custom template
		  inputTemplate: 'bootstrap-input',

		  // Define a custom config used by the template
		  controlsWrapperClass: 'form-group',

		  // Define the classes for the form, label, error...
		  formClass: '',
		  fieldErrorClass: 'error',
		  errorClass: 'help-inline',
		  hintClass: 'help-block',
		  labelClass: 'control-label',
		  inputClass: 'form-group'
		});
	}
};