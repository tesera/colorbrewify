colorbrewer = require('colorbrewer');
d3 = require('d3');

colorbrewify = function(data, options) {

    if(!options) options = {};
    if(!options.scheme) options.scheme = 'YlGn';
    if(!options.scale) options.scale = 'linear';

    var x = d3.scale[options.scale]()
        .domain(d3.extent(data))
        .range([colorbrewer[options.scheme][3][0], colorbrewer[options.scheme][3][2]]);

    return x;
};

module.exports = colorbrewify;
