import Ember from 'ember';

export default Ember.Object.extend({
    pulse: Ember.computed.readOnly('_pulse'),
    elapse: function() {
        return this.get('_pulse') * this.frequency;
    }.property('_pulse'),
    frequency: 250,
    tick: function () {
        this._timer = Ember.run.later(this, this.incrementProperty, '_pulse', this.frequency);
    }.observes('_pulse').on('init'),
    cancel: function() {
        Ember.run.cancel(this._timer);
    }.on('destroy'),
    _pulse: 0,
    _timer: null
});