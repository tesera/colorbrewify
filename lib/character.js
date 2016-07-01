'use strict';
var traits = require('../lib/traits.js');

module.exports = function (values) {

    var distinct = values.reduce(function (uniques, v) {
        if (uniques.indexOf(v) === -1) uniques.push(v);
        return uniques
    }, []);

    if (traits('areBinary', values)) 
    	return 'binary';
    else if (traits('areNumeric', values) && traits('hasNegative', values)) 
    	return 'diverging';
    else if (traits('areText', values) || 
    	(traits('areWholeNumbers', values) && traits('havePercentUnique', values, {percent: 5}))) 
    	return 'qualitative';
    else return 'sequential';
};