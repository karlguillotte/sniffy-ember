export default DS.Model.extend({
	what: DS.attr('string'),
	where: DS.attr('string'),
	when: DS.attr('date'),
	invitations: DS.hasMany('invitation'),
	host: DS.belongsTo('user'),
	createdOn: DS.attr('date', {
		defaultValue: function() {
			return new Date();
		}
	}),
	isActive: function() {
		return Date.now() < this.get('when').getTime();
	}.property('when')
});