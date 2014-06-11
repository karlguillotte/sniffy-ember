export default {
	name: 'route-render-header',
	initialize: function() {
		
		// Set title
		Ember.Route.reopen({
			setupController: function() {
				this._super.apply(this, arguments);
				
				this.setApplicationTitle();
			},
			setApplicationTitle: function(title) {
				title = title || this.controller.title;

				if (!title)
					return;

				this.controllerFor('application').set('title', title.loc());
			}
		});
	}
};