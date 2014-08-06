import { test, moduleForModel } from 'ember-qunit';

moduleForModel('comment', 'Comment', {
	needs: ['model:sniffy', 'model:user', 'model:invitation']
});

test('it exists and has some defaults', function() {
	var store = this.store();
	// var session;
	// var user;
	// Ember.run(function() {
	// 	user = store.createRecord('user', {
	// 		firstName: 'Karl',
	// 		lastName: 'Guillotte'
	// 	});
	// 	session = Ember.Object.create({
	// 		user: user
	// 	});
	// });
	// Ember.run(function() {
	// 	store.set('session', session);
	// });
	var model = this.subject();

	ok(model, 'a comment has been created');

	ok(model.get('createdOn'), 'a comment has a date');
	// equal(model.get('user'), user, 'a comment has a date');

});
