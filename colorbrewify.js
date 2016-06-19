var scale = require('d3-scale');
var chromatic = require('d3-scale-chromatic');
var schemes = require('./schemes.json')

module.exports = function (values) {
    var character;
    var brewer = {
        sequential: scale.scaleSequential(chromatic.interpolatePiYG),
        qualitative: scale.scaleOrdinal(chromatic.schemeAccent),
        diverging: scale.scaleSequential(chromatic.interpolatePiYG),
        binary: scale.scaleOrdinal(chromatic.schemeAccent),
    };

    var uniqueValues = values.reduce(function (uniques, v) {
        if (uniques.indexOf(v) === -1) uniques.push(v);
        return uniques
    }, []);

    var isNumeric = uniqueValues.reduce(function (is, v) {
        return is && !isNaN(parseFloat(v)) && isFinite(v);
    }, true);

    var hasNegative = uniqueValues.reduce(function (has, v) {
        return has || (v < 0);
    }, false);

    var isBinary = uniqueValues.reduce(function (is, v) {
        return is && v.toString().match(/yes|no|true|false|1|0/i);
    }, true);
   
    if (isBinary) character = 'binary';
    else if (isNumeric && hasNegative) character = 'diverging';
    else if (uniqueValues.length / values.length < 0.5) character = 'qualitative';
    else character = 'sequential';

    console.log('values character is %s', character);

    return values.map(brewer[character]);
};
