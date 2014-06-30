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
	equal(model.get('time'), 0);

	Ember.run(function() {
		invitees = model.get('invitees');
		invitations = model.get('invitations');
		comments = model.get('comments');
	});
	
	equal(invitees.length, 0);
	equal(invitations.get('length'), 0);
	equal(comments.get('length'), 0);

});


test('comments can be added', function() {
	var model = this.subject();

	Ember.run(function() {
		model.addComment('Great idea');
	});

	equal(model.get('comments.length'), 1);

	Ember.run(function() {
		model.addComment('Can we change the date and time?');
	});

	equal(model.get('comments.length'), 2);

});

test('invitation(s) can be added', function() {
	var model = this.subject();
	var store = this.store();
	var francis;
	var blair;

	Ember.run(function() {
		francis = store.createRecord('user', {
			firstName: 'Francis',
			lastName: 'Guillotte'
		});
		model.addInvitation(francis);
	});

	equal(model.get('invitations.length'), 1);

	Ember.run(function() {
		blair = store.createRecord('user', {
			firstName: 'Blair',
			lastName: 'Bodnar'
		});
		model.addInvitation(blair);
	});

	equal(model.get('invitations.length'), 2);

});

test('invitation(s) can be added at once', function() {

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

// TODO This is not working!!!
// test('only one invitation can be added for one user.', function() {

// 	var model = this.subject();
// 	var store = this.store();
// 	var francis;
// 	var blair;
// 	var promise;

// 	Ember.run(function() {
// 		francis = store.createRecord('user', {
// 			firstName: 'Francis',
// 			lastName: 'Guillotte'
// 		});
// 		blair = store.createRecord('user', {
// 			firstName: 'Blair',
// 			lastName: 'Bodnar'
// 		});
// 		promise = model.addInvitations(blair, francis, francis).then(function() {
// 			equal(model.get('invitations.length'), 2, 'invitations can be added using parameters.');
// 		});
// 	});

// 	return promise;
// });



