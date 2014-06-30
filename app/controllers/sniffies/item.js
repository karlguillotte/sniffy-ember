import Ember from 'ember';

export default Ember.ObjectController.extend({
	newComment: null,
	resetNewComment: function() {
		this.set('newComment', null);
	},
	actions: {
		addComment: function() {
			var sniffy = this.get('content');
			var newComment = this.get('newComment');
			var reset = this.resetNewComment.bind(this);

			sniffy.addComment(newComment);
			sniffy.save().then(reset);
		}
	}

});
