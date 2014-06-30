import Ember from 'ember';
import Answer from '../enums/answer';
import DropMixin from '../mixins/drop';

var alias = Ember.computed.alias;

export default Ember.Component.extend(DropMixin, {
	tagName: 'sniffy-invitation',
	classNameBindings: ['answer'],
	invitation: null,
	answerText: alias('invitation.answerText'),
	answer: alias('invitation.answer'),
	invitee: alias('invitation.invitee'),
	user: alias('invitation.sniffy.host'),
	dropContent: function() {
		var answerText = this.get('answerText');
		var answer = this.get('answer');
		var invitee = this.get('invitee');
		var user = this.get('user');
		var templateName = answerText;

		if (user === invitee && Answer.IGNORE === answer) {
			templateName = 'template';
		}

		return answerText;
	}.property('answerText'),
	actions: {
		accept: function() {
			this.sendAction('accept', this.get('invitation'));
			this.closeDrop();
		},
		decline: function() {
			this.sendAction('decline', this.get('invitation'));
			this.closeDrop();
		}
	}
});