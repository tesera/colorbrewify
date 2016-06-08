colorbrewer = require('colorbrewer');

colorbrewify = function(data) {

    values = {};

    for(value of data) {
        if(!values[String(value)]) values[String(value)] = 0;
        values[String(value)]++;
    }

    var uniqs = Object.keys(values).length;

    if(uniqs==2) return colorbrewer.YlGn[3];
    if(uniqs>8) return false;
    return colorbrewer.YlGn[uniqs];
};

module.exports = colorbrewify;
