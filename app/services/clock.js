import Ember from 'ember';

export default Ember.Object.extend({
    pulse: Ember.computed.readOnly('_seconds'),
    frequency: 250,
    tick: function () {
        this._timer = Ember.run.later(this, function () {
            this.incrementProperty('_seconds', this.frequency);
        }, this.frequency);
    }.observes('_seconds').on('init'),
    cancel: function() {
        Ember.run.cancel(this._timer);
    }.on('destroy'),
    _seconds: 0,
    _timer: null
});