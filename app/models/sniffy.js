/* global moment */

import DS from 'ember-data';
import Ember from 'ember';

var attr = DS.attr;
var hasMany = DS.hasMany;
var belongsTo = DS.belongsTo;

export default DS.Model.extend({

	// Attributes
	what: attr('string'),
	where: attr('string'),
	when: attr('date'),
	createdOn: attr('date', {
		defaultValue: function() {
			return moment.utc().toDate();
		}
	}),

	// Relationships
	invitations: hasMany('invitation', { embedded: true }),
	host: belongsTo('user', {
		// TODO Look at the documentation: not sure there is defaultValue for relationship
		// If not available, it needs to be done on creation...
		defaultValue: function() {
			return this.store.get('session:user');
		}
	}),	
	comments: hasMany('comment', { embedded: true }),
	
	// Computed properties
	invitees: Ember.computed.mapBy('invitations', 'user'),
	isActive: function() {
		return Date.now() < this.get('time');
	}.property('time').volatile(),
	time: function() {
		var when = this.get('when');

		if (when)
			return when.getTime();

	}.property('when').readOnly(),

	// Method
	addComment: function(body) {
		var comments = this.get('comments');
		var comment = this.store.createRecord('comment', {
			sniffy: this, 
			user: this.store.get('session:user'),
			body: body
		});

		return comments.addObject(comment);
	},
	addInvitation: function(invitee) {
		var invitations = this.get('invitations');
		var invitation = this.store.createRecord('invitation', {
			sniffy: this,
			user: invitee
		});
		
		return invitations.addObject(invitation);
	},
	addInvitations: function(invitees) {
		return invitees.map(this.addInvitation, this);
	},
	setHost: function() {
		var host = this.store.get('session:user');

		this.set('host', host);
	}.on('something')
});