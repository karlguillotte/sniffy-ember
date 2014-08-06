import Ember from 'ember';
import DS from 'ember-data';
import Answer from '../enums/answer';

var attr = DS.attr;
var belongsTo = DS.belongsTo;
var readOnly = Ember.computed.readOnly;

var otherAnswers = Ember.Map.create();
otherAnswers.set(Answer.ACCEPT.toString(), '%@ is going');
otherAnswers.set(Answer.DECLINE.toString(), '%@ is not going');
otherAnswers.set(Answer.IGNORE.toString(), '%@ is ignoring');

var selfAnswers = Ember.Map.create();
selfAnswers.set(Answer.ACCEPT.toString(), 'You are going');
selfAnswers.set(Answer.DECLINE.toString(), 'You are not going');
selfAnswers.set(Answer.IGNORE.toString(), 'You are ignoring');

export default DS.Model.extend({

	// Attributes
	answer: attr('answer', {
		defaultValue: Answer.IGNORE.toString()
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
		var answer = this.get('answer').toString();
		var invitee = this.get('invitee');
		var user = this.get('store.session.user');

		if (user === invitee) {
			return selfAnswers.get(answer);
		}

		var message = otherAnswers.get(answer);
		var firstName = invitee.get('firstName');

		return message.fmt(firstName);
	}.property('answer', 'user', 'store.session.user')

});