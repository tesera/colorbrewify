'use strict';
var scale = require('d3-scale');

module.exports = function (values, scheme) {
    var colorScale = typeof scheme === 'function' ? scale.scaleSequential(scheme) : scale.scaleOrdinal(scheme);
    var min = Math.min.apply(null, values); 
    var max = Math.max.apply(null, values);
    return values.map(colorScale.domain([min, max]));
};