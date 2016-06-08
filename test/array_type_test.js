var test = require('tape');
var array_type = require('../lib/array_type');

test('binary test', function(t) {
    t.plan(1);

    arr = [true,false];

    t.equal(array_type(arr), 'boolean');

});

test('object test', function(t) {
    t.plan(1);

    arr = [new Object(),{}];

    t.equal(array_type(arr), 'object');

});
