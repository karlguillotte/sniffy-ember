import Abstract from './abstract';

export default Abstract.extend({
	templateName: 'sniffies/index',
	model: function() {
		return this.modelFor('sniffies').filterBy('isActive', false);
	}
});