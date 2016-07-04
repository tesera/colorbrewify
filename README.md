# colorbrewify

The idea behind colorbrewify is to map the dimmensions of abstract data to a visual representation. Colorbrewify detects which character your data has based on some traits and applies the correct scale for that data character. Colorbrewify is based on the work of Cynthia Brewer's [Color Use Guidelines for Mapping and Visualization](http://www.personal.psu.edu/cab38/ColorSch/Schemes.html).

`npm install tesera/colorbrewify`

```console
$ node
> var colorbrewify = require('.');
undefined
> var values = [1,2,3,4,5,6];
undefined
> colorbrewify.character(values);
'sequential'
> var schemes = colorbrewify.schemes('sequential');
undefined
console.log(schemes);
{ interpolateBuGn: [Function],
  interpolateBuPu: [Function],
  interpolateGnBu: [Function],
  interpolateOrRd: [Function],
  interpolatePuBuGn: [Function],
  interpolatePuBu: [Function],
  interpolatePuRd: [Function],
  interpolateRdPu: [Function],
  interpolateYlGnBu: [Function],
  interpolateYlGn: [Function],
  interpolateYlOrBr: [Function],
  interpolateYlOrRd: [Function],
  interpolateBlues: [Function],
  interpolateGreens: [Function],
  interpolateGreys: [Function],
  interpolatePurples: [Function],
  interpolateReds: [Function],
  interpolateOranges: [Function] }
> colorbrewify.colorbrewify(values, schemes.interpolateOrRd);
[ 'rgb(255, 247, 236)',
  'rgb(253, 220, 175)',
  'rgb(253, 176, 122)',
  'rgb(241, 108, 73)',
  'rgb(200, 29, 19)',
  'rgb(127, 0, 0)' ]
```

* http://www.personal.psu.edu/cab38/ColorSch/Schemes.html
* http://colorbrewer2.org/
* https://bl.ocks.org/mbostock/5577023
