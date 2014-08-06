import Ember from 'ember';

var slice = Array.prototype.slice;
var isArray = Ember.isArray;

export default function computeHandle() {
	var names;
	var letters;
	var handle;

	if (arguments.length === 0) {
		return null;
	}

	if (isArray(arguments[0])) {
		names = arguments[0];
	} else {
		names = slice.call(arguments);
	}
		
	letters = names
				.compact()
				.map(String)
				.invoke('trim')
				.compact()
				.invoke('charAt');
	handle = letters
				.join('')
				.toUpperCase();

	return handle || null;
}
