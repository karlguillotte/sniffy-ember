import Ember from 'ember';
import { test, moduleFor } from 'ember-qunit';

moduleFor('service:clock', 'ClockService');

var frequency = 250;

test('it exists', function() {
  var service = this.subject({
  	frequency: frequency
  });
  
  ok(service, 'ClockService exists');
  equal(service.get('pulse'), 0, 'ClockService pulse starts at 0');

  return new Ember.RSVP.Promise(function(res, rej) {
  	Ember.run.later(service, function() {
  		equal(this.get('pulse'), 1, 'ClockService pulse is 1 after the frequency pass');
	  	Ember.run.later(this, function() {
	  		equal(this.get('pulse'), 2, 'ClockService pulse is 2 after two frequencies pass');
	  		res();
	  	}, frequency);
  	}, frequency);
  });
});
