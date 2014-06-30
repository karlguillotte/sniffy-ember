export default {
	name: 'date-formatter',
	initialize: function(container) {
		container.optionsForType('service:date-formatter', { instantiate: false, singleton: true });
	}
};
