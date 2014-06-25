import Ember from 'ember';

var prefix = 'icon';

export default Ember.Component.extend({
	tagName: 'sniffy-icon',
	classNames: [prefix],
	classNameBindings: ['iconClassName', 'size'],
	type: Ember.required(String),
	size: null,
	iconClassName: function() {
		return '%@-%@'.fmt(prefix, this.get('type'));
	}.property('type'),
	sendDefaultAction: function() {
		this.sendAction('action');
	}.on('click', 'tapEnd')
});
