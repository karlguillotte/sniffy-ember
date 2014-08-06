import Ember from 'ember';

var tryInvoke = Ember.tryInvoke;
var computed = Ember.computed;

export default function cpTryInvoke(dependentKey, methodName, args) {
	Ember.assert('cpTryInvoke requires at least two parameters. A dependent key and a method name.', arguments.length > 1);

	return computed(dependentKey, function() {
		var object = this.get(dependentKey);

		return tryInvoke(object, methodName, args);
	});
}
