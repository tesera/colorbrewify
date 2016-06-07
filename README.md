# colorbrewify

Write small lib which takes in an array of values and give you back an array of same length of colour brewer hex values.

```js
colorbrewify([2,3,4,5, ...])
-> ["#f1eef6","#bdc9e1","#74a9cf","#0570b0", ...]
```

The lib should be able to detect which type the values are and pick the right colour ramp based on colour brewer rules (http://www.personal.psu.edu/cab38/ColorSch/Schemes.html) 

The first version should only be concerned with the main types; binary, qualitive, diverging and sequential.

Look into existing libs which could potentially take care or type detection and colour brewer palettes enums. I believe D3 has most of this already baked in. i.e. domains, scales, ordinal...

Type detection and colour assignments could be split into two separate libs.

The idea of this lib is to wrap the logic into a nicer simpler api.

http://colorbrewer2.org/

https://bl.ocks.org/mbostock/5577023
