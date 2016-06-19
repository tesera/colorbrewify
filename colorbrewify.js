var scale = require('d3-scale');
var chromatic = require('d3-scale-chromatic');
var schemes = require('./schemes.json')

module.exports = function (values) {
    var scheme = schemes['sequentialSingle'][0];
    var brewer = {
        binary: 'not implemented',
        qualitative: scale.scaleOrdinal(chromatic.schemeAccent),
        diverging: scale.scaleSequential(chromatic.interpolatePiYG),
        sequential: scale.scaleSequential(chromatic.interpolatePiYG)
    };

    return values.map(brewer['sequential']);
};
