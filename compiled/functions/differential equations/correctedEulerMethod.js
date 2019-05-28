"use strict";

var derY = require("./derY.js");

var derFx = require("./derFx.js");

var derFy = require("./derFy.js");

var eps = 0.001;

module.exports = function (x, b, h, y) {
  var i = x,
      ytemp = y,
      hd = h / 2,
      result = {};
  result[x] = y;

  while (Math.abs(i - b) > eps) {
    i += h;
    ytemp += h * (derY(i, ytemp) + (derFx(x, y) + derFy(i, ytemp) * derY(i, ytemp)) * hd);
    result[i] = ytemp;
  }

  return result;
};