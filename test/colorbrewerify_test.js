var test = require('tape');
var colorbrewify = require('../');
var colorbrewer = require('colorbrewer');

test('sequential test', function(t) {
    t.plan(1);

    arr = [1,2,3,4,5,6,3,2,3,6,1];

    t.deepEquals(colorbrewify(arr), [1,6]);

});

test('binary test', function(t) {
    t.plan(1);

    arr = [true,false,true,true,false];

    t.deepEquals(colorbrewify(arr), [true, false]);

});

test('qualitative test', function(t) {
    t.plan(1);

    arr = ["a","b","b","c"];

    t.deepEquals(colorbrewify(arr), ["a","c"]);

});

test('diverging test', function(t) {
    t.plan(1);

    arr = [-1,0,1];

    t.deepEquals(colorbrewify(arr), [-1,1]);
});