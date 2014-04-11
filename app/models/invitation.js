export default DS.Model.extend({
	// 'accept', 'decline' or 'ignore'
	answer: DS.attr('string', {
		defaultValue: 'ignore'
	}),
	user: DS.belongsTo('user'),
	sniffy: DS.belongsTo('sniffy')
});