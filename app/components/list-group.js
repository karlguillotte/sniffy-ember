export default Ember.Component.extend({
	tagName: 'list-group',
	attributeBindings: ['role'],
	role: 'listbox',
	selectedItems: Ember.required(Array)
});
