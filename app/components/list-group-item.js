export default Ember.Component.extend({
	tagName: 'list-group-item',
	attributeBindings: ['role'],
	role: 'option',
	isSelected: function() {
		var selectedItems = this.get('selectedItems');
		var item = this.get('item');

		if (!Ember.isArray(selectedItems))
			return false;

		return selectedItems.contains(item);
	}.property('item', 'selectedItems.[]'),
	item: Ember.required(),
	selectedItems: Ember.computed.alias('parentView.selectedItems'),
	toggleSelection: function() {
		var selectedItems = this.get('selectedItems');
		var item = this.get('item');

		if (Ember.isArray(selectedItems)) {
			if (selectedItems.contains(item)) {
				selectedItems.removeObject(item);
			} else {
				selectedItems.pushObject(item);
			}
		}

		this.sendAction('toggle', item);
	}.on('click')
});
