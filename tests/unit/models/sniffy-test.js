import Ember from 'ember';
import { test, moduleForModel } from 'ember-qunit';

moduleForModel('sniffy', 'Sniffy', {
	needs: ['model:user', 'model:invitation', 'model:comment']
});

test('it exists and has some defaults', function() {
	var properties = {
		what: 'Bike ride',
		where: 'Stanley Park',
		when: new Date(0)
	};
	var model = this.subject(properties);
	var invitees;
	var invitations;
	var comments;

	ok(model);

	propEqual(model.getProperties('what', 'where', 'when'), properties);

	strictEqual(model.get('isActive'), false);
	strictEqual(model.get('time'), 0);

	Ember.run(function() {
		invitees = model.get('invitees');
		invitations = model.get('invitations');
		comments = model.get('comments');
	});
	
	strictEqual(invitees.length, 0);
	strictEqual(invitations.get('length'), 0);
	strictEqual(comments.get('length'), 0);

});


test('comments can be added', function() {
	var model = this.subject();
	var store = this.store();
	var francis;
	var comment;
	var promise;
	var session;

	Ember.run(function() {
		francis = store.createRecord('user', {
			firstName: 'Francis',
			lastName: 'Guillotte'
		});
		store.set('session', {
			user: francis
		});
	});

	Ember.run(function() {
		comment = model.addComment('Great idea');
	});

	equal(model.get('comments.length'), 1);
	equal(comment.get('body'), 'Great idea');

	Ember.run(function() {
		comment = model.addComment('Can we change the date and time?');
	});

	equal(model.get('comments.length'), 2);

	ok(comment.get('createdOn'), 'Added comment has a createdOn attribute.');

	promise = comment.get('user').then(function(user) {
		strictEqual(user, francis, "The comment user is the same as the session's user");
		
		return comment.get('sniffy');
	}).then(function(sniffy) {
		strictEqual(sniffy, model, 'Added comment has a relationship with the sniffy used to create it.');
	});

	return promise;
});

test('invitation(s) can be added', function() {
	var model = this.subject();
	var store = this.store();
	var francis;
	var blair;
	var invitation;

	Ember.run(function() {
		francis = store.createRecord('user', {
			firstName: 'Francis',
			lastName: 'Guillotte'
		});
	});
	Ember.run(function() {
		invitation = model.addInvitation(francis);
	});

	equal(model.get('invitations.length'), 1);

	Ember.run(function() {
		blair = store.createRecord('user', {
			firstName: 'Blair',
			lastName: 'Bodnar'
		});
		model.addInvitation(blair);
	});

	ok(model.get('createdOn'), 'An invitation has an attribute "createdOn" of type Date.');
	equal(model.get('invitations.length'), 2);

});

test('invitation(s) can be added at once using parameters', function() {

	var model = this.subject();
	var store = this.store();
	var francis;
	var blair;
	var promise;

	Ember.run(function() {
		francis = store.createRecord('user', {
			firstName: 'Francis',
			lastName: 'Guillotte'
		});
		blair = store.createRecord('user', {
			firstName: 'Blair',
			lastName: 'Bodnar'
		});
		promise = model.addInvitations(blair, francis).then(function() {
			equal(model.get('invitations.length'), 2, 'invitations can be added using parameters.');
		});
	});

	return promise;
});

test('invitation(s) can be added at once using array as first parameter', function() {

	var model = this.subject();
	var store = this.store();
	var francis;
	var blair;
	var promise;

	Ember.run(function() {
		francis = store.createRecord('user', {
			firstName: 'Francis',
			lastName: 'Guillotte'
		});
		blair = store.createRecord('user', {
			firstName: 'Blair',
			lastName: 'Bodnar'
		});
		promise = model.addInvitations([blair, francis]).then(function() {
			equal(model.get('invitations.length'), 2, 'invitations can be added.');
		});
	});

	return promise;
});

test('only one invitation can be added per user.', function() {

	var model = this.subject();
	var store = this.store();
	var francis;
	var blair;
	var promise;

	Ember.run(function() {
		francis = store.createRecord('user', {
			firstName: 'Francis',
			lastName: 'Guillotte'
		});
		blair = store.createRecord('user', {
			firstName: 'Blair',
			lastName: 'Bodnar'
		});
		promise = model.addInvitations(blair, francis, francis).then(function() {
			equal(model.get('invitations.length'), 2, 'only one invitation per invitee is created.');
		}).then(function() {
			return model.addInvitation(blair);
		}).then(function() {
			equal(model.get('invitations.length'), 2, 'only one invitation per invitee is created.');
		});
	});

	return promise;
});


