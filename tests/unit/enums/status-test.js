/* global moment */

import { test, moduleFor } from 'ember-qunit';
import Ember from 'ember';

moduleFor('enum:status');

test('it exists', function() {

    var Status = this.container.resolve('enum:status');

    ok(Status, 'Status exists');

    equal(Status.get('length'), 2);

    ok(Status.OPENNED, 'Status can be OPENNED');
    ok(Status.CANCELLED, 'Status can be CANCELLED');

    ok(Status.get('values').contains(Status.OPENNED), 'Status values contains OPENNED');
    ok(Status.get('values').contains(Status.CANCELLED), 'Status values contains CANCELLED');
    
});

