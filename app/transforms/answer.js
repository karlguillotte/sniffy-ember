import DS from 'ember-data';
import Answer from '../enums/answer';

export default DS.Transform.extend({
	deserialize: function(serialized) {
		serialized = serialized || 'ignore';
debugger
		return Answer[serialized.toUpperCase()];
	},
	serialize: function(deserialized) {
debugger
		return deserialized.get('name').toLowerCase();
	}
});