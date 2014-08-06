import Ember from 'ember';
import cpNow from 'sniffy/utils/cp-now';

module('cpNow');

var When = Ember.Object.extend({
	time: cpNow()
});

test('it works', function() {
	var when = When.create();
	var time = when.get('time');

  	ok(time, 'time is %@'.fmt(time));

	// return new Ember.RSVP.Promise(function(res, rej) {
	// 	Ember.run.later(function() {
	// 		notEqual(time, when.get('time'), 'now cp macro is always volatile');
	// 		res();
	// 	}, 250);
	// });
});
