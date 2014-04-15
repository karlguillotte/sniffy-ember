import AnswerTransform from '../transforms/answer';

var defaultAnswer = AnswerTransform.create().deserialize();

var Invitation = DS.Model.extend({
	answer: DS.attr('answer', {
		defaultValue: defaultAnswer
	}),
	user: DS.belongsTo('user'),
	sniffy: DS.belongsTo('sniffy')
});

export default Invitation;