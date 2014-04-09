var SniffiesRoute = Ember.Route.extend({
	model: function() {

		this.store.push('user', {
			id: 1,
			handle: 'BB',
			name: 'Blair Bodnar',
			hostedSniffy_ids: [1]
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
			answer: 'accept',
			sniffy_id: 1,
			user_id: 2
		});
		this.store.push('invitation', {
			id: 2,
			sniffy_id: 1,
			user_id: 3
		});
		this.store.push('invitation', {
			id: 3,
			answer: 'decline',
			sniffy_id: 1,
			user_id: 4
		});

		this.store.push('sniffy', {
			id: 1,
			when: new Date(2014, 3, 8, 19),
			where: 'Six Acres',
			what: 'beer',
			host_id: 1,
			invitation_ids: [1, 2, 3]
		});

		return this.store.all('sniffy');
	} 
});

export default SniffiesRoute;
