var User = DS.Model.extend({
	handle: DS.attr(),
	name: DS.attr(),
	invitations: DS.hasMany('invitation'),
	hostedSniffies: DS.hasMany('sniffy')
});

export default User;
