/* global moment */

import DS from 'ember-data';
import Ember from 'ember';
import cpNow from '../utils/cp-now';
import cpTryInvoke from '../utils/cp-try-invoke';

var m = moment;
var attr = DS.attr;
var hasMany = DS.hasMany;
var belongsTo = DS.belongsTo;
var isArray = Ember.isArray;
var map = Ember.EnumerableUtils.map;
var slice = Array.prototype.slice;
var cpLt = Ember.computed.lt;
var cpMapBy = Ember.computed.mapBy;

export default DS.Model.extend({

	// Attributes
	what: attr('string'),
	where: attr('string'),
	when: attr('date'),
	createdOn: attr('date', {
		defaultValue: function() {
			return m.utc().toDate();
		}
	}),

	// Relationships
	host: belongsTo('user', { async: true }),
	invitations: hasMany('invitation', { embedded: true }),
	comments: hasMany('comment', { embedded: true }),
	
	// Computed properties
	invitees: cpMapBy('invitations', 'invitee'),
	isActive: cpLt('_now', '_time').readOnly(),
	_now: cpNow(),
	_time: cpTryInvoke('when', 'getTime').readOnly(),

	// Methods
	addComment: function(body) {
		var comments = this.get('comments');
		var comment = this.store.createRecord('comment', {
			sniffy: this, 
			user: this.get('store.session.user'),
			body: body
		});

		comments.addObject(comment);

		return comment;
	},
	addInvitation: function(invitee) {
		return Ember.RSVP.all(this.get('invitees')).then(function(invitees) {

			if (invitees.contains(invitee)) {
				return;
			}
			
			var invitations = this.get('invitations');
			var invitation = this.store.createRecord('invitation', {
				sniffy: this,
				invitee: invitee
			});
		
			invitations.addObject(invitation);

			return invitation;
		}.bind(this));
	},
	addInvitations: function(invitees) {
		var invitations;

		if (!isArray(invitees)) {
			invitees = slice.apply(arguments);
		}

		invitees = invitees.uniq();
		invitations = map(invitees, this.addInvitation, this);

		return Ember.RSVP.all(invitations);
	},
	setHost: function() {
		var user = this.get('store.session.user');
		var host = this.getWithDefault('host', user);

		this.set('host', host);
	}.on('init')
});