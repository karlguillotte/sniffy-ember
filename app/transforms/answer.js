var AnswerTransform = DS.Transform.extend({
  deserialize: function(serialized) {
  	serialized = serialized || 'ignore';

    return Answer[serialized.toUpperCase()];
  },
  serialize: function(deserialized) {
    return deserialized.name;
  }
});


var Answer = Ember.Object.extend({
	name: Ember.required(String),
	text: function() {
		return this.get('name').loc();
	}.property('name').readOnly()
});

Answer.reopenClass({
	ACCEPT: Answer.create({
		name: function() {
			return 'accept';
		}.property().readOnly()
	}),
	DECLINE: Answer.create({
		name: function() {
			return 'decline';
		}.property().readOnly()
	}),
	IGNORE: Answer.create({
		name: function() {
			return 'ignore';
		}.property().readOnly()
	})
});

export default AnswerTransform;