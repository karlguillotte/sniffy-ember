import Ember from 'ember';

var alias = Ember.computed.alias;

export default Ember.Component.extend({
	tagName: 'sniffy-comment',
	comment: null,
	body: alias('comment.body'),
	user: alias('comment.user')
});