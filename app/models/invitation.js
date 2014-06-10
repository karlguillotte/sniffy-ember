import Answer from '../enums/answer';

var status = Ember.Map.create();
status.set(Answer.ACCEPT, '%@ is going');
status.set(Answer.DECLINE, '%@ is not going');
status.set(Answer.IGNORE, '%@ is ignoring');

var selfStatus = Ember.Map.create();
selfStatus.set(Answer.ACCEPT, 'You are going');
selfStatus.set(Answer.DECLINE, 'You are not going');
selfStatus.set(Answer.IGNORE, 'You are ignoring');

var Invitation = DS.Model.extend({
	answer: DS.attr('answer', {
		defaultValue: Answer.IGNORE
	}),
	user: DS.belongsTo('user', { async: true }),
	sniffy: DS.belongsTo('sniffy', { async: true }),
	status: function() {
		var answer = this.get('answer');
		var invitee = this.get('user');
		var user = this.get('session.user');

		if (user === invitee)
			return selfStatus.get(answer);

		return status.get(answer);
	}.property('answer', 'user', 'session.user')
});

export default Invitation;