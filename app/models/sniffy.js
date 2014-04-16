export default DS.Model.extend({
	what: DS.attr('string'),
	where: DS.attr('string'),
	when: DS.attr('date'),
	invitations: DS.hasMany('invitation'),
	host: DS.belongsTo('user'),
	invitees: function() {
		return this.get('invitations').getEach('user');
	}.property('invitations.@each.user'),
	isActive: function() {
		return Date.now() < this.get('when').getTime();
	}.property('when').volatile()
});