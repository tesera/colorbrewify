var test = require('tape');
var colorbrewify = require('../');
var colorbrewer = require('colorbrewer');

test('it complains about badly formatted arrays', function(t) {
    t.plan(1);

    data = [1,{},false];

    t.throws(function(){
        colorbrewify(data);
    });
});

// test('sequential test', function(t) {
//     t.plan(1);

//     actual = [1,2,3,4,5,6,3,2,3,6,1];

//     t.equal(colorbrewify(actual), colorbrewer.YlGn[3]);

// });

test('binary test', function(t) {
    t.plan(1);

    bin = [true,false,true,true,false];

    t.equal(colorbrewify(bin), colorbrewer.YlGn[3]);

});