import DS from 'ember-data';
import Answer from '../enums/answer';

export default DS.Transform.extend({
  deserialize: function(serialized) {
  	serialized = serialized || 'ignore';

    return Answer[serialized.toUpperCase()];
  },
  serialize: function(deserialized) {
    return deserialized.get('name').toLowerCase();
  }
});