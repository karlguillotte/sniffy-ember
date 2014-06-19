import Ember from 'ember';

var alias = Ember.computed.alias;

export default Ember.Component.extend({
	tagName: 'sniffy-element',
	sniffy: null,
	host: alias('sniffy.host'),
	what: alias('sniffy.what'),
	where: alias('sniffy.where'),
	when: alias('sniffy.when'),
	invitations: alias('sniffy.invitations'),
	comments: alias('sniffy.comments'),
	whatAndWhere: function() {
		var what = this.get('what');
		var where = this.get('where');
		var string = '%@';

		if (where) {
			string = '%@ @ %@';
		}
		
		return string.fmt(what, where);
	}.property('what', 'where'),
	displayComments: false,
	comment: null,
	actions: {
		toggleComments: function() {
			this.toggleProperty('displayComments');
		},
		addComment: function() {
			var comment = this.get('comment');

			this.sendAction('addComment', comment);
		}
	}
});