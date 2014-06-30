import { test, moduleForModel } from 'ember-qunit';

moduleForModel('invitation', 'Invitation', {
	needs: ['model:user', 'model:sniffy', 'model:comment', 'enum:answer']
});

test('it exists and has some defaults', function() {
	// expect(2);

	var model = this.subject();
	var Answer = this.container.resolve('enum:answer');
	
	ok(model);

	equal(model.get('answer'), Answer.IGNORE, 'Invitation should an "IGNORE" answer by default.');
	
	ok(model.get('createdOn'), 'Invitation createdOn "date" by default.');
});


test('an invitation can have different answer', function() {
	// expect(1);

	var store = this.store();
	var Answer = this.container.resolve('enum:answer');
	var karl;
	var francis;

	Ember.run(function() {
		karl = store.createRecord('user', {
			firstName: 'Karl',
			lastName: 'Guillotte'
		});
	});
	var model = this.subject({
		invitee: karl
	});

	ok(model);

	equal(model.get('answerText'), 'Karl is ignoring', 'Karl should be ignoring.');

	Ember.run(function() {
		model.set('answer', Answer.ACCEPT);
	});

	equal(model.get('answerText'), 'Karl is going', 'Karl should be going.');

	Ember.run(function() {
		model.set('answer', Answer.DECLINE);
	});

	equal(model.get('answerText'), 'Karl is not going', 'Karl should not be going.');






	// TODO We should not need to do that...another invitation should be created instead. 
	// Ember.run(function() {
	// 	francis = store.createRecord('user', {
	// 		firstName: 'Francis',
	// 		lastName: 'Guillotte'
	// 	});
	// 	model.set('invitee', invitee);
	// });

});
