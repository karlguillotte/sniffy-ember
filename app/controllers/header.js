export default Ember.Controller.extend({
	needs: ['application'],
	title: Ember.computed.alias('controllers.application.title'),
	displayDots: Ember.computed.match('controllers.application.currentRouteName', /settings.index|sniffies.index|sniffies.previous/),
	parent: null,
	action: null
});