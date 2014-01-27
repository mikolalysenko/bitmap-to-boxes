bitmap-to-boxes
===============
Partitions a binary image into a non-overlapping collection of rectangles.  Works both in node.js and in browserify.

## Example

```javascript
var image = require("ndarray-pack")([
  [1, 1, 0, 0, 0, 1],
  [0, 1, 1, 1, 0, 1],
  [0, 1, 0, 1, 0, 1],
  [0, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1],
  [1, 1, 1, 0, 0, 1]
])

var boxes = require("bitmap-to-boxes")(image)
```

## Install

```
npm install bitmap-to-boxes
```

## API

### `require("bitmap-to-boxes")(image[, greedy])`
Decomposes the binary bitmap image into a collection of boxes.

* `image` is a binary 2D [ndarray](https://github.com/mikolalysenko/ndarray)
* `greedy` is an optional flag, which if set uses a faster greedy approximation instead of an optimal algorithm.

**Returns** A list of boxes encoded by their lower/upper bounds respectively which partition the image.

## Credits
(c) 2014 Mikola Lysenko. MIT License