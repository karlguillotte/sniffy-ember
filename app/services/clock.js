import Ember from 'ember';

export default Ember.Object.extend({
    pulse: Ember.computed.readOnly('_milliseconds'),
    frequency: 250,
    tick: function () {
        this._timer = Ember.run.later(this, function () {
            this.incrementProperty('_milliseconds', this.frequency);
        }, this.frequency);
    }.observes('_milliseconds').on('init'),
    cancel: function() {
        Ember.run.cancel(this._timer);
    }.on('destroy'),
    _milliseconds: 0,
    _timer: null
});