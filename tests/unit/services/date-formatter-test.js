import { test, moduleFor } from 'ember-qunit';

moduleFor('service:date-formatter', 'DateFormatterService', {
  needs: ['service:date-formatter']
});

test('it exists', function() {
  var service = this.container.resolve('service:date-formatter');
  
  ok(service);
});
