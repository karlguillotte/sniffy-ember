export default {
	name: 'route-render-header',
	initialize: function() {
		
		// Render header template
		// Ember.Route.reopen({
		// 	headerTemplateName: null,
		// 	renderHeaderTemplate: function() {
		// 		var templateName = this.headerTemplateName || 'header';

		// 		this.render(templateName, {
		// 			outlet: 'header',
		// 			into: 'application',
		// 			controller: this.controller
		// 		});
		// 	},
		// 	renderTemplate: function() {
		// 		this._super();
		// 		this.renderHeaderTemplate();
		// 	}
		// });

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