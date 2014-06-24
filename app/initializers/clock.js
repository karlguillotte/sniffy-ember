import ClockService from '../services/clock';
import Ember from 'ember';

export default {
	name: 'clock-service',
	initialize: function(container, application) {
		container.register('service:clock', ClockService);
		application.inject('controller:application', 'clock', 'service:clock');
	}
};