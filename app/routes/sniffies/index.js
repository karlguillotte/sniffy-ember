import Abstract from './abstract';

export default Abstract.extend({
	model: function() {
		// TODO This could a live filter from the store...
		return this.modelFor('sniffies').filterBy('isActive');
	}
});