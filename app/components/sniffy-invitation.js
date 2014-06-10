import Answer from '../enums/answer';

export default Ember.Component.extend({
	tagName: 'sniffy-invitation',
	classNameBindings: ['invitation.answer.name'],
	invitation: Ember.required('invitation'),
	showAnswer: function() {
		var status = this.get('invitation.status');
		var answer = this.get('invitation.answer');
		var invitee = this.get('user');
		var user = this.get('session.user');
		var template = 'template';
		var context = {
			status: status
		};

		if (user === invitee && Answer.IGNORE === answer) {
			template = 'template';

		this.showPopover(template, context);
		}
	}.on('click'),
	showPopover: function(template, context) {
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