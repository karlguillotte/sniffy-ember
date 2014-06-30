import { test, moduleForModel } from 'ember-qunit';

moduleForModel('settings', 'Settings', {
  needs: ['model:user']
});

test('it exists', function() {
  var model = this.subject();
  var store = this.store();

  ok(model);

});
