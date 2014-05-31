var templateExists = function(container, templateName) {
	return !!container.lookup('template:' + templateName);
};

export default {
	name: 'route',
	initialize: function() {
		
		Ember.Route.reopen({
			headerTemplateName: null,
			renderHeaderTemplate: function() {
				var templateName = this.headerTemplateName || this.routeName + '.header';
				var container = this.container;

				if (!templateExists(container, templateName)) {
					templateName = templateName.replace('.index', '');
				}

				if (templateExists(container, templateName)) {
					this.render(templateName, {
						outlet: 'header',
						into: 'application'
					});
				}
			},
			renderTemplate: function() {
				this._super();
				this.renderHeaderTemplate();
			}
		});

		Ember.Route.reopen({
			setupController: function(controller, model) {
				this._super.apply(this, arguments);
				
				this.setApplicationTitle();
			},
			setApplicationTitle: function() {
				var title = this.controller.title;

				if (!title)
					return;

				this.controllerFor('application').set('title', title.loc());
			}
		});
	}
};