/* global moment */

import Ember from 'ember';

var Formatter = Ember.Object.extend({
	format: Ember.required(Function)
});
var m = moment;

Formatter.reopenClass({
	RELATIVE: Formatter.create({
		format: function(value) {
			return m(value).fromNow();
		}
	}),
	CALENDAR: Formatter.create({
		format: function(value) {
			return m(value).calendar();
		}
	}),
	DEFAULT: Formatter.create({
		format: function(value, format) {
			return m(value).format(format);
		}
	}),
	create: function() {
		throw 'Please use singletons [RELATIVE, CALENDAR, DEFAULT] or use function forType.';
	},
	forType: function(type) {
		if (typeof type !== 'string') {
			return this.DEFAULT;
		}

		return this[type.toUpperCase()] || this.DEFAULT;
	}
});


export default Formatter;