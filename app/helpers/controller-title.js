import Ember from 'ember';

export default Ember.Handlebars.makeBoundHelper(function(value) {
	var controller = this.container.lookup('controller:' + value);
	var title = controller.get('title');

	if (!title) {
		controller = this.container.lookup('controller:' + value + '.index');
		title = controller.get('title');
	}

	return title.loc();
});
