/* global moment */

export default Ember.Controller.extend({
	what: undefined,
	where: undefined,
	when: undefined,
	who: undefined,
	reset: function() {
		this.setProperties({
			what: null,
			where: null,
			when: moment().format('YYYY-MM-DD'),
			who: []
		});
	}.on('init'),
	create: function() {
		var properties = this.getProperties('what', 'where', 'when', 'who');

		var sniffy = this.store.createRecord('sniffy', {
			what: properties.what,
			where: properties.where,
			when: moment(properties.when, 'YYYY-MM-DD').toDate(),
			host: this.store.all('user').findBy('handle', 'BB')
		});

		var invitation = this.store.createRecord('invitation', {
			sniffy: sniffy,
			user: properties.who
		});

		sniffy.get('invitations').pushObject(invitation);

		return sniffy;
	},
	actions: {
		create: function() {
			var sniffy = this.create();
			sniffy.save();
			this.reset();
			this.transitionToRoute('sniffies');
		}
	}
});