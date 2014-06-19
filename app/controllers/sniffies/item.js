import Ember from 'ember';

export default Ember.ObjectController.extend({
	actions: {
		addComment: function(comment) {
			var sniffy = this.get('content');

			sniffy.addComment(comment);
			sniffy.save();
		}
	}

});
