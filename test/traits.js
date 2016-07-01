var test = require('tape');
var traits = require('../lib/traits.js');

test('areNumeric', function(t) {
    t.true(traits('areNumeric', [1,2,3,4,5,6]));
    t.end();
});

test('areNumeric', function(t) {
    t.false(traits('areNumeric', [1,'a',3,4,5,6]));
    t.end();
});

test('hasNegative', function(t) {
    t.true(traits('areNumeric', [-1,0,3,4,5,6]));
    t.end();
});

test('areBinary', function(t) {
    t.true(traits('areBinary', [1,0,1,0,1,1,1,0]));
    t.end();
});

test('areBinary', function(t) {
    t.true(traits('areBinary', [true, true, false, true, true]));
    t.end();
});

test('areBinary', function(t) {
    t.true(traits('areBinary', ['true', 'true', 'false', 'true', 'true']));
    t.end();
});

test('areBinary', function(t) {
    t.true(traits('areBinary', ['TRUE', 'TRUE', 'FALSE', 'TRUE', 'TRUE']));
    t.end();
});

test('areBinary', function(t) {
    t.true(traits('areBinary', ['True', 'True', 'False', 'True', 'True']));
    t.end();
});

test('areBinary', function(t) {
    t.true(traits('areBinary', ['yes', 'yes', 'no', 'yes', 'yes']));
    t.end();
});

test('areWholeNumbers', function(t) {
    t.true(traits('areWholeNumbers', [1,2,3,4,5,6]));
    t.end();
});

test('areWholeNumbers', function(t) {
    t.false(traits('areWholeNumbers', [1.4,2,3.5,4,5,6]));
    t.end();
});

test('areText', function(t) {
    t.true(traits('areText', ['a', 'b', 'c']));
    t.end();
});

test('areText', function(t) {
    t.false(traits('areText', [1.4,2,3.5,4,5,6]));
    t.end();
});

test('havePercentUnique', function(t) {
    t.true(traits('havePercentUnique', [1,2,2,2,2,2,2,1,2,2,2,1,2,2,2,2,2,2,1,2,2,2,1,2,2,2,2,2,2,1,2,2,2,1,2,2,2,2,2,2,1,2,2,2], {percent: 5}));
    t.end();
});

test('havePercentUnique', function(t) {
    t.false(traits('havePercentUnique', [1,2,2,2,2,2,2,1,2,2,2,1,2,2,2,2,2,2,1,2,2,2,1,2,2,2,2,2,2], {percent: 5}));
    t.end();
});