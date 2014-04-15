var Answer = Ember.Object.extend({
	name: Ember.required(String),
	text: function() {
		return this.get('name').loc();
	}.property('name').readOnly(),
	toString: function() {
		return this.get('text');
	}
});

Answer.reopenClass({
	create: function(name) {
		return Answer.createWithMixins({
			name: function() {
				return name;
			}.property().readOnly()
		});
	}	
});

Answer.reopenClass({
	ACCEPT: Answer.create('accept'),
	DECLINE: Answer.create('decline'),
	IGNORE: Answer.create('ignore')
});

Answer.reopenClass({
	create: function() {
		throw new Error('Answers can not be created. They are singletons.');
	}	
});

export default Answer;