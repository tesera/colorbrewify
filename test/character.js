var test = require('tape');
var character = require('../lib/character');

test('binary character', function(t) {
    var c = character([1,0,1,0,1,1,1,0]);
    t.equal(c, 'binary');
    t.end();
});

test('binary character', function(t) {
    var c = character([true, true, false, true, true]);
    t.equal(c, 'binary');
    t.end();
});

test('binary character', function(t) {
    var c = character(['true', 'true', 'false', 'true', 'true']);
    t.equal(c, 'binary');
    t.end();
});

test('binary character', function(t) {
    var c = character(['TRUE', 'TRUE', 'FALSE', 'TRUE', 'TRUE']);
    t.equal(c, 'binary');
    t.end();
});

test('binary character', function(t) {
    var c = character(['True', 'True', 'False', 'True', 'True']);
    t.equal(c, 'binary');
    t.end();
});

test('binary character', function(t) {
    var c = character(['yes', 'yes', 'no', 'yes', 'yes']);
    t.equal(c, 'binary');
    t.end();
});

test('diverging character', function(t) {
    var c = character([-3,-2,-1,0,1,2,3]);
    t.equal(c, 'diverging');
    t.end();
});

test('diverging character', function(t) {
    var c = character([-1,0,4,6,-2,-3,8]);
    t.equal(c, 'diverging');
    t.end();
});

test('qualitative character', function(t) {
    var c = character([1,2,2,2,2,2,2,1,2,2,2,1,2,2,2,2,2,2,1,2,2,2,1,2,2,2,2,2,2,1,2,2,2,1,2,2,2,2,2,2,1,2,2,2]);
    t.equal(c, 'qualitative');
    t.end();
});

test('qualitative character', function(t) {
    var c = character(['a','b','c','d','c','b','a','d','c','c','b']);
    t.equal(c, 'qualitative');
    t.end();
});

test('qualitative character', function(t) {
    var c = character(['one','two','two','three','one','one']);
    t.equal(c, 'qualitative');
    t.end();
});

test('sequential character', function(t) {
    var c = character([1,2,3,4,5,6]);
    t.equal(c, 'sequential');
    t.end();
});

test('sequential character', function(t) {
    var c = character([0.123,0.343,0.333,0.435,0.553,0.735]);
    t.equal(c, 'sequential');
    t.end();
});