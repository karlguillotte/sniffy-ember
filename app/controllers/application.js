export default Ember.Controller.extend({
	title: null,
	updateDocumentTitle: function() {
		document.title = this.get('title');
	}.observes('title')
});