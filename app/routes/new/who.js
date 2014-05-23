export default Ember.Route.extend({
	templateName: 'list-group',
	model: function() {
		var user = this.get('session.user');
		
		return this.store.find('user').then(function(users) {
			return users.removeObject(user);
		});
	}
});
