colorbrewer = require('colorbrewer');
array_type = require('./array_type');

colorbrewify = function(data) {

    arrtype = array_type(data);
    if(arrtype == 'mixed') throw "ERROR: Cannot colorbrewify this data.";

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
