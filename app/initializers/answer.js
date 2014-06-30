import Answer from '../enums/answer';

export default {
	name: 'enum:answer',
	initialize: function(container) {
		container.register('enum:answer', Answer, { instantiate: false, singleton: true });
	}
};
