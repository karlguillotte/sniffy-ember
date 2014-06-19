import Ember from 'ember';

var alias = Ember.computed.alias;
var required = Ember.required;

export default Ember.Component.extend({
	tagName: 'sniffy-user',
	attributeBindings: ['title'],
	classNameBindings: ['size'],
	user: required('user'),
	title: alias('user.name'),
	size: null
});