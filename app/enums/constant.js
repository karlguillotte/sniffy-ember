import Ember from 'ember';

export default Ember.Object.extend({
	name: Ember.required(String),
	text: function() {
		return this.get('name').loc();
	}.property('name').readOnly(),
	toString: function() {
		return this.get('text');
	}
});