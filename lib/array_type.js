
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
        },
        {
            name: 'object',
            match: function(v) { return typeof v === 'object'; }
        }
    ];

    for(value of arr) {
        valid_types = valid_types.filter(function(type, idx, arr) {
            return type.match(value);
        })
    }

    if(valid_types.length) return valid_types[0].name;
    return false;

};

module.exports = array_type;
