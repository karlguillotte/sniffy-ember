/* global moment */

import DS from 'ember-data';
import Ember from 'ember';

var attr = DS.attr;
var hasMany = DS.hasMany;
var belongsTo = DS.belongsTo;
var isArray = Ember.isArray;
var map = Ember.EnumerableUtils.map;

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
	host: belongsTo('user', { async: true }),
	invitations: hasMany('invitation', { embedded: true }),
	comments: hasMany('comment', { embedded: true }),
	
	// Computed properties
	invitees: Ember.computed.mapBy('invitations', 'invitee'),
	isActive: function() {
		return Date.now() < this.get('time');
	}.property('time').volatile(),
	time: function() {
		var when = this.get('when');

		if (when) {
			return when.getTime();
		}

	}.property('when').readOnly(),

	// Method
	addComment: function(body) {
		var comments = this.get('comments');
		var comment = this.store.createRecord('comment', {
			sniffy: this, 
			user: this.store.get('session.user'),
			body: body
		});

		return comments.addObject(comment);
	},
	addInvitation: function(invitee) {
		var invitations = this.get('invitations');

		return Ember.RSVP.all(invitations.getEach('invitee')).then(function(invitees) {

			if (invitees.getEach('content').contains(invitee)) {
				return;
			}
			
			var invitation = this.store.createRecord('invitation', {
				sniffy: this,
				invitee: invitee
			});
		
			return invitations.addObject(invitation);
		}.bind(this));
	},
	addInvitations: function(invitees) {
		
		if (!isArray(invitees)) {
			invitees = arguments;
		}

		return Ember.RSVP.all(map(invitees, this.addInvitation, this));
	},
	setHost: function() {
		var host = this.get('store.session.user');

		this.set('host', host);
	}.on('didCreate')
});