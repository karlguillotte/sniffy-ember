import Answer from '../enums/answer';

var Invitation = DS.Model.extend({
	answer: DS.attr('answer', {
		defaultValue: Answer.IGNORE
	}),
	user: DS.belongsTo('user'),
	sniffy: DS.belongsTo('sniffy')
});

export default Invitation;