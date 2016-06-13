colorbrewer = require('colorbrewer');
d3 = require('d3');
d3_scale_chromatic = require('d3-scale-chromatic');

colorbrewify = function(data, options) {

    if(!options) options = {};
    if(!options.scheme) options.scheme = 'YlGn';
    if(!options.scale) options.scale = 'linear';
    var x = d3.scale[options.scale]()
        .domain(d3.extent(data))
        .range([0,1]);

    return function(a) { return d3_scale_chromatic.interpolateYlGn(x(a)); };
};

module.exports = colorbrewify;
