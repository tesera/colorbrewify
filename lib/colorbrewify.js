colorbrewer = require('colorbrewer');
d3 = require('d3');

colorbrewify = function(data) {

    var x = d3.scale.linear()
        .domain(d3.extent(data))
        .range([colorbrewer.YlGn[3][0], colorbrewer.YlGn[3][2]])

    return x;
};

module.exports = colorbrewify;
