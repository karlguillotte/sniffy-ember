import computeHandle from 'sniffy/utils/compute-handle';

module('computeHandle');

// Replace this with your real tests.
test('it works', function() {
  equal(computeHandle(), null);
  equal(computeHandle('Karl'), 'K');
  equal(computeHandle('Karl', 'Guillotte'), 'KG');
  equal(computeHandle('karl', 'guillotte'), 'KG');
  equal(computeHandle('Karl', 'Richard', 'Guillotte'), 'KRG');
  equal(computeHandle('Karl', null, 'Guillotte'), 'KG');
  equal(computeHandle('Karl', undefined, 'Guillotte'), 'KG');
  equal(computeHandle('Karl', '', 'Guillotte'), 'KG');
  equal(computeHandle('Karl', ' ', 'Guillotte'), 'KG');
  equal(computeHandle(' ', ' '), null);
  equal(computeHandle(['Karl', 'Guillotte']), 'KG');
  equal(computeHandle('1', 2, 3), '123');
});
