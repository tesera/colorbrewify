'use strict';
var chromatic = require('d3-scale-chromatic');
var schemes = {
    "qualitative": [
        "schemeAccent",
        "schemeDark2",
        "schemePaired",
        "schemePastel1",
        "schemePastel2",
        "schemeSet1",
        "schemeSet2",
        "schemeSet3"
    ],
    "diverging": [
        "interpolateBrBG",
        "interpolatePRGn",
        "interpolatePiYG",
        "interpolatePuOr",
        "interpolateRdBu",
        "interpolateRdGy",
        "interpolateRdYlBu",
        "interpolateRdYlGn",
        "interpolateSpectral"
    ],
    "sequential": [
        "interpolateBuGn",
        "interpolateBuPu",
        "interpolateGnBu",
        "interpolateOrRd",
        "interpolatePuBuGn",
        "interpolatePuBu",
        "interpolatePuRd",
        "interpolateRdPu",
        "interpolateYlGnBu",
        "interpolateYlGn",
        "interpolateYlOrBr",
        "interpolateYlOrRd",
        "interpolateBlues",
        "interpolateGreens",
        "interpolateGreys",
        "interpolatePurples",
        "interpolateReds",
        "interpolateOranges"
    ],
    "binary": [
    	"interpolateBlues",
        "interpolateGreens",
        "interpolateGreys",
        "interpolatePurples",
        "interpolateReds",
        "interpolateOranges"
    ]
};

module.exports = function (character) {
    return schemes[character].reduce(function (sz, s) {
    	sz[s] = chromatic[s];
    	return sz;
    }, {});
};