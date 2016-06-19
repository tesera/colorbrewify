var scale = require('d3-scale');
var chromatic = require('d3-scale-chromatic');
var schemes = require('./schemes.json')

module.exports = function (values) {
    var character;
    var scales = {
        sequential: scale.scaleSequential(chromatic.interpolatePiYG),
        qualitative: scale.scaleOrdinal(chromatic.schemeAccent),
        diverging: scale.scaleSequential(chromatic.interpolatePiYG),
        binary: scale.scaleOrdinal(chromatic.schemeAccent),
    };

    var sorted = values.slice().sort(function (a, b) {
        return a - b;
    });

    var min = sorted[0];
    var max = sorted[sorted.length-1];

    var distinct = values.reduce(function (uniques, v) {
        if (uniques.indexOf(v) === -1) uniques.push(v);
        return uniques
    }, []);

    var isNumeric = distinct.reduce(function (is, v) {
        return is && !isNaN(parseFloat(v)) && isFinite(v);
    }, true);

    var hasNegative = distinct.reduce(function (has, v) {
        return has || (v < 0);
    }, false);

    var isBinary = distinct.reduce(function (is, v) {
        return is && v.toString().match(/yes|no|true|false|1|0/i);
    }, true);
   
    if (isBinary) character = 'binary';
    else if (isNumeric && hasNegative) character = 'diverging';
    else if (distinct.length / values.length < 0.5) character = 'qualitative';
    else character = 'sequential';

    return values.map(scales[character].domain([min, max]));
};
