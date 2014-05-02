export default DS.Model.extend({
	handle: DS.attr('string'),
	name: DS.attr('string'),
	invitations: DS.hasMany('invitation'),
	hostedSniffies: DS.hasMany('sniffy'),
	toString: function() {
		return this.get('name');
	}
});