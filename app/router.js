var Router = Ember.Router.extend({
    location: ENV.locationType
});

Router.map(function() {
    this.resource('sniffies', function() {
        this.resource('new', function() {
            this.resource('new.what', { path: '/what' }, function() {
                this.route('create', { path: '' });
            });
            this.resource('new.where', { path: '/where' }, function() {
                this.route('create', { path: '' });
            });
            this.resource('new.who', { path: '/who' }, function() {
                this.route('create', { path: '' });
            });
        });   
        this.route('previous');
    });
    this.route('settings');
});

export default Router;
