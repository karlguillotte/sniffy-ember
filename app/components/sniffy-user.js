import Ember from 'ember';

export default Ember.Component.extend({
	tagName: 'sniffy-user',
	attributeBindings: ['title'],
	classNameBindings: ['size'],
	user: null,
	title: Ember.computed.readOnly('user.name'),
	size: null
});