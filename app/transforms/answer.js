var Answer = DS.Model.extend({
	answer: DS.attr('string', {
		defaultValue: function() {
			return Invitation.ANSWERS['ignore'];
		}
	}),
	user: DS.belongsTo('user'),
	sniffy: DS.belongsTo('sniffy')
});

Answer.reopenClass({
	ANSWERS: {
		accept: {
			id: 'accept',
			text: 'accept'.loc()
		}
		decline: {
			id: 'decline',
			text: 'decline'.loc()
		}
		ignore: {
			id: 'ignore',
			text: 'ignore'.loc()
		}
	}
});

export default Answer;