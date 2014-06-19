import Ember from 'ember';
import DS from 'ember-data';
import Answer from '../enums/answer';

var attr = DS.attr;
var belongsTo = DS.belongsTo;

var status = Ember.Map.create();
status.set(Answer.ACCEPT, '%@ is going');
status.set(Answer.DECLINE, '%@ is not going');
status.set(Answer.IGNORE, '%@ is ignoring');

var selfStatus = Ember.Map.create();
selfStatus.set(Answer.ACCEPT, 'You are going');
selfStatus.set(Answer.DECLINE, 'You are not going');
selfStatus.set(Answer.IGNORE, 'You are ignoring');

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
	user: belongsTo('user', { async: true }),
	sniffy: belongsTo('sniffy', { async: true }),

	// Computed Properties
	status: function() {
		var answer = this.get('answer');
		var invitee = this.get('user');
		var user = this.get('store.session.user');

		if (user === invitee) {
			return selfStatus.get(answer);
		}

		return status.get(answer);
	}.property('answer', 'user', 'store.session.user'),

	// Method
	setUser: function() {
		var user = this.store.get('session:user');

		this.set('user', user);
		// TODO Make sure this event exists
	}.on('didCreate')
});