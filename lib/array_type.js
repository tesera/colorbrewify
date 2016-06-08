
var array_type = function(arr) {

    valid_types = [
        {
            name: 'boolean',
            match: function(v) { return v === true || v === false; }
        },
        {
            name: 'integer',
            match: Number.isInteger
        },
        {
            name: 'numeric',
            match: Number.isFinite
        }
    ];

    for(value of arr) {
        valid_types.filter(function(elem, idx, arr) {
            !elem.match(value);
        })
    }

    if(valid_types.length) return valid_types[0].name;
    return false;

};

module.exports = array_type;
