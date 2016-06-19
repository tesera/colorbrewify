#!/usr/bin/env node

var program = require('commander');
var fs = require('fs');
var csv = require('csv');
var colorbrewify = require('.');

// from rows it returns columns and vice versa
function flip(data) {
    return data.reduce(function (flipped, dim) {
        dim.forEach(function (val, index) {
            flipped[index] = flipped[index] || [];
            flipped[index].push(val)
        });
        return flipped;
    }, []);
}

program
    .version('0.0.1')
    .arguments('<file>')
    .action(function (file) {
        fs.readFile(file, 'utf8', function  (err, data) {
            csv.parse(data, function(err, rows){
                var columns = flip(rows);
                var colors = columns.map(colorbrewify);
                csv.stringify(flip(colors), function (err, output) {
                    process.stdout.write(output);
                });
            });
        });
    });

program.parse(process.argv);
