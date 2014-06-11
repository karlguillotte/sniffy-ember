export default DS.Model.extend({
	what: DS.attr('string'),
	where: DS.attr('string'),
	when: DS.attr('date', {
		defaultValue: function() {
			return new Date();
		}
	}),
	invitations: DS.hasMany('invitation', { embedded: true }),
	host: DS.belongsTo('user'),	// TODO Host should be always the logged user...
	invitees: Ember.computed.mapBy('invitations', 'user'),
	isActive: function() {
		return Date.now() < this.get('time');
	}.property('time').volatile(),
	time: function() {
		return this.get('when').getTime();
	}.property('when').readOnly()
});