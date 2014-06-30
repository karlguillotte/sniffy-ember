import Answer from '../enums/answer';
import Ember from 'ember';

export default Ember.Controller.extend({
	title: null,
	updateDocumentTitle: function() {
		document.title = this.get('title');
	}.observes('title'),
	actions: {
		acceptInvitation: function(invitation) {
			invitation.set('answer', Answer.ACCEPT);
			invitation.save();
		},
		declineInvitation: function(invitation) {
			invitation.set('answer', Answer.DECLINE);
			invitation.save();
		}
	}
});