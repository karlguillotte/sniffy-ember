import Ember from 'ember';

var Router = Ember.Router.extend({
  location: SniffyENV.locationType
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
    this.resource('settings', function() {
        this.route('calendar');
        this.route('account');
        this.route('friends');
    });
});

export default Router;
