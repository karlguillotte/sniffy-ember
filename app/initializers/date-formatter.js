export default {
	name: 'date-formatter',
	initialize: function(container, app) {
		container.optionsForType('service:date-formatter', { instantiate: false });
	}
};
