import Ember from 'ember';
import DropMixin from 'sniffy/mixins/drop';

module('DropMixin');

// Replace this with your real tests.
test('it works', function() {
  var DropObject = Ember.Object.extend(DropMixin);
  var subject = DropObject.create();
  ok(subject);
});
