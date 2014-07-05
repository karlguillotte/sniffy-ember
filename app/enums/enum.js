import Ember from 'ember';
import Constant from './constant';

var forEach = Ember.EnumerableUtils.forEach;

var Enum = Ember.Object.extend({
	_setConstantsMap: function() {
		this._contants = Ember.Map.create();
	}.on('init'),
	length: Ember.computed.readOnly('_contants.length'),
	values: function() {
		var constants = [];
		
		this._contants.forEach(function(key, value) {
			constants.push(value);
		});

		return constants;
	}.property(),
	createConstant: function(name) {
		if (!name) {
			throw Error('Constant required a name.');
		}

		if (typeof name !== 'string') {
			throw Error('Constant required a name.');
		}

		var constant = Constant.createWithMixins({
			name: function() {
				return name;
			}.property().readOnly()
		});

		this[name.toUpperCase()] = constant;

		this._contants.set(name, constant);

		return constant;
	}
});

Enum.reopenClass({
	create: function() {
		var enumeration = this._super();
		
		forEach(arguments, enumeration.createConstant, enumeration);

		return enumeration;
	}
});

export default Enum;
