var Sniffy = DS.Model.extend({
	what: DS.attr(),
	where: DS.attr(),
	when: DS.attr('date'),
	invitations: DS.hasMany('invitation'),
	host: DS.belongsTo('user')
});

export default Sniffy;
