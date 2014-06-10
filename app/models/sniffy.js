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
	invitees: function() {
		return this.get('invitations').getEach('user');
	}.property('invitations.@each.user'),
	isActive: function() {
		return Date.now() < this.get('when').getTime();
	}.property('when').volatile()
});