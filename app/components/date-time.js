import Ember from 'ember';
import ClockService from '../services/clock';
import DateFormatterService from '../services/date-formatter';

var DEFAULT = DateFormatterService.DEFAULT;

export default Ember.Component.extend({
	tagName: 'time',
	attributeBindings: ['title:datetime', 'title'],
	format: 'LL',
	type: null,
	value: function() {
		return new Date();
	}.property(),
	autoUpdate: Ember.computed.equal('type', 'relative'),
	autoUpdateDelay: 5000,
	clock: function() {
		if (!this.get('autoUpdate'))
			return null;

		return ClockService.create({
			frequency: this.get('autoUpdateDelay')
		});
	}.property('autoUpdate', 'autoUpdateDelay'),
	update: function() {
		this.rerender();
	}.observes('clock.pulse', 'value'),
	text: function() {
		var type = this.get('type');
		var formatter = DateFormatterService.forType(type);
		var value = this.get('value');
		var format = this.get('format');

		return formatter.format(value, format);
	}.property('value', 'format', 'type'),
	title: function() {
		return DEFAULT.format(this.get('value'));
	}.property('value')
});