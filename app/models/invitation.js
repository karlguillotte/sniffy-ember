import AnswerTransform from './transforms/answer';

var Invitation = DS.Model.extend({
	answer: DS.attr('answer', {
		defaultValue: function() {
			return AnswerTransform.deserialize();
		}
	}),
	user: DS.belongsTo('user'),
	sniffy: DS.belongsTo('sniffy')
});

export default Invitation;