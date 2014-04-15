import AnswerTransform from '../transforms/answer';

var answerTransform = AnswerTransform.create();

export default Ember.Route.extend({
	model: function() {
		this.store.push('user', {
			id: 1,
			handle: 'BB',
			name: 'Blair Bodnar',
			hostedSniffies: [1]
		});
		this.store.push('user', {
			id: 2,
			handle: 'KG',
			name: 'Karl Guillotte'
		});
		this.store.push('user', {
			id: 3,
			handle: 'GM',
			name: 'Grant Minor'
		});
		this.store.push('user', {
			id: 4,
			handle: 'JA',
			name: 'Jordan Ardanaz'
		});
		this.store.push('invitation', {
			id: 1,
			answer: answerTransform.deserialize('accept'),
			sniffy: 1,
			user: 2
		});
		this.store.push('invitation', {
			id: 2,
			sniffy: 1,
			user: 3
		});
		this.store.push('invitation', {
			id: 3,
			answer: answerTransform.deserialize('decline'),
			sniffy: 1,
			user: 4
		});
		this.store.push('sniffy', {
			id: 1,
			when: new Date(2014, 3, 8, 19),
			where: 'Six Acres',
			what: 'beer',
			host: 1,
			invitations: [1, 2, 3]
		});
		this.store.push('sniffy', {
			id: 2,
			when: new Date(2014, 3, 15, 19),
			where: '33 Acres',
			what: 'Beer',
			host: 1,
			invitations: [1, 2, 3]
		});		
	}
});