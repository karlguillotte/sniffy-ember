import Ember from 'ember';

var computed = Ember.computed;
var now = Date.now;

export default function cpNow() {
	return computed(now).volatile();
}
