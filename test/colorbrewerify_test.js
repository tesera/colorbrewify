var test = require('tape');
var colorbrewify = require('../');
var colorbrewer = require('colorbrewer');

test('sequential test', function(t) {
    t.plan(2);

    arr = [1,2,3,4,5,6,3,2,3,6,1];

    var x = colorbrewify(arr);

    t.equal(x(1), colorbrewer.YlGn[3][0]);
    t.equal(x(6), colorbrewer.YlGn[3][2]);

});

test('binary test', function(t) {
    t.plan(2);

    arr = [true,false,true,true,false];

    var x = colorbrewify(arr);

    t.equal(x(false), colorbrewer.YlGn[3][0]);
    t.equal(x(true), colorbrewer.YlGn[3][2]);

});

test('qualitative test', function(t) {
    t.plan(2);

    arr = ["a","b","b","c"];

    var x = colorbrewify(arr, { scale: 'ordinal' });

    t.equal(x("a"), colorbrewer.YlGn[3][0]);
    t.equal(x("c"), colorbrewer.YlGn[3][2]);

});

test('diverging test', function(t) {
    t.plan(2);

    arr = [-1,0,1];

    var x = colorbrewify(arr);

    t.equal(x(-1), colorbrewer.YlGn[3][0]);
    t.equal(x(1), colorbrewer.YlGn[3][2]);
});

test('scheme config', function(t) {
    t.plan(1);

    arr = [true,false]

    var x = colorbrewify(arr, {scheme: 'PuRd'});

    t.equal(x(true), colorbrewer.PuRd[3][2]);
});
