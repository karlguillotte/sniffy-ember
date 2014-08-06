import Ember from 'ember';
import cpTryInvoke from 'sniffy/utils/cp-try-invoke';

var date = new Date();
var When = Ember.Object.extend({
	time: cpTryInvoke('when', 'getTime'),
	when: function() {
		return date;
	}.property(),
	string: cpTryInvoke('when', 'toString'),
	secondChar: cpTryInvoke('string', 'charAt', [1])
});

module('cpTryInvoke');

test('it works', function() {
	var when = When.create();

	equal(when.get('when').getTime(), date.getTime());
	equal(when.get('time'), date.getTime());
	equal(when.get('string'), date.toString());
	equal(when.get('secondChar'), date.toString().charAt(1));
});

test('it works even if the value is null or undefined.', function() {
	var when = When.create({
		when: null
	});

	strictEqual(when.get('time'), undefined);

	when = When.create({
		when: undefined
	});

	strictEqual(when.get('time'), undefined);
});

test('requires some parameters', function() {
	throws(cpTryInvoke);
	throws(function () { cpTryInvoke('when'); });
	ok(cpTryInvoke('when', 'toString'));
	ok(cpTryInvoke('when', 'toString', [1]));
});

