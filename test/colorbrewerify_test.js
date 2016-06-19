var test = require('tape');
var colorbrewify = require('../');

test('sequential values', function(t) {
    var expectedColors = ['rgb(39, 100, 25)', 'rgb(39, 100, 25)', 'rgb(39, 100, 25)', 'rgb(39, 100, 25)', 'rgb(39, 100, 25)', 'rgb(39, 100, 25)', 'rgb(39, 100, 25)', 'rgb(39, 100, 25)', 'rgb(39, 100, 25)', 'rgb(39, 100, 25)', 'rgb(39, 100, 25)' ];
    var values = [1, 2, 3, 4, 5, 6, 3, 2, 3, 6, 1];
    var colors = colorbrewify(values);
    t.deepLooseEqual(colors, expectedColors);
    t.end();
});

test('qualitative values', function(t) {
    var expectedColors = ['#7fc97f', '#beaed4', '#beaed4', '#fdc086', '#beaed4', '#beaed4', '#beaed4', '#beaed4', '#fdc086'];
    var values = ['a', 'b', 'b', 'c', 'b', 'b', 'b', 'b', 'c'];
    var colors = colorbrewify(values);
    t.deepLooseEqual(colors, expectedColors);
    t.end();
});

test('diverging values', function(t) {
    var expectedColors = ['rgb(142, 1, 82)', 'rgb(142, 1, 82)', 'rgb(142, 1, 82)', 'rgb(142, 1, 82)', 'rgb(39, 100, 25)', 'rgb(39, 100, 25)', 'rgb(39, 100, 25)'];
    var values = [-3, -2, -1, 0, 1, 2, 3];
    var colors = colorbrewify(values);
    t.deepLooseEqual(colors, expectedColors);
    t.end();
});

test('binary values', function(t) {
    var expectedColors = ['#7fc97f', '#beaed4', '#7fc97f', '#7fc97f', '#beaed4'];
    var values = [true, false, true, true, false];
    var colors = colorbrewify(values);
    t.deepLooseEqual(colors, expectedColors);
    t.end();
});
