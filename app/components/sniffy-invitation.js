import Ember from 'ember';
import Answer from '../enums/answer';

var alias = Ember.computed.alias;

export default Ember.Component.extend({
	tagName: 'sniffy-invitation',
	classNameBindings: ['answer'],
	invitation: null,
	status: alias('invitation.status'),
	answer: alias('invitation.answer'),
	user: alias('invitation.user'),
	showAnswer: function() {
		var status = this.get('status');
		var answer = this.get('answer');
		var invitee = this.get('user');
		var user = this.get('user');
		var template = 'template';
		var context = {
			status: status
		};

		if (user === invitee && Answer.IGNORE === answer) {
			template = 'template';

		this.showPopover(template, context);
		}
	}.on('click'),
	showPopover: function() {
		// this.$().show();
	},
	hidePopover: function() {
		// this.$().hide();
	},
	actions: {
		accept: function() {
			this.send('accept', this.get('invitation'));
			this.hidePopover();
		},
		decline: function() {
			this.send('decline', this.get('invitation'));
			this.hidePopover();
		}
	}
});