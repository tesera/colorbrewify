var test = require('tape');
var colorbrewify = require('../lib/colorbrewify');
var schemes = require('../lib/schemes');

test('sequential values', function(t) {
    var expectedColors = ['rgb(255, 247, 236)', 'rgb(253, 220, 175)', 'rgb(253, 176, 122)', 'rgb(241, 108, 73)', 'rgb(200, 29, 19)', 'rgb(127, 0, 0)', 'rgb(253, 176, 122)', 'rgb(253, 220, 175)', 'rgb(253, 176, 122)', 'rgb(127, 0, 0)', 'rgb(255, 247, 236)'];
    var values = [1, 2, 3, 4, 5, 6, 3, 2, 3, 6, 1];
    var colors = colorbrewify(values, schemes('sequential').interpolateOrRd);
    t.deepLooseEqual(colors, expectedColors);
    t.end();
});

test('qualitative values', function(t) {
    var expectedColors = ['#beaed4', '#fdc086', '#fdc086', '#ffff99', '#fdc086', '#fdc086', '#fdc086', '#fdc086', '#ffff99'];
    var values = ['a', 'b', 'b', 'c', 'b', 'b', 'b', 'b', 'c'];
    var colors = colorbrewify(values, schemes('qualitative').schemeAccent);
    t.deepLooseEqual(colors, expectedColors);
    t.end();
});

test('diverging values', function(t) {
    var expectedColors = ['rgb(103, 0, 31)', 'rgb(201, 72, 67)', 'rgb(246, 182, 154)', 'rgb(250, 244, 241)', 'rgb(198, 198, 198)', 'rgb(115, 115, 115)', 'rgb(26, 26, 26)'];
    var values = [-3, -2, -1, 0, 1, 2, 3];
    var colors = colorbrewify(values, schemes('diverging').interpolateRdGy);
    t.deepLooseEqual(colors, expectedColors);
    t.end();
});

test('binary values', function(t) {
    var expectedColors = ['#fdc086', '#ffff99', '#fdc086', '#fdc086', '#ffff99'];
    var values = [true, false, true, true, false];
    var colors = colorbrewify(values, schemes('binary').schemeAccent);
    t.deepLooseEqual(colors, expectedColors);
    t.end();
});
