var test = require('tape');
var colorbrewer = require('../');

test('sequential test', function(t) {
    t.plan(1);

    seq = [1,2,3,4,5,6];

    t.equal(colorbrewer(seq), 'sequential');

})