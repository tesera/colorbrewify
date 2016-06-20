# colorbrewify

The idea behind colorbrewify is to map the dimmensions of abstract data to a visual representation. Colorbrewify detects which character your data has based on some traits and applies the correct scale for that data character. Colorbrewify is based on the work of Cynthia Brewer's [Color Use Guidelines for Mapping and Visualization](http://www.personal.psu.edu/cab38/ColorSch/Schemes.html).


## api
`npm install tesera/colorbrewify`

```js
var colorbrewify = require('colorbrewify');

colorbrewify([1, 2, 3, 4, 5, 6, 3, 2, 3, 6, 1])
> ['rgb(142, 1, 82)', 'rgb(221, 114, 173)', 'rgb(250, 221, 237)', 'rgb(225, 242, 202)', 'rgb(128, 187, 71)', 'rgb(39, 100, 25)', 'rgb(250, 221, 237)', 'rgb(221, 114, 173)', 'rgb(250, 221, 237)', 'rgb(39, 100, 25)', 'rgb(142, 1, 82)']
```

## cli
`npm install tesera/colorbrewify --global`

```console
$ cat test/basic.csv
1,a,-3,1
2,b,-2,1
3,c,2,0
4,d,1,1
5,c,0,0
6,d,0,0
3,a,2,0
2,b,3,1
3,c,-2,1
6,c,-3,0
7,d,-1,0
8,a,0,1
4,a,-1,1
5,b,-2,0
2,b,0,1
7,a,0,0
8,c,-3,0
9,d,-4,0
3,d,-3,1
4,c,2,1

$ colorbrewify my-data.csv
#7fc97f,#7fc97f,"rgb(207, 68, 146)",#beaed4
#fdc086,#fdc086,"rgb(238, 171, 209)",#beaed4
#ffff99,#ffff99,"rgb(99, 164, 48)",#7fc97f
#386cb0,#beaed4,"rgb(175, 218, 125)",#beaed4
#f0027f,#ffff99,"rgb(233, 244, 217)",#7fc97f
#bf5b17,#beaed4,"rgb(233, 244, 217)",#7fc97f
#ffff99,#7fc97f,"rgb(99, 164, 48)",#7fc97f
#fdc086,#fdc086,"rgb(39, 100, 25)",#beaed4
#ffff99,#ffff99,"rgb(238, 171, 209)",#beaed4
#bf5b17,#ffff99,"rgb(207, 68, 146)",#7fc97f
#666666,#beaed4,"rgb(250, 229, 240)",#7fc97f
#7fc97f,#7fc97f,"rgb(233, 244, 217)",#beaed4
#386cb0,#7fc97f,"rgb(250, 229, 240)",#beaed4
#f0027f,#fdc086,"rgb(238, 171, 209)",#7fc97f
#fdc086,#fdc086,"rgb(233, 244, 217)",#beaed4
#666666,#7fc97f,"rgb(233, 244, 217)",#7fc97f
#7fc97f,#ffff99,"rgb(207, 68, 146)",#7fc97f
#beaed4,#beaed4,"rgb(142, 1, 82)",#7fc97f
#ffff99,#beaed4,"rgb(207, 68, 146)",#beaed4
#386cb0,#ffff99,"rgb(99, 164, 48)",#beaed4
```

* http://www.personal.psu.edu/cab38/ColorSch/Schemes.html
* http://colorbrewer2.org/
* https://bl.ocks.org/mbostock/5577023
