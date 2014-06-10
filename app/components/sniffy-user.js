export default Ember.Component.extend({
	tagName: 'sniffy-user',
	attributeBindings: ['title'],
	classNameBindings: ['size'],
	user: Ember.required('user'),
	title: Ember.computed.alias('user.name'),
	size: null
});