
colorbrewify = function(data) {

    values = {};

    for(value of data) {
        if(!values[String(value)]) values[String(value)] = 0;
        values[String(value)]++;
    }

    switch(Object.keys(values).length) {
        case 2:
            return 'binary';
            break;
        default:
            return 'sequential';
    }
};

module.exports = colorbrewify;
