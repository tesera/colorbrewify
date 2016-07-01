var test = require('tape');
var schemes = require('../lib/schemes.js');

test('qualitative schemes', function(t) {
    var scheme = schemes('qualitative');
    t.equal(typeof scheme.schemeAccent, 'object');
    t.equal(typeof scheme.schemeDark2, 'object');
    t.equal(typeof scheme.schemePaired, 'object');
    t.equal(typeof scheme.schemePastel1, 'object');
    t.equal(typeof scheme.schemePastel2, 'object');
    t.equal(typeof scheme.schemeSet1, 'object');
    t.equal(typeof scheme.schemeSet2, 'object');
    t.equal(typeof scheme.schemeSet3, 'object');
    t.end();
});

test('diverging scheme', function(t) {
    var scheme = schemes('diverging');
    t.equal(typeof scheme.interpolateBrBG, 'function');
    t.equal(typeof scheme.interpolatePRGn, 'function');
    t.equal(typeof scheme.interpolatePiYG, 'function');
    t.equal(typeof scheme.interpolatePuOr, 'function');
    t.equal(typeof scheme.interpolateRdBu, 'function');
    t.equal(typeof scheme.interpolateRdGy, 'function');
    t.equal(typeof scheme.interpolateRdYlBu, 'function');
    t.equal(typeof scheme.interpolateRdYlGn, 'function');
    t.equal(typeof scheme.interpolateSpectral, 'function');
    t.end();
});

test('sequential scheme', function(t) {
    var scheme = schemes('sequential');
    t.equal(typeof scheme.interpolateBuGn, 'function');
	t.equal(typeof scheme.interpolateBuPu, 'function');
	t.equal(typeof scheme.interpolateGnBu, 'function');
	t.equal(typeof scheme.interpolateOrRd, 'function');
	t.equal(typeof scheme.interpolatePuBuGn, 'function');
	t.equal(typeof scheme.interpolatePuBu, 'function');
	t.equal(typeof scheme.interpolatePuRd, 'function');
	t.equal(typeof scheme.interpolateRdPu, 'function');
	t.equal(typeof scheme.interpolateYlGnBu, 'function');
	t.equal(typeof scheme.interpolateYlGn, 'function');
	t.equal(typeof scheme.interpolateYlOrBr, 'function');
	t.equal(typeof scheme.interpolateYlOrRd, 'function');
    t.equal(typeof scheme.interpolateBlues, 'function');
    t.equal(typeof scheme.interpolateGreens, 'function');
    t.equal(typeof scheme.interpolateGreys, 'function');
    t.equal(typeof scheme.interpolatePurples, 'function');
    t.equal(typeof scheme.interpolateReds, 'function');
    t.equal(typeof scheme.interpolateOranges, 'function');
    t.end();
});

test('binary scheme', function(t) {
    var scheme = schemes('binary');
    t.equal(typeof scheme.interpolateBlues, 'function');
    t.equal(typeof scheme.interpolateGreens, 'function');
    t.equal(typeof scheme.interpolateGreys, 'function');
    t.equal(typeof scheme.interpolatePurples, 'function');
    t.equal(typeof scheme.interpolateReds, 'function');
    t.equal(typeof scheme.interpolateOranges, 'function');
    t.end();
});