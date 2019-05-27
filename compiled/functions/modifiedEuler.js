"use strict";

var derY = require("./derY.js");

var eps = 0.001;

module.exports = function (x, b, h, y) {
  var i = x,
      ytemp = y,
      result = {},
      py;
  result[x] = y;

  while (Math.abs(i - b) > eps) {
    py = ytemp + h * derY(i, ytemp);
    ytemp += h * ((derY(i, ytemp) + derY(h + i, py)) / 2);
    result[i] = ytemp;
    i += h;
  }

  return result;
};