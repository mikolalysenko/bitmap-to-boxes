"use strict"

module.exports = getBoxes

var rectangleDecomposition = require("rectangle-decomposition")
var contour = require("contour-2d")
var greedy = require("greedy-mesher")({
  extraArgs: 1,
  order: [1, 0],
  merge: function(a, b) {
    return !a === !b
  },
  append: function(lo_x, lo_y, hi_x, hi_y, val, array, result) {
    result.push([[lo_x, lo_y], [hi_x, hi_y]])
  }
})

function getBoxes(image, useGreedy) {
  if(useGreedy) {
    var result = []
    greedy(image, result)
    return result
  }
  var c = contour(image)
  console.log(c)
  return rectangleDecomposition(c)
}