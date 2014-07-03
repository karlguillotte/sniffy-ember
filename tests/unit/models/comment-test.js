import { test, moduleForModel } from 'ember-qunit';

moduleForModel('comment', 'Comment', {
	needs: ['model:sniffy', 'model:user', 'model:invitation']
});

test('it exists and has some defaults', function() {
	var model = this.subject();
	var store = this.store();

	ok(model, 'a comment has been created');

	ok(model.get('createdOn'), 'a comment has a date');

});
