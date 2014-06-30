/* global moment */

import { test, moduleFor } from 'ember-qunit';
import Ember from 'ember';

moduleFor('enum:answer');

test('it exists', function() {

    var Answer = this.container.resolve('enum:answer');

    ok(Answer, 'Answer exists');

    equal(Answer.get('length'), 3);

    ok(Answer.IGNORE, 'Answer can be IGNORE');
    ok(Answer.ACCEPT, 'Answer can be ACCEPT');
    ok(Answer.DECLINE, 'Answer can be DECLINE');

    ok(Answer.get('values').contains(Answer.IGNORE), 'Answer values contains IGNORE');
    ok(Answer.get('values').contains(Answer.ACCEPT), 'Answer values contains ACCEPT');
    ok(Answer.get('values').contains(Answer.DECLINE), 'Answer values contains DECLINE');
    
});

