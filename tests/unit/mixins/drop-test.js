import Ember from 'ember';
import DropMixin from 'sniffy/mixins/drop';

module('DropMixin');

test('it works', function() {
  var DropObject = Ember.Object.extend(DropMixin);
  var subject = DropObject.create();
  ok(subject);
});
