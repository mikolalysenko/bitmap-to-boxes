"use strict"

var bmp2box = require("../bmp2box")
var pack = require("ndarray-pack")
var tape = require("tape")

tape("bitmap-to-boxes", function(t) {

  var img = pack([
    [1, 1, 0, 0, 0, 1],
    [0, 1, 1, 1, 0, 1],
    [0, 1, 0, 1, 0, 1],
    [0, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1],
    [1, 1, 1, 0, 0, 1]
  ])

  console.log(bmp2box(img))
  console.log(bmp2box(img, true))

  t.end()
})