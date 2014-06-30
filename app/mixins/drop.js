/* global Drop */

import Ember from 'ember';

var merge = Ember.merge;
var _Drop = Drop.createContext({
	classPrefix: 'drop'
});

export default Ember.Mixin.create({
	dropOptions: {},
	dropContent: null,
	createDrop: function() {
		var options = merge(this.get('dropOptions'), {
			classes: 'drop-theme-arrows-bounce-dark drop-hero',
			content: this.get('dropContent'),
			target: this.get('element'),
			position: 'top center',
			openOn: 'hover'
		});
		
		this.drop = new _Drop(options);
	}.on('didInsertElement'),
	destroyDrop: function() {
		this.drop.destroy();
	}.on('willDestroyElement'),
	setDropContent: function() {
		this.drop.content = this.get('dropContent');
		this.drop.position();
	}.observes('dropContent'),
	openDrop: function() {
		this.drop.open();
	},
	closeDrop: function() {
		this.drop.close();
	}	
});
