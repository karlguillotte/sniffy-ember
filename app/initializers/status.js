import Status from '../enums/status';

export default {
	name: 'enum:status',
	initialize: function(container) {
		container.register('enum:status', Status, { instantiate: false, singleton: true });
	}
};
