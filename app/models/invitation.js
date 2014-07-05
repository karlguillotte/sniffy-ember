import Ember from 'ember';
import DS from 'ember-data';
import Answer from '../enums/answer';

var attr = DS.attr;
var belongsTo = DS.belongsTo;
var readOnly = Ember.computed.readOnly;

var otherAnswers = Ember.Map.create();
otherAnswers.set(Answer.ACCEPT, '%@ is going');
otherAnswers.set(Answer.DECLINE, '%@ is not going');
otherAnswers.set(Answer.IGNORE, '%@ is ignoring');

var selfAnswers = Ember.Map.create();
selfAnswers.set(Answer.ACCEPT, 'You are going');
selfAnswers.set(Answer.DECLINE, 'You are not going');
selfAnswers.set(Answer.IGNORE, 'You are ignoring');

export default DS.Model.extend({

	// Attributes
	answer: attr('answer', {
		defaultValue: Answer.IGNORE
	}),
	createdOn: attr('date', {
		defaultValue: function() {
			return new Date();
		}
	}),

	// Relationships
	invitee: belongsTo('user', { async: true }),
	sniffy: belongsTo('sniffy', { async: true }),

	// Computed Properties
	host: readOnly('sniffy.host'),
	answerText: function() {
		var answer = this.get('answer');
		var invitee = this.get('invitee');
		var user = this.get('store.session.user');
		var firstName;
		var message;

		if (user === invitee) {
			return selfAnswers.get(answer);
		}

		message = otherAnswers.get(answer);
		firstName = invitee.get('firstName');

		return message.fmt(firstName);
	}.property('answer', 'user', 'store.session.user')

});