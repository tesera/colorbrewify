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
    .option('--exclude [column]', 'comma seperated list of columns to exclude')
    .option('--no-headers', 'if csv includes no headers')
    .action(function (file) {
        fs.readFile(file, 'utf8', function  (err, data) {
            csv.parse(data, function(err, rows){
                var headers = [];
                if (!program.noHeaders) headers = rows.shift();
                var exclude = program.exclude ? program.exclude.split(',') : [];
                var columns = flip(rows);
                var colors = columns.map(function (c, i) {
                    return exclude.indexOf(i+1+'') > -1 ? c : colorbrewify(c);
                });
                var colored = flip(colors);
                if (!program.noHeaders) colored.unshift(headers);
                csv.stringify(colored, function (err, output) {
                    process.stdout.write(output);
                });
            });
        });
    });

program.parse(process.argv);
