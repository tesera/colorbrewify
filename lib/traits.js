'use strict';

module.exports = function (trait, values, options) {
    var options = options || {};
    var traits = {
        areNumeric: function (values) {
            return values.reduce(function (is, v) {
                return is && !isNaN(parseFloat(v)) && isFinite(v);
            }, true);
        },
        hasNegative: function (values) {
            return values.reduce(function (has, v) {
                return has || (v < 0);
            }, false);
        },
        areBinary: function (values) {
            return values.reduce(function (is, v) {
                return is && /^yes|no|true|false|1|0$/i.test(v.toString());
            }, true);
        },
        areWholeNumbers: function (values) {
            return values.reduce(function (is, v) {
                return is && (!/\d*\.\d*/.test(parseFloat(v)));
            }, true);
        },
        areText: function (values) {
            return !traits.areNumeric(values);
        },
        havePercentUnique: function (values, options) {
            var percent = options.percent || 5;
            var distinct = values.reduce(function (uniques, v) {
                if (uniques.indexOf(v) === -1) uniques.push(v);
                return uniques
            }, []);

            return (distinct.length / values.length < (options.percent/100))
        }
    };
    
    return traits[trait](values, options);
};