"use strict";

var derY = require("./derY.js");

var eps = 0.001;

module.exports = function (x, b, h, y) {
  var result = {},
      ytemp;
  result[x] = y;

  while (Math.abs(x - b) >= eps) {
    x += h;
    ytemp = y;
    var temp = 3 * ytemp;

    while (Math.abs(ytemp - temp) >= eps) {
      temp = ytemp;
      ytemp = y + h * derY(x - h, temp);
    }

    y = ytemp;
    result[x] = y;
  }

  return result;
};