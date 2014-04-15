import Answer from '../utils/answer';

export default DS.Transform.extend({
  deserialize: function(serialized) {
  	serialized = serialized || 'ignore';

    return Answer[serialized.toUpperCase()];
  },
  serialize: function(deserialized) {
    return deserialized.name;
  }
});