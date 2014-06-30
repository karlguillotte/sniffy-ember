export default {
	name: 'clock-service',
	initialize: function(container, application) {
		application.inject('controller:application', 'clock', 'service:clock');
	}
};