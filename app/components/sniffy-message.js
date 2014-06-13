import Ember from 'ember';

export default Ember.Component.extend({
	tagName: 'sniffy-message',
	text: Ember.required(String)
});