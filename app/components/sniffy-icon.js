import Ember from 'ember';

// var prefix = 'licon';
// var prefix = 'glyphicon';
var prefix = 'icon';

export default Ember.Component.extend({
	tagName: 'sniffy-icon',
	classNames: [prefix],
	classNameBindings: ['iconClassName'],
	type: Ember.required(String),
	iconClassName: function() {
		return '%@-%@'.fmt(prefix, this.get('type'));
	}.property('type'),
	sendDefaultAction: function() {
		this.sendAction('action');
	}.on('click')
});
