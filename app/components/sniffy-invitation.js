import Ember from 'ember';
import Answer from '../enums/answer';

var alias = Ember.computed.alias;

var _Drop = Drop.createContext({
	classPrefix: 'drop'
});

var DropMixin = Ember.Mixin.create({
	createDrop: function(options) {
		this.drop = new _Drop({
			content: 'Welcome Drop.js',
			classes: 'drop-theme-arrows-bounce-dark drop-hero',
			target: this.get('element'),
			position: 'top center',
			openOn: 'hover'
		});
	}.on('didInsertElement'),
	openDrop: function(templateName) {
		var template = this.container.lookup('template:' + templateName);
		var drop = this.get('drop');

		if (template)
			drop.content = template(this);

		drop.open();
	},
	closeDrop: function() {
		this.get('drop').close();
	}	
});

export default Ember.Component.extend(DropMixin, {
	tagName: 'sniffy-invitation',
	classNameBindings: ['answer'],
	invitation: null,
	status: alias('invitation.status'),
	answer: alias('invitation.answer'),
	user: alias('invitation.user'),
	showAnswer: function() {
		if (this.get('drop').isOpened()) {
			this.closeDrop();
			return;
		}

		var status = this.get('status');
		var answer = this.get('answer');
		var invitee = this.get('user');
		var user = this.get('user');
		var templateName = 'template';

		if (user === invitee && Answer.IGNORE === answer)
			templateName = 'template';

		this.openDrop(templateName);
	}.on('click'),
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