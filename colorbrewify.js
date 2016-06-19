var scale = require('d3-scale');
var chromatic = require('d3-scale-chromatic');
var schemes = require('./schemes.json')

module.exports = function (values) {
    var scheme = schemes['sequentialSingle'][0];
    var brewer = {
        sequential: scale.scaleSequential(chromatic.interpolatePiYG),
        qualitative: scale.scaleOrdinal(chromatic.schemeAccent),
        diverging: scale.scaleSequential(chromatic.interpolatePiYG),
        binary: 'not implemented',
    };

    var character = 'sequential';
    var uniqueValues = values.reduce(function (uniques, v) {
        if (uniques.indexOf(v) === -1) uniques.push(v);
        return uniques
    }, []);
   
    // if unique values is less than 5% consider values qualitative
    if (uniqueValues.length / values.length < 0.5) character = 'qualitative';

    console.log('values character is %s', character);

    return values.map(brewer[character]);
};
