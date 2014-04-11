export default Ember.Controller.extend({
	what: undefined,
	where: undefined,
	when: undefined,
	who: undefined,
	reset: function() {
		this.setProperties({
			what: null,
			where: null,
			when: new Date(),
			who: []
		});
	}.on('init'),
	properties: function() {
		return this.getProperties('what', 'where', 'when', 'who');
	}.property('what', 'where', 'when', 'who.[]')
});