import Ember from 'ember';
import ClockService from '../services/clock';
import DateFormatterService from '../services/date-formatter';

var DEFAULT = DateFormatterService.DEFAULT;

export default Ember.Component.extend({
	tagName: 'time',
	attributeBindings: ['time', 'title'],
	format: 'LL',
	type: null,
	time: function() {
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
	}.observes('clock.pulse', 'time'),
	text: function() {
		var type = this.get('type');
		var formatter = DateFormatterService.forType(type);
		var time = this.get('time');
		var format = this.get('format');

		return formatter.format(time, format);
	}.property('time', 'format', 'type'),
	title: function() {
		return DEFAULT.format(this.time);
	}.property('time')
});