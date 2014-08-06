import { test, moduleForModel } from 'ember-qunit';
import Ember from 'ember';

moduleForModel('user', 'User', {
	needs: ['model:invitation', 'model:sniffy']
});

var name = {
	firstName: 'Karl',
	lastName: 'Guillotte'
};

test('it exists and has some defaults', function() {
	var model = this.subject(name);

	ok(model);

	equal(model.get('name'), '%@ %@'.fmt(name.firstName, name.lastName));
	equal(model.get('handle'), name.firstName.charAt(0).toUpperCase() + name.lastName.charAt(0).toUpperCase());

	Ember.run(function() {
		model.set('name', 'Francis Guillotte');
	});

	propEqual(model.getProperties('firstName', 'lastName'), {
		firstName: 'Francis',
		lastName: 'Guillotte'
	});

	equal(model.get('handle'), 'KG');

	Ember.run(function() {
		model.updateHandle();
	});

	equal(model.get('handle'), 'FG');

});

